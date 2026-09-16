"use client";

import { useEffect, useRef, useState } from "react";

// Keypoints for desktop - confined to the right margin (white space)
const keypointsDesktop = [
  { t: 0.0, x: 0.92 },
  { t: 0.15, x: 0.86 },
  { t: 0.30, x: 0.93 },
  { t: 0.45, x: 0.87 },
  { t: 0.60, x: 0.92 },
  { t: 0.75, x: 0.86 },
  { t: 0.90, x: 0.91 },
  { t: 1.0, x: 0.88 }
];

// Rich, dynamic colors stops for painting gradient
const colorStops = [
  { t: 0.0, r: 200, g: 255, b: 68 },   // #c8ff44 (brand-accent)
  { t: 0.20, r: 251, g: 191, b: 36 },  // #fbbf24 (amber)
  { t: 0.40, r: 244, g: 63, b: 94 },   // #f43f5e (rose/coral)
  { t: 0.60, r: 139, g: 92, b: 246 },  // #8b5cf6 (violet)
  { t: 0.80, r: 6, g: 182, b: 212 },   // #06b6d4 (cyan/teal)
  { t: 1.0, r: 52, g: 211, b: 153 }    // #34d399 (emerald)
];

interface Splatter {
  x: number;
  y: number;
  radius: number;
  color: string;
  alpha: number;
}

export default function PaintbrushTrail() {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    const checkViewport = () => {
      // Completely disable on mobile and tablet pages (width < 768px)
      setShouldRender(window.innerWidth >= 768);
    };
    
    checkViewport();
    window.addEventListener("resize", checkViewport);
    return () => window.removeEventListener("resize", checkViewport);
  }, []);

  if (!shouldRender) return null;

  return <PaintbrushTrailInner />;
}

function PaintbrushTrailInner() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const brushContainerRef = useRef<HTMLDivElement>(null);
  const brushBristlesRef = useRef<SVGPathElement>(null);
  const brushDipRef = useRef<SVGPathElement>(null);

  // Store dimensions and scroll position in refs for 60fps access without re-renders
  const dimensionsRef = useRef({ width: 1200, height: 5000, viewportHeight: 800 });
  
  // Animation variables
  const currentXRef = useRef(0);
  const currentYRef = useRef(0);
  const prevXRef = useRef(0);
  const prevYRef = useRef(0);
  const currentAngleRef = useRef(-Math.PI / 6);
  const maxYReachedRef = useRef(0);
  const splattersRef = useRef<Splatter[]>([]);
  const liftProgressRef = useRef(1.0); // Start fully lifted/invisible
  const brushOpacityRef = useRef(0.0);
  
  const requestRef = useRef<number | null>(null);

  // Smooth interpolation helper
  const getPathX = (t: number, width: number) => {
    let p0 = keypointsDesktop[0];
    let p1 = keypointsDesktop[keypointsDesktop.length - 1];
    
    for (let i = 0; i < keypointsDesktop.length - 1; i++) {
      if (t >= keypointsDesktop[i].t && t <= keypointsDesktop[i+1].t) {
        p0 = keypointsDesktop[i];
        p1 = keypointsDesktop[i+1];
        break;
      }
    }
    
    const range = p1.t - p0.t;
    const s = range === 0 ? 0 : (t - p0.t) / range;
    const sSmooth = s * s * (3 - 2 * s); // smoothstep
    
    return (p0.x + (p1.x - p0.x) * sSmooth) * width;
  };

  // Color interpolation helper
  const getColorForT = (t: number) => {
    const clampedT = Math.max(0, Math.min(1, t));
    let c0 = colorStops[0];
    let c1 = colorStops[colorStops.length - 1];
    
    for (let i = 0; i < colorStops.length - 1; i++) {
      if (clampedT >= colorStops[i].t && clampedT <= colorStops[i+1].t) {
        c0 = colorStops[i];
        c1 = colorStops[i+1];
        break;
      }
    }
    
    const range = c1.t - c0.t;
    const s = range === 0 ? 0 : (clampedT - c0.t) / range;
    
    const r = Math.round(c0.r + (c1.r - c0.r) * s);
    const g = Math.round(c0.g + (c1.g - c0.g) * s);
    const b = Math.round(c0.b + (c1.b - c0.b) * s);
    
    return `rgb(${r}, ${g}, ${b})`;
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    
    const handleResize = () => {
      const width = window.innerWidth;
      const height = document.documentElement.scrollHeight;
      const viewportHeight = window.innerHeight;
      
      dimensionsRef.current = { width, height, viewportHeight };
      
      if (canvas) {
        canvas.width = width;
        canvas.height = viewportHeight;
      }
    };

    handleResize();

    // Set up a ResizeObserver to catch layout shifting dynamically
    const observer = new ResizeObserver(() => {
      handleResize();
    });
    observer.observe(document.body);

    window.addEventListener("resize", handleResize);
    
    // Set starting position based on initial scroll Y
    const initialScrollY = window.scrollY;
    const maxScrollRange = document.documentElement.scrollHeight - window.innerHeight || 1;
    const scrollPercent = Math.max(0, Math.min(1, initialScrollY / maxScrollRange));
    const startY = scrollPercent * document.documentElement.scrollHeight;
    const startX = getPathX(scrollPercent, window.innerWidth);
    
    currentXRef.current = startX;
    currentYRef.current = startY;
    prevXRef.current = startX;
    prevYRef.current = startY;
    maxYReachedRef.current = startY;

    // Main animation loop
    const loop = () => {
      const scrollY = window.scrollY;
      const dims = dimensionsRef.current;
      
      const maxScrollRange = dims.height - dims.viewportHeight || 1;
      const scrollPercent = Math.max(0, Math.min(1, scrollY / maxScrollRange));
      
      // Target position along the path linked to scroll progress
      const targetY = scrollPercent * dims.height;
      
      // Lerp (smooth lag movement)
      const dy = targetY - currentYRef.current;
      currentYRef.current += dy * 0.07;
      
      const t = Math.max(0, Math.min(1, currentYRef.current / (dims.height || 1)));
      const targetX = getPathX(t, dims.width);
      const dx = targetX - currentXRef.current;
      currentXRef.current += dx * 0.07;
      
      // Record max scroll depth reached so the line stays painted
      if (currentYRef.current > maxYReachedRef.current) {
        maxYReachedRef.current = currentYRef.current;
      }
      
      // Movement velocity
      const vx = currentXRef.current - prevXRef.current;
      const vy = currentYRef.current - prevYRef.current;
      
      prevXRef.current = currentXRef.current;
      prevYRef.current = currentYRef.current;
      
      const speed = Math.sqrt(vx * vx + vy * vy);
      const isMoving = speed > 0.08 || Math.abs(targetY - currentYRef.current) > 0.5;
      
      // Update lift progress
      const targetLift = isMoving ? 0 : 1;
      const liftLerp = targetLift === 0 ? 0.18 : 0.025; // lands fast, lifts off very gracefully
      liftProgressRef.current += (targetLift - liftProgressRef.current) * liftLerp;
      
      // Brush opacity matches lift progress
      brushOpacityRef.current = 1 - liftProgressRef.current;
      
      const currentColor = getColorForT(t);
      
      // 1. Update brush DOM element directly for high performance
      const container = brushContainerRef.current;
      if (container) {
        const scale = 1 + liftProgressRef.current * 0.15; // grows slightly as it lifts
        container.style.transform = `translate3d(${currentXRef.current}px, ${currentYRef.current - scrollY}px, 0) scale(${scale}) rotate(${currentAngleRef.current}rad)`;
        container.style.opacity = `${brushOpacityRef.current}`;
        
        // Dynamic drop shadow on brush based on lift progress
        const shadowX = 3 + liftProgressRef.current * 8;
        const shadowY = 8 + liftProgressRef.current * 16;
        const shadowBlur = 5 + liftProgressRef.current * 10;
        const shadowAlpha = 0.22 - liftProgressRef.current * 0.08;
        const svgElement = container.querySelector("svg");
        if (svgElement) {
          svgElement.style.filter = `drop-shadow(${shadowX}px ${shadowY}px ${shadowBlur}px rgba(9, 9, 11, ${shadowAlpha}))`;
        }
      }
      
      const bristles = brushBristlesRef.current;
      if (bristles) {
        bristles.setAttribute("fill", currentColor);
      }
      
      const dip = brushDipRef.current;
      if (dip) {
        dip.setAttribute("fill", currentColor);
      }
      
      // Determine brush rotation angle
      if (speed > 0.08) {
        // Calculate tangent angle for rotation
        const targetAngle = Math.atan2(vy, vx) - Math.PI / 2;
        let angleDiff = targetAngle - currentAngleRef.current;
        angleDiff = Math.atan2(Math.sin(angleDiff), Math.cos(angleDiff)); // normalize angle difference
        currentAngleRef.current += angleDiff * 0.15;
        
        // Spawn splatters when user scrolls fast
        if (speed > 4.5 && Math.random() < 0.15) {
          const randAngle = Math.random() * Math.PI * 2;
          const dist = 8 + Math.random() * 26;
          const sx = currentXRef.current + Math.cos(randAngle) * dist;
          const sy = currentYRef.current + Math.sin(randAngle) * dist;
          const radius = 1 + Math.random() * 2.4;
          
          splattersRef.current.push({
            x: sx,
            y: sy,
            radius,
            color: currentColor,
            alpha: 0.35 + Math.random() * 0.4
          });
          
          if (splattersRef.current.length > 250) {
            splattersRef.current.shift();
          }
        }
      } else {
        // Tilt back to a nice diagonal rest angle
        const targetAngle = -Math.PI / 5;
        let angleDiff = targetAngle - currentAngleRef.current;
        angleDiff = Math.atan2(Math.sin(angleDiff), Math.cos(angleDiff));
        currentAngleRef.current += angleDiff * 0.06;
      }
      
      // 2. Redraw Canvas
      if (canvas) {
        const ctx = canvas.getContext("2d");
        if (ctx) {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          
          // Generate linear gradient for the trail
          const grad = ctx.createLinearGradient(0, -scrollY, 0, dims.height - scrollY);
          colorStops.forEach(stop => {
            grad.addColorStop(stop.t, `rgba(${stop.r}, ${stop.g}, ${stop.b}, 0.85)`);
          });
          
          // Generate points along the path
          const points: { x: number; y: number; t: number }[] = [];
          const stepSize = 10; // optimized step size
          const maxStep = Math.ceil(dims.height / stepSize);
          
          for (let i = 0; i <= maxStep; i++) {
            const py = (i / maxStep) * dims.height;
            if (py > maxYReachedRef.current) break;
            
            const pt = py / dims.height;
            const px = getPathX(pt, dims.width);
            points.push({ x: px, y: py, t: pt });
          }
          
          // Add current tip position as final point for a perfect joint only when drawing at the leading edge
          if (points.length > 0 && currentYRef.current >= maxYReachedRef.current && maxYReachedRef.current < dims.height) {
            points.push({ x: currentXRef.current, y: currentYRef.current, t: t });
          }
          
          if (points.length >= 2) {
            // A. Draw soft 3D drop shadow path
            const shadowOffset = 2;
            const shadowWidth = 24;
            ctx.lineCap = "round";
            ctx.lineJoin = "round";
            
            if (points.length > 20) {
              ctx.beginPath();
              points.slice(0, points.length - 19).forEach((p, idx) => {
                if (idx === 0) ctx.moveTo(p.x + shadowOffset, p.y - scrollY + shadowOffset);
                else ctx.lineTo(p.x + shadowOffset, p.y - scrollY + shadowOffset);
              });
              ctx.lineWidth = shadowWidth;
              ctx.strokeStyle = "rgba(9, 9, 11, 0.04)";
              ctx.stroke();
              
              for (let i = points.length - 20; i < points.length - 1; i++) {
                ctx.beginPath();
                ctx.moveTo(points[i].x + shadowOffset, points[i].y - scrollY + shadowOffset);
                ctx.lineTo(points[i+1].x + shadowOffset, points[i+1].y - scrollY + shadowOffset);
                const ratio = (points.length - 1 - i) / 20;
                ctx.lineWidth = shadowWidth * ratio;
                ctx.strokeStyle = "rgba(9, 9, 11, 0.04)";
                ctx.stroke();
              }
            } else {
              for (let i = 0; i < points.length - 1; i++) {
                ctx.beginPath();
                ctx.moveTo(points[i].x + shadowOffset, points[i].y - scrollY + shadowOffset);
                ctx.lineTo(points[i+1].x + shadowOffset, points[i+1].y - scrollY + shadowOffset);
                const ratio = (points.length - 1 - i) / points.length;
                ctx.lineWidth = shadowWidth * ratio;
                ctx.strokeStyle = "rgba(9, 9, 11, 0.04)";
                ctx.stroke();
              }
            }
            
            // B. Draw base paint stroke path
            const baseWidth = 18;
            if (points.length > 20) {
              ctx.beginPath();
              points.slice(0, points.length - 19).forEach((p, idx) => {
                if (idx === 0) ctx.moveTo(p.x, p.y - scrollY);
                else ctx.lineTo(p.x, p.y - scrollY);
              });
              ctx.lineWidth = baseWidth;
              ctx.strokeStyle = grad;
              ctx.stroke();
              
              for (let i = points.length - 20; i < points.length - 1; i++) {
                ctx.beginPath();
                ctx.moveTo(points[i].x, points[i].y - scrollY);
                ctx.lineTo(points[i+1].x, points[i+1].y - scrollY);
                const ratio = (points.length - 1 - i) / 20;
                ctx.lineWidth = baseWidth * ratio;
                ctx.strokeStyle = grad;
                ctx.stroke();
              }
            } else {
              for (let i = 0; i < points.length - 1; i++) {
                ctx.beginPath();
                ctx.moveTo(points[i].x, points[i].y - scrollY);
                ctx.lineTo(points[i+1].x, points[i+1].y - scrollY);
                const ratio = (points.length - 1 - i) / points.length;
                ctx.lineWidth = baseWidth * ratio;
                ctx.strokeStyle = grad;
                ctx.stroke();
              }
            }
            
            // C. Draw subtle bristle hair textures
            const bristleOffsets = [-3.5, 0, 3.5];
            bristleOffsets.forEach((bo, bIdx) => {
              const bWidth = 1.2;
              
              if (points.length > 20) {
                ctx.beginPath();
                points.slice(0, points.length - 19).forEach((p, idx) => {
                  const pNext = points[idx + 1] || p;
                  const ndx = pNext.x - p.x;
                  const ndy = pNext.y - p.y;
                  const len = Math.sqrt(ndx * ndx + ndy * ndy) || 1;
                  const nx = -ndy / len;
                  const ny = ndx / len;
                  
                  const bx = p.x + nx * bo;
                  const by = p.y + ny * bo - scrollY;
                  
                  if (idx === 0) ctx.moveTo(bx, by);
                  else ctx.lineTo(bx, by);
                });
                ctx.lineWidth = bWidth;
                ctx.strokeStyle = bIdx === 1 ? "rgba(0, 0, 0, 0.08)" : "rgba(255, 255, 255, 0.18)";
                ctx.stroke();
                
                for (let i = points.length - 20; i < points.length - 1; i++) {
                  ctx.beginPath();
                  const p = points[i];
                  const pNext = points[i + 1] || p;
                  const ndx = pNext.x - p.x;
                  const ndy = pNext.y - p.y;
                  const len = Math.sqrt(ndx * ndx + ndy * ndy) || 1;
                  const nx = -ndy / len;
                  const ny = ndx / len;
                  
                  const bx1 = p.x + nx * bo;
                  const by1 = p.y + ny * bo - scrollY;
                  const bx2 = pNext.x + nx * bo;
                  const by2 = pNext.y + ny * bo - scrollY;
                  
                  ctx.moveTo(bx1, by1);
                  ctx.lineTo(bx2, by2);
                  const ratio = (points.length - 1 - i) / 20;
                  ctx.lineWidth = bWidth * ratio;
                  ctx.strokeStyle = bIdx === 1 ? "rgba(0, 0, 0, 0.08)" : "rgba(255, 255, 255, 0.18)";
                  ctx.stroke();
                }
              } else {
                for (let i = 0; i < points.length - 1; i++) {
                  ctx.beginPath();
                  const p = points[i];
                  const pNext = points[i + 1] || p;
                  const ndx = pNext.x - p.x;
                  const ndy = pNext.y - p.y;
                  const len = Math.sqrt(ndx * ndx + ndy * ndy) || 1;
                  const nx = -ndy / len;
                  const ny = ndx / len;
                  
                  const bx1 = p.x + nx * bo;
                  const by1 = p.y + ny * bo - scrollY;
                  const bx2 = pNext.x + nx * bo;
                  const by2 = pNext.y + ny * bo - scrollY;
                  
                  ctx.moveTo(bx1, by1);
                  ctx.lineTo(bx2, by2);
                  const ratio = (points.length - 1 - i) / points.length;
                  ctx.lineWidth = bWidth * ratio;
                  ctx.strokeStyle = bIdx === 1 ? "rgba(0, 0, 0, 0.08)" : "rgba(255, 255, 255, 0.18)";
                  ctx.stroke();
                }
              }
            });
            
            // D. Draw glossy wet paint highlight (specular reflection)
            const highlightWidth = 2.5;
            const highlightOffset = -3.5; // offset slightly to the left/top
            
            if (points.length > 20) {
              ctx.beginPath();
              points.slice(0, points.length - 19).forEach((p, idx) => {
                const pNext = points[idx + 1] || p;
                const ndx = pNext.x - p.x;
                const ndy = pNext.y - p.y;
                const len = Math.sqrt(ndx * ndx + ndy * ndy) || 1;
                const nx = -ndy / len;
                const ny = ndx / len;
                
                const hx = p.x + nx * highlightOffset;
                const hy = p.y + ny * highlightOffset - scrollY;
                
                if (idx === 0) ctx.moveTo(hx, hy);
                else ctx.lineTo(hx, hy);
              });
              ctx.lineWidth = highlightWidth;
              ctx.strokeStyle = "rgba(255, 255, 255, 0.35)";
              ctx.stroke();
              
              for (let i = points.length - 20; i < points.length - 1; i++) {
                ctx.beginPath();
                const p = points[i];
                const pNext = points[i + 1] || p;
                const ndx = pNext.x - p.x;
                const ndy = pNext.y - p.y;
                const len = Math.sqrt(ndx * ndx + ndy * ndy) || 1;
                const nx = -ndy / len;
                const ny = ndx / len;
                
                const hx1 = p.x + nx * highlightOffset;
                const hy1 = p.y + ny * highlightOffset - scrollY;
                const hx2 = pNext.x + nx * highlightOffset;
                const hy2 = pNext.y + ny * highlightOffset - scrollY;
                
                ctx.moveTo(hx1, hy1);
                ctx.lineTo(hx2, hy2);
                const ratio = (points.length - 1 - i) / 20;
                ctx.lineWidth = highlightWidth * ratio;
                ctx.strokeStyle = "rgba(255, 255, 255, 0.35)";
                ctx.stroke();
              }
            } else {
              for (let i = 0; i < points.length - 1; i++) {
                ctx.beginPath();
                const p = points[i];
                const pNext = points[i + 1] || p;
                const ndx = pNext.x - p.x;
                const ndy = pNext.y - p.y;
                const len = Math.sqrt(ndx * ndx + ndy * ndy) || 1;
                const nx = -ndy / len;
                const ny = ndx / len;
                
                const hx1 = p.x + nx * highlightOffset;
                const hy1 = p.y + ny * highlightOffset - scrollY;
                const hx2 = pNext.x + nx * highlightOffset;
                const hy2 = pNext.y + ny * highlightOffset - scrollY;
                
                ctx.moveTo(hx1, hy1);
                ctx.lineTo(hx2, hy2);
                const ratio = (points.length - 1 - i) / points.length;
                ctx.lineWidth = highlightWidth * ratio;
                ctx.strokeStyle = "rgba(255, 255, 255, 0.35)";
                ctx.stroke();
              }
            }
          }
          
          // E. Draw splatters with 3D drop highlights
          splattersRef.current.forEach(s => {
            // Draw main drop
            ctx.beginPath();
            ctx.arc(s.x, s.y - scrollY, s.radius, 0, Math.PI * 2);
            ctx.fillStyle = s.color;
            ctx.globalAlpha = s.alpha;
            ctx.fill();
            
            // Draw 3D glossy highlight on splatter if it is large enough
            if (s.radius > 1.2) {
              ctx.beginPath();
              ctx.arc(s.x - s.radius * 0.35, s.y - scrollY - s.radius * 0.35, s.radius * 0.22, 0, Math.PI * 2);
              ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
              ctx.globalAlpha = s.alpha;
              ctx.fill();
            }
          });
        }
      }
      
      requestRef.current = requestAnimationFrame(loop);
    };
    
    requestRef.current = requestAnimationFrame(loop);
    
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", handleResize);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <>
      {/* Viewport Canvas (Fixed backdrop, ignores pointer clicks) */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-10"
        style={{ mixBlendMode: "normal" }}
      />
      
      {/* Floating 3D Paintbrush Tip */}
      <div
        ref={brushContainerRef}
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          transform: `translate3d(0px, 0px, 0) scale(1) rotate(-0.5rad)`,
          transformOrigin: "0 0", // Rotation anchor matches tip at (0,0)
          opacity: 0,
          transition: "opacity 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
          pointerEvents: "none",
          zIndex: 40,
        }}
      >
        <svg
          width="48"
          height="160"
          viewBox="-24 -135 48 160"
          style={{
            filter: "drop-shadow(3px 8px 5px rgba(9, 9, 11, 0.22))",
            transition: "filter 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          <defs>
            {/* Highly polished silver ferrule gradient */}
            <linearGradient id="premium-metal" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#4b5563" />
              <stop offset="20%" stopColor="#d1d5db" />
              <stop offset="40%" stopColor="#f3f4f6" />
              <stop offset="60%" stopColor="#ffffff" />
              <stop offset="80%" stopColor="#d1d5db" />
              <stop offset="100%" stopColor="#374151" />
            </linearGradient>
            
            {/* Rich polished dark wood / carbon handle gradient */}
            <linearGradient id="premium-handle" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#09090b" />
              <stop offset="30%" stopColor="#1e1b4b" /> {/* very deep indigo tone */}
              <stop offset="50%" stopColor="#312e81" />
              <stop offset="70%" stopColor="#1e1b4b" />
              <stop offset="100%" stopColor="#020617" />
            </linearGradient>

            {/* Brass collar metal accent gradient */}
            <linearGradient id="gold-accent" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#854d0e" />
              <stop offset="25%" stopColor="#eab308" />
              <stop offset="50%" stopColor="#fef08a" />
              <stop offset="75%" stopColor="#ca8a04" />
              <stop offset="100%" stopColor="#713f12" />
            </linearGradient>
          </defs>
          
          {/* Main Handle (Matte dark blue/indigo-black premium composite wood) */}
          <path
            d="M -5.5,-35 L -2.2,-125 C -2.2,-128.5 -1.2,-130 0,-130 C 1.2,-130 2.2,-128.5 2.2,-125 L 5.5,-35 Z"
            fill="url(#premium-handle)"
          />

          {/* Dipped handle tip (dynamic color matches current paint color) */}
          <path
            ref={brushDipRef}
            d="M -3.2,-105 L -2.2,-125 C -2.2,-128.5 -1.2,-130 0,-130 C 1.2,-130 2.2,-128.5 2.2,-125 L 3.2,-105 C 2,-107 1,-107.5 0,-107.5 C -1,-107.5 -2,-107 -3.2,-105 Z"
            fill="rgb(200, 255, 68)"
          />
          
          {/* Polished Metal Ferrule Upper Band */}
          <path
            d="M -6.5,-35 L 6.5,-35 L 6,-26 L -6,-26 Z"
            fill="url(#premium-metal)"
          />

          {/* Brass Collar Accent Ring */}
          <path
            d="M -6,-26 L 6,-26 L 5.8,-22 L -5.8,-22 Z"
            fill="url(#gold-accent)"
          />

          {/* Polished Metal Ferrule Lower Band */}
          <path
            d="M -5.8,-22 L 5.8,-22 L 5.5,-18 L -5.5,-18 Z"
            fill="url(#premium-metal)"
          />
          
          {/* Bristles Tip (Dynamic color matches current path color) */}
          <path
            ref={brushBristlesRef}
            d="M -5.5,-18 C -5.5,-9 -3,-3 0,0 C 3,-3 5.5,-9 5.5,-18 Z"
            fill="rgb(200, 255, 68)"
          />

          {/* Bristle Highlight Overlay */}
          <path
            d="M -4,-18 C -4,-11 -2,-5 0,-2 C -1.5,-5 -2.8,-11 -2.8,-18 Z"
            fill="#ffffff"
            opacity="0.28"
          />

          {/* Bristle Hair Details */}
          <path d="M -3,-18 C -3,-12 -1.5,-6 -0.6,-2.5" stroke="#000000" strokeWidth="0.7" opacity="0.12" fill="none" />
          <path d="M 3,-18 C 3,-12 1.5,-6 0.6,-2.5" stroke="#000000" strokeWidth="0.7" opacity="0.12" fill="none" />
          <path d="M 0,-18 C 0,-10 0,-4 0,-1" stroke="#ffffff" strokeWidth="0.6" opacity="0.18" fill="none" />
        </svg>
      </div>
    </>
  );
}

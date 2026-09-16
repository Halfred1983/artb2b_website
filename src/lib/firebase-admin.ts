import { cert, getApps, initializeApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

type FirebaseServiceAccountConfig = {
  projectId: string;
  clientEmail: string;
  privateKey: string;
};

function parseServiceAccountFromEnv(): FirebaseServiceAccountConfig | null {
  const serviceAccountJson = process.env.FIREBASE_SERVICE_ACCOUNT_JSON;

  if (serviceAccountJson) {
    try {
      const parsed = JSON.parse(serviceAccountJson) as Record<string, string | undefined>;
      const projectId = parsed.project_id;
      const clientEmail = parsed.client_email;
      const privateKey = parsed.private_key?.replace(/\\n/g, "\n");

      if (projectId && clientEmail && privateKey) {
        return { projectId, clientEmail, privateKey };
      }
    } catch (e) {
      console.error("Failed to parse FIREBASE_SERVICE_ACCOUNT_JSON", e);
    }
  }

  const projectId = process.env.FIREBASE_PROJECT_ID;
  const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
  let privateKey = process.env.FIREBASE_PRIVATE_KEY;
  if (privateKey) {
    if (privateKey.startsWith('"') && privateKey.endsWith('"')) {
      privateKey = privateKey.slice(1, -1);
    }
    privateKey = privateKey.replace(/\\n/g, "\n");
  }

  if (!projectId || !clientEmail || !privateKey) {
    return null;
  }

  return { projectId, clientEmail, privateKey };
}

function getFirebaseApp() {
  const existingApp = getApps()[0];
  if (existingApp) {
    return existingApp;
  }

  const credentials = parseServiceAccountFromEnv();
  if (!credentials) {
    return null;
  }

  return initializeApp({
    credential: cert({
      projectId: credentials.projectId,
      clientEmail: credentials.clientEmail,
      privateKey: credentials.privateKey,
    }),
    projectId: credentials.projectId,
  });
}

export function getLeadsCollection() {
  const app = getFirebaseApp();
  if (!app) return null;
  return getFirestore(app).collection("leads");
}

export function getSubscribersCollection() {
  const app = getFirebaseApp();
  if (!app) return null;
  return getFirestore(app).collection("subscribers");
}

export function getMailCollection() {
  const app = getFirebaseApp();
  if (!app) return null;
  return getFirestore(app).collection("mail");
}

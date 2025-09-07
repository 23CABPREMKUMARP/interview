// firebase/client.ts
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBqnzsy8yD0m5N2AUX35p63gqwBlHK3IJA",
  authDomain: "interview-46fba.firebaseapp.com",
  projectId: "interview-46fba",
  storageBucket: "interview-46fba.firebasestorage.app",
  messagingSenderId: "195552734452",
  appId: "1:195552734452:web:b7652aae185598c86282a1",
  measurementId: "G-54LMFKNH8Z"
};

// Initialize Firebase only once
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Initialize Analytics only in the browser
let analytics: ReturnType<typeof getAnalytics> | null = null;
if (typeof window !== "undefined") {
  isSupported().then((yes) => {
    if (yes) {
      analytics = getAnalytics(app);
    }
  });
}

export const auth = getAuth(app);
export const db = getFirestore(app);
export { analytics };

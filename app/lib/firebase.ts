import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Wajib tambah ini

const firebaseConfig = {
  apiKey: "AIzaSyAkYz3pKedicRx2x2aQ_WnzGhkJjU_EQ",
  authDomain: "wedding-minang.firebaseapp.com",
  projectId: "wedding-minang",
  storageBucket: "wedding-minang.firebasestorage.app",
  messagingSenderId: "649543920347",
  appId: "1:649543920347:web:8f465d29d221be22d53afe"
};

// Inisialisasi Firebase (Mencegah error inisialisasi ganda)
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// INI BAGIAN YANG HILANG TADI:
// Membuat variabel db dan mengekspornya agar bisa dipakai di RSVP.tsx
const db = getFirestore(app);
export { db };
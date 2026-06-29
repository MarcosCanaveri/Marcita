import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBb383LuaQO5HbvPTqm0PAaTNfHIOkhmk0",
  authDomain: "joyas-marcita.firebaseapp.com",
  projectId: "joyas-marcita",
  storageBucket: "joyas-marcita.firebasestorage.app",
  messagingSenderId: "781529594551",
  appId: "1:781529594551:web:9a6d9851a9f09aada3eb32"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCNBlGTJmS6eR5kS2yUdozufzhXnIT0g0k",
  authDomain: "reddit-clone-9144e.firebaseapp.com",
  projectId: "reddit-clone-9144e",
  storageBucket: "reddit-clone-9144e.appspot.com",
  messagingSenderId: "903328323377",
  appId: "1:903328323377:web:ab0cefa28c40e334d98210",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };

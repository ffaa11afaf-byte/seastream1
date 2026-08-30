import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAMrpWFxCL1KNfui14COlOQEKaIswaIcGA",
  authDomain: "seastream1-ce15e.firebaseapp.com",
  projectId: "seastream1-ce15e",
  storageBucket: "seastream1-ce15e.firebasestorage.app",
  messagingSenderId: "477963317137",
  appId: "1:477963317137:web:8178ccec1534eb1289b430"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

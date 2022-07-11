import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyBH7QhoLthKjhKlbErj8D_3H5F7_cGnUnU",
  authDomain: "fileupload-b1a5e.firebaseapp.com",
  projectId: "fileupload-b1a5e",
  storageBucket: "fileupload-b1a5e.appspot.com",
  messagingSenderId: "826400498072",
  appId: "1:826400498072:web:70ddb502a773e3a7bf4bed",
  measurementId: "G-CNHJG4WL59",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBobHW-niG615OLx_ERalr8L6pDY57tbjU",

  authDomain: "situation-room-8511a.firebaseapp.com",

  projectId: "situation-room-8511a",

  storageBucket: "situation-room-8511a.appspot.com",

  messagingSenderId: "206512110871",

  appId: "1:206512110871:web:d7bc11e375e03d5a714b52",
};

// Initialize Firebase
// const analytics = getAnalytics(app);

const initFirebase = initializeApp(firebaseConfig);

const storage = getStorage(initFirebase);
const firestoreDb = getFirestore(initFirebase);

export { initFirebase, storage, firestoreDb };

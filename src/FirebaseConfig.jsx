// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB6H1lmRaS2j6fo4pooGDjuFEPEumWDsRs",
  authDomain: "emailpasswordlogin-6325b.firebaseapp.com",
  projectId: "emailpasswordlogin-6325b",
  storageBucket: "emailpasswordlogin-6325b.appspot.com",
  messagingSenderId: "701052325046",
  appId: "1:701052325046:web:da551fd23c10b4e7a7ea17",
  measurementId: "G-WSVWR1RKRR"
};

const secondfirebaseConfig = {
  apiKey: "AIzaSyBiouTi4hbzBjpSBdc2_jv7DD09ykneIj0",
  authDomain: "imageuploaddb-7220d.firebaseapp.com",
  projectId: "imageuploaddb-7220d",
  storageBucket: "imageuploaddb-7220d.appspot.com",
  messagingSenderId: "187866565861",
  appId: "1:187866565861:web:8c617a484c6849d608d80c",
  measurementId: "G-6Q2ZRE3PPP"
}; 


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const secondapp = initializeApp(secondfirebaseConfig, "secondapp");

const analytics = getAnalytics(app);

export const database = getAuth(app);
export const imageDb = getStorage(secondapp);
export const auth = getAuth(app);

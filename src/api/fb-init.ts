import {getApp, getApps, initializeApp} from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from '@firebase/auth'
import {getFirestore} from '@firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

export const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_GOOGLE_AUTH_DOMAIN,
    projectId: "bisque-dff04",
    storageBucket: process.env.NEXT_PUBLIC_GOOGLE_BUCKET,
    messagingSenderId: "938841680881",
    appId: process.env.NEXT_PUBLIC_GOOGLE_APP_ID,
    measurementId: "G-PDD0RD2VR4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const db = getFirestore(app)

console.log("POLLLO")
console.log(process.env['GOOGLE_APP_ID '])
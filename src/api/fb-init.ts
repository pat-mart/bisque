import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from '@firebase/auth'
import {getFirestore} from '@firebase/firestore'
import * as admin from 'firebase-admin'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.GOOGLE_API_KEY,
    authDomain: "bisque-dff04.firebaseapp.com",
    projectId: "bisque-dff04",
    storageBucket: "bisque-dff04.appspot.com",
    messagingSenderId: "938841680881",
    appId: "1:938841680881:web:11f489372ce9c63faf3250",
    measurementId: "G-PDD0RD2VR4"
};

const serviceAccount = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT as string)

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app)
export const db = getFirestore(app)

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount!)
})

export const verifyIdToken = (token: string) => {
    return admin.auth().verifyIdToken(token)
}
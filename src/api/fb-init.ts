import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from '@firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBzEBO4Tj8nzKGtG9EG46zmOyyYZ0lC7As",
    authDomain: "bisque-dff04.firebaseapp.com",
    projectId: "bisque-dff04",
    storageBucket: "bisque-dff04.appspot.com",
    messagingSenderId: "938841680881",
    appId: "1:938841680881:web:11f489372ce9c63faf3250",
    measurementId: "G-PDD0RD2VR4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app)
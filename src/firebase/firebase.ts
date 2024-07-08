// import 'firebase/auth';
// import firebase from 'firebase/compat/app';

// const app = firebase.initializeApp({
//     apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//     authDomain: process.env.REACT_APP_FIREBASE_API_AUTH_DOMAIN,
//     projectId: process.env.REACT_APP_FIREBASE_API_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_FIREBASE_API_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_FIREBASE_API_MESSAGING_SENDER_ID,
//     appId: process.env.REACT_APP_FIREBASE_API_ID,
//     measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
// });

// export const auth = app.auth;
// export default app;

// import dotenv from 'dotenv';
import { FirebaseOptions, initializeApp } from 'firebase/app';
import * as auth from 'firebase/auth';
// import { process } from 'node';
// dotenv.config();

const firebaseConfig: FirebaseOptions = {
    apiKey: 'AIzaSyB61eX32ITSCsqHaKZnecruv-5m3AP2f4o',
    authDomain: 'star-wars-api-964d4.firebaseapp.com',
    projectId: 'star-wars-api-964d4',
    storageBucket: 'star-wars-api-964d4.appspot.com',
    messagingSenderId: '396703823104',
    appId: '1:396703823104:web:f456f01d2a779ade012fe5',
    measurementId: 'G-7C1YVYF426',
};
export const appFirebase = initializeApp(firebaseConfig);
export const authFirebase = auth.initializeAuth(appFirebase);

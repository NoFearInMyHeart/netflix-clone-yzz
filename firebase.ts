// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDHPoMcoinb9VJr8RB3HlI8uYpTO8ufNCw',
  authDomain: 'netflix-clone-yt-64d9e.firebaseapp.com',
  projectId: 'netflix-clone-yt-64d9e',
  storageBucket: 'netflix-clone-yt-64d9e.appspot.com',
  messagingSenderId: '684847112144',
  appId: '1:684847112144:web:22833c780e59e9747fe3d5',
};
// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };

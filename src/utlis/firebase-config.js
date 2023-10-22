import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBroOB-btKn94NsQNnGoWpRb9vcHz4Cjgg',
  authDomain: 'netflix-clone-bb375.firebaseapp.com',
  projectId: 'netflix-clone-bb375',
  storageBucket: 'netflix-clone-bb375.appspot.com',
  messagingSenderId: '970744700030',
  appId: '1:970744700030:web:ce9142280da64dea9e0c2f',
  measurementId: 'G-1Q0PYK4DQR',
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);

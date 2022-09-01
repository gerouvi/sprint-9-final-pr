import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyALd-22Q1eWZloKQo1tq32B3eIq86QMPpo',
  authDomain: 'bcn-activa-final-project.firebaseapp.com',
  projectId: 'bcn-activa-final-project',
  storageBucket: 'bcn-activa-final-project.appspot.com',
  messagingSenderId: '274303959318',
  appId: '1:274303959318:web:59a1b629365b3394d59037',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

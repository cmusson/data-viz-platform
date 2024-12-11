import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBFhnJH9PUcj2i_yZUwNBs6abloCvEt5i0',
  authDomain: 'answersai-assessment.firebaseapp.com',
  projectId: 'answersai-assessment',
  storageBucket: 'answersai-assessment.firebasestorage.app',
  messagingSenderId: '1092326006680',
  appId: '1:1092326006680:web:f2b4fdad67bc75215ed5ed',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

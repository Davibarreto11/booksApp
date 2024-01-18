// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBg3kOApve6hvBgAz23fcriKngvtiOzzAI',
  authDomain: 'react-native-login-5f257.firebaseapp.com',
  projectId: 'react-native-login-5f257',
  storageBucket: 'react-native-login-5f257.appspot.com',
  messagingSenderId: '494608840945',
  appId: '1:494608840945:web:a68440653cdb6bc6b7d150'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)

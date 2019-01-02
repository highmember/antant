import firebase from 'firebase/app'
import { notification } from 'antd'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyAOXPeWWoJAA0Z8XinHwter2eI6JPHfPhI",
    authDomain: "react-starter-6da81.firebaseapp.com",
    databaseURL: "https://react-starter-6da81.firebaseio.com",
    projectId: "react-starter-6da81",
    storageBucket: "",
    messagingSenderId: "1037404194729"
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const firebaseAuth = firebase.auth
export default firebaseApp

export async function login(email, password) {
  return firebaseAuth()
    .signInWithEmailAndPassword(email, password)
    .then(() => true)
    .catch(error => {
      notification.warning({
        message: error.code,
        description: error.message,
      })
    })
}

export async function currentAccount() {
  let userLoaded = false
  function getCurrentUser(auth) {
    return new Promise((resolve, reject) => {
      if (userLoaded) {
        resolve(firebaseAuth.currentUser)
      }
      const unsubscribe = auth.onAuthStateChanged(user => {
        userLoaded = true
        unsubscribe()
        resolve(user)
      }, reject)
    })
  }
  return getCurrentUser(firebaseAuth())
}

export async function logout() {
  return firebaseAuth()
    .signOut()
    .then(() => true)
}

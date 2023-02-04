// import * as firebase from "firebase/app"
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import {onUnmounted, ref} from "vue";


const firebaseConfig = {
  apiKey: "AIzaSyDuoWbv-liVwte7sfZMVNz-mmz-PmflNrE",
  authDomain: "spidertech-61552.firebaseapp.com",
  projectId: "spidertech-61552",
  storageBucket: "spidertech-61552.appspot.com",
  messagingSenderId: "910942759811",
  appId: "1:910942759811:web:80bfdf29eec637ad2e24b6",
  measurementId: "G-FS6GXF3SH2"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
// console.log("firebaseApp==", firebaseApp)

const db = firebaseApp.firestore()
const usersCollection = db.collection('inquiry')


export const createUser = user => {
  return usersCollection.add(user)
}

export const getUser = async id => {
  const user = await usersCollection.doc(id).get()
  return user.exists ? user.data() : null
}

export const updateUser = (id, user) => {
  return usersCollection.doc(id).update(user)
}

export const deleteUser = id => {
  return usersCollection.doc(id).delete()
}

export const useLoadUsers = () => {
  const users = ref([])
  const close = usersCollection.onSnapshot(snapshot => {
    users.value = snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}))
  })
  onUnmounted(close)
  return users
}


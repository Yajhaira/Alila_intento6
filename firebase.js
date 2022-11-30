// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js"
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2e_myZgl40LK2jvAE6fh_qkttA-8IDH8",
  authDomain: "alila-datos.firebaseapp.com",
  projectId: "alila-datos",
  storageBucket: "alila-datos.appspot.com",
  messagingSenderId: "323778877941",
  appId: "1:323778877941:web:84493ce3bdd035383168bc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

console.log(db)

export async function addTask(title, description) {
    try {
        const docRef = await addDoc(collection(db, "tasks"), {
          title: title,
          description: description,
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
}
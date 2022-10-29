// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  doc,
  query,
  where,
  addDoc,
} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6zAyZoseLdmV8M3l3D5vlRrlcIg4r-bQ",
  authDomain: "myfirstreactapp1010.firebaseapp.com",
  projectId: "myfirstreactapp1010",
  storageBucket: "myfirstreactapp1010.appspot.com",
  messagingSenderId: "690709417866",
  appId: "1:690709417866:web:0d768972bab7402455c273",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export async function getItems() {
  const myCollection = collection(firestore, "randomProducts");
  let snapshotDB = await getDocs(myCollection);

  let dataDocs = snapshotDB.docs.map((documento) => {
    let docFormatted = { ...documento.data(), id: documento.id };
    return docFormatted;
  });

  return dataDocs;
}

export async function getSingleItem(idItem) {
  const docRef = doc(firestore, "randomProducts", idItem);
  const docSnapshot = await getDoc(docRef);
  const docFormatted = { ...docSnapshot.data(), id: docSnapshot.id };
  return docFormatted;
}

export async function getItemsByCategory(cat) {
  const collectionRef = collection(firestore, "randomProducts");
  const queryCategory = query(collectionRef, where("category", "==", cat));

  const respuesta = await getDocs(queryCategory);

  let dataDocs = respuesta.docs.map((documento) => {
    let docFormatted = { ...documento.data(), id: documento.id };
    return docFormatted;
  });

  return dataDocs;
}

export async function createBuyOrder(orderData) {
  const collectionRef = collection(firestore, "orders");
  let respuesta = await addDoc(collectionRef, orderData);

  return respuesta.id;
}

export default firestore;

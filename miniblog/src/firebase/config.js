
import { initializeApp } from "firebase/app";

//importando e chamando o banco de dados
import {getFireStore} from "firebase/firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDoOYA2cuDy7hK1R-UDF3j_6DPtjbeHlV4",
  authDomain: "miniblog-6011c.firebaseapp.com",
  projectId: "miniblog-6011c",
  storageBucket: "miniblog-6011c.appspot.com",
  messagingSenderId: "473377532877",
  appId: "1:473377532877:web:e1c418830bb7fe019ff284"
};


const app = initializeApp(firebaseConfig);

// Inicializando o banco de dados que é aonde vamos salvar os dados
const db = getFireStore(app);

export {db};
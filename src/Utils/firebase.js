import { initializeApp } from "firebase/app";
import {getDatabase} from 'firebase/database';
// import {getFirestore} from 'firebase/firestore';
// import {getAuth} from 'firebase/auth';


    const firebaseConfig = {
        apiKey: "AIzaSyCULtgEMYZPJCfrH1wSlDLi_HzjZYGGYr8",
        authDomain: "sptransport-9abec.firebaseapp.com",
        databaseURL: "https://sptransport-9abec-default-rtdb.asia-southeast1.firebasedatabase.app",
        projectId: "sptransport-9abec",
        storageBucket: "sptransport-9abec.appspot.com",
        messagingSenderId: "104687621047",
        appId: "1:104687621047:web:791c850b4332d7a8f68e32"
    };


    

  const app = initializeApp(firebaseConfig);
//   export const auth =getAuth();
  export const db= getDatabase(app);
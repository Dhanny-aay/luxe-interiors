import { createContext, useState } from "react";
import { initializeApp } from "firebase/app";
import { collection, getFirestore, onSnapshot, orderBy, query } from "firebase/firestore";

export const ChairContext = createContext();

const ChairProvider = (props) => {
            // Your web app's Firebase configuration
    const firebaseConfig = {
        apiKey: "AIzaSyDqokdNfnbEhWyXOFLg7t0Ni1reYpshsfg",
        authDomain: "luxe-int.firebaseapp.com",
        projectId: "luxe-int",
        storageBucket: "luxe-int.appspot.com",
        messagingSenderId: "751273681973",
        appId: "1:751273681973:web:e05f9684bbe2a0caa13d7c"
    };
  
  // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    const [chair, setChair] = useState([]);


    return ( 
        <ChairContext.Provider>
            {props.children}
        </ChairContext.Provider>
     );
}
 
export default ChairProvider;
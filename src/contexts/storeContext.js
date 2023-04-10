import { createContext, useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { collection, getFirestore, onSnapshot, orderBy, query, where } from "firebase/firestore";


export const TableContext = createContext();
export const ChairContext = createContext();
export const StoolContext = createContext();
export const AccessoryContext = createContext();
export const HotItemsContext = createContext();
export const FeatItemsContext = createContext();
export const BestItemsContext = createContext();
export const NewItemsContext = createContext();



const contextProvider = (props) => {
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

  // get documents in tables collection
 useEffect(()=>{
    //collection ref
    const colRef = collection(db, 'tables');
    //query
    const q = query(colRef, orderBy('name', 'asc'));
    onSnapshot(q, (snapshot) => {
        //create array for documents
        const tableData = [];
        snapshot.forEach((doc) => {
            //save to array
            tableData.push({id:doc.id, ...doc.data()})
        });
        setTable(tableData)
    })
}, []);

// get documents in chair collection
 useEffect(()=>{
    //collection ref
    const colRef = collection(db, 'chair');
    //query
    const q = query(colRef, orderBy('name', 'asc'));
    onSnapshot(q, (snapshot) => {
        //create array for documents
        const chairData = [];
        snapshot.forEach((doc) => {
            //save to array
            chairData.push({id:doc.id, ...doc.data()})
        });
        setChair(chairData)
    })
}, []);

// get documents in chair collection
 useEffect(()=>{
     //collection ref
    const colRef = collection(db, 'stool');
    //query
    const q = query(colRef, orderBy('name', 'asc'));
    onSnapshot(q, (snapshot) => {
        //create array for documents
        const stoolData = [];
        snapshot.forEach((doc) => {
            //save to array
            stoolData.push({id:doc.id, ...doc.data()})
        });
        setStool(stoolData)
    })
}, []);

    // get documents in chair collection
 useEffect(()=>{
     //collection ref
    const colRef = collection(db, 'Accessory');
    //query
    const q = query(colRef, orderBy('name', 'asc'));
    onSnapshot(q, (snapshot) => {
        //create array for documents
        const accessoryData = [];
        snapshot.forEach((doc) => {
            //save to array
            accessoryData.push({id:doc.id, ...doc.data()})
        });
        setaccessory(accessoryData)
    })
}, []);

    // get all documents with 'hot' tag in them
 useEffect(()=>{
    //array for doocuments gotten
    const Data = [];

    const AccRef = collection(db, 'Accessory');
    const StoolRef = collection(db, 'stool');
    const ChairRef = collection(db, 'chair');
    const TableRef = collection(db, 'tables');

    //check accessory collection
    const q = query(AccRef, where('tag', '==', 'Hot'));
    onSnapshot(q, (snapshot) => {
        snapshot.forEach((doc) => {
            //push to array
            Data.push({id:doc.id, ...doc.data()})
        });
    });
    //check stool collection
    const r = query(StoolRef, where('tag', '==', 'Hot'));
    onSnapshot(r, (snapshot) => {
        snapshot.forEach((doc) => {
            //push to array
            Data.push({id:doc.id, ...doc.data()})
        });
    })
    //check stool collection
    const s = query(ChairRef, where('tag', '==', 'Hot'));
    onSnapshot(s, (snapshot) => {
        snapshot.forEach((doc) => {
            //push to array
            Data.push({id:doc.id, ...doc.data()})
        });
    })
    //check table collection
    const t = query(TableRef, where('tag', '==', 'Hot'));
    onSnapshot(t, (snapshot) => {
        snapshot.forEach((doc) => {
            //push to array
            Data.push({id:doc.id, ...doc.data()})
        });
    })
    setHotItems(Data)
}, []);



    // get all documents with 'feat' tag in them
 useEffect(()=>{
    //array for doocuments gotten
    const Data = [];

    const AccRef = collection(db, 'Accessory');
    const StoolRef = collection(db, 'stool');
    const ChairRef = collection(db, 'chair');
    const TableRef = collection(db, 'tables');

    //check accessory collection
    const q = query(AccRef, where('tag', '==', 'Feat'));
    onSnapshot(q, (snapshot) => {
        snapshot.forEach((doc) => {
            //push to array
            Data.push({id:doc.id, ...doc.data()})
        });
    });
    //check stool collection
    const r = query(StoolRef, where('tag', '==', 'Feat'));
    onSnapshot(r, (snapshot) => {
        snapshot.forEach((doc) => {
            //push to array
            Data.push({id:doc.id, ...doc.data()})
        });
    })
    //check stool collection
    const s = query(ChairRef, where('tag', '==', 'Feat'));
    onSnapshot(s, (snapshot) => {
        snapshot.forEach((doc) => {
            //push to array
            Data.push({id:doc.id, ...doc.data()})
        });
    })
    //check table collection
    const t = query(TableRef, where('tag', '==', 'Feat'));
    onSnapshot(t, (snapshot) => {
        snapshot.forEach((doc) => {
            //push to array
            Data.push({id:doc.id, ...doc.data()})
        });
    })
    setFeatItems(Data)
}, []);

    // get all documents with 'best' tag in them
 useEffect(()=>{
    //array for doocuments gotten
    const Data = [];

    const AccRef = collection(db, 'Accessory');
    const StoolRef = collection(db, 'stool');
    const ChairRef = collection(db, 'chair');
    const TableRef = collection(db, 'tables');

    //check accessory collection
    const q = query(AccRef, where('tag', '==', 'best'));
    onSnapshot(q, (snapshot) => {
        snapshot.forEach((doc) => {
            //push to array
            Data.push({id:doc.id, ...doc.data()})
        });
    });
    //check stool collection
    const r = query(StoolRef, where('tag', '==', 'best'));
    onSnapshot(r, (snapshot) => {
        snapshot.forEach((doc) => {
            //push to array
            Data.push({id:doc.id, ...doc.data()})
        });
    })
    //check stool collection
    const s = query(ChairRef, where('tag', '==', 'best'));
    onSnapshot(s, (snapshot) => {
        snapshot.forEach((doc) => {
            //push to array
            Data.push({id:doc.id, ...doc.data()})
        });
    })
    //check table collection
    const t = query(TableRef, where('tag', '==', 'best'));
    onSnapshot(t, (snapshot) => {
        snapshot.forEach((doc) => {
            //push to array
            Data.push({id:doc.id, ...doc.data()})
        });
    })
    setBestItems(Data)
}, []);


    // get all documents with 'new' tag in them
 useEffect(()=>{
    //array for doocuments gotten
    const Data = [];

    const AccRef = collection(db, 'Accessory');
    const StoolRef = collection(db, 'stool');
    const ChairRef = collection(db, 'chair');
    const TableRef = collection(db, 'tables');

    //check accessory collection
    const q = query(AccRef, where('tag', '==', 'new'));
    onSnapshot(q, (snapshot) => {
        snapshot.forEach((doc) => {
            //push to array
            Data.push({id:doc.id, ...doc.data()})
        });
    });
    //check stool collection
    const r = query(StoolRef, where('tag', '==', 'new'));
    onSnapshot(r, (snapshot) => {
        snapshot.forEach((doc) => {
            //push to array
            Data.push({id:doc.id, ...doc.data()})
        });
    })
    //check stool collection
    const s = query(ChairRef, where('tag', '==', 'new'));
    onSnapshot(s, (snapshot) => {
        snapshot.forEach((doc) => {
            //push to array
            Data.push({id:doc.id, ...doc.data()})
        });
    })
    //check table collection
    const t = query(TableRef, where('tag', '==', 'new'));
    onSnapshot(t, (snapshot) => {
        snapshot.forEach((doc) => {
            //push to array
            Data.push({id:doc.id, ...doc.data()})
        });
    })
    setNewItems(Data)
}, []);


    const [table, setTable] = useState([]);
    const [chair, setChair] = useState([]);
    const [stool, setStool] = useState([]);
    const [accessory, setaccessory] = useState([]);
    const [hotItems, setHotItems] = useState([]);
    const [featItems, setFeatItems] = useState([]);
    const [bestItems, setBestItems] = useState([]);
    const [newItems, setNewItems] = useState([]);
    return ( 
        <NewItemsContext.Provider value={newItems}>
            <BestItemsContext.Provider value={bestItems}>
                <FeatItemsContext.Provider value={featItems}>
                    <HotItemsContext.Provider value={hotItems}>
                        <AccessoryContext.Provider value={accessory}>
                            <StoolContext.Provider value={stool}>
                                <ChairContext.Provider value={chair}>
                                    <TableContext.Provider value={table}>
                                        {props.children}
                                    </TableContext.Provider>
                                </ChairContext.Provider>
                            </StoolContext.Provider>
                        </AccessoryContext.Provider>
                    </HotItemsContext.Provider>
                </FeatItemsContext.Provider>
            </BestItemsContext.Provider>
        </NewItemsContext.Provider>
     );
}
export default contextProvider;
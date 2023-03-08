import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database';
import React, { useState, useEffect } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/database';


 const firebaseConfig = {
    apiKey: "AIzaSyAxWIghXZkowwNELaoyzuvdA5qCw1951MI",
    authDomain: "what-does-shu-say-2023.firebaseapp.com",
    projectId: "what-does-shu-say-2023",
    storageBucket: "what-does-shu-say-2023.appspot.com",
    messagingSenderId: "642750880334",
    appId: "1:642750880334:web:c55db6cb5f69d7a1a7011f",
    measurementId: "G-Q0N5T8XXNH"
  };
  initializeApp(firebaseConfig);




function MyComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // 監聽 '/total' 資料節點的數據
    const dbRef = firebase.database().ref('/total');
    dbRef.on('value', snapshot => {
      const val = snapshot.val();
      setData(val);
    });
    // 在組件解除掛載時取消監聽
    return () => dbRef.off();
  }, []);

  return (
    <div>
      {/* <h1>Realtime Database count:</h1> */}
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
}


export default MyComponent;
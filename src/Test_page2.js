import React, { useState, useEffect }  from 'react'
import './App.css';
import { Button } from 'react-bootstrap';
// import firebase from 'firebase';
// import FireBaseConfig from './FireBaseConfig';
import {db} from "./FireBaseConfig";
import {getDocs, updateDoc, collection, doc} from "firebase/firestore";



const Test_page2 = () => {
    const [clickNum, setclickNum] = useState(0);
    const [totalCount, settotalCount] = useState();


    useEffect(() => {
      getData();
      });
    
    async function clickCount(){
      setclickNum((i)=>i+1);
      settotalCount((i)=>i+1);
      const testDoc = doc(db,"test","GXJ0qbJE281fII5CTaVq");
      console.log("update:",totalCount)
      await updateDoc(testDoc,{TotalCount: totalCount});
    };

    async function getData(){
      const getCount = collection(db, "test");
      try{
          const data = await getDocs(getCount);
          const filterData = data.docs.map((doc) => ({
              ...doc.data()
          }));
          console.log("fireBase_Data:",filterData[0].TotalCount); //filterData[0].TotalCount
          // this.setState({totalCount: filterData[0].TotalCount});
          settotalCount((i)=>filterData[0].TotalCount);
      } catch (err) {
          console.error(err);
      }
  };

  // async function updateCount(){
  //   const testDoc = doc(db,"test","GXJ0qbJE281fII5CTaVq");
    // console.log("update:",testDoc)
    // const nowCount = this.state.totalCount+1
    // console.log("update:",nowCount)
    // await updateDoc(testDoc,{TotalCount: nowCount});
    // this.setState({totalCount:nowCount});
    // settotalCount((i)=>i+1)
//     console.log("update:",totalCount)
//     await updateDoc(testDoc,{TotalCount: totalCount});
// };


    return (
        <div className="mainText">
            {console.log("this.state.clickNum:",clickNum)}
            <p>clickNum: {clickNum}</p>
            <Button variant="primary" onClick={clickCount}>Click</Button> <br/>

            {console.log("this.state.totalCount:",totalCount)}
            <p>totalCount: {totalCount}</p>
            {console.log("=========")}
        </div>
        
      )

}


export default Test_page2;
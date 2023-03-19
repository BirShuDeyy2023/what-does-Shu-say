import React from 'react'
import './App.css';
import { Button } from 'react-bootstrap';
// import firebase from 'firebase';
// import FireBaseConfig from './FireBaseConfig';
import {db} from "./firebaseconfig";
import {getDocs, updateDoc, collection, doc} from "firebase/firestore";




export default class Test_page extends React.Component {
    constructor(props) { // 加入建構子以及props參數
        super(props);
        this.state={
            clickNum:0,
            isLoaded: false,
        }
    }

    
    async getdata(){
        const getCount = collection(db, "test");
        try{
            const data = await getDocs(getCount);
            const filterData = data.docs.map((doc) => ({
                ...doc.data()
            }));
            console.log("fireBase_Data:",filterData[0].TotalCount);
            this.setState({totalCount: filterData[0].TotalCount});
            this.setState({isLoaded:true});
        } catch (err) {
            console.error(err);
        }
    };

    

    async updateCount(){
        const testDoc = doc(db,"test","GXJ0qbJE281fII5CTaVq");
        // console.log("update:",testDoc)
        const nowCount = this.state.totalCount+1
        console.log("update:",nowCount)
        this.setState({totalCount:nowCount});
        await updateDoc(testDoc,{TotalCount: nowCount});
    };



    componentDidMount() {
        this.getdata()
    }

    

    clickCount(){
        const n = this.state.clickNum + 1
        this.setState({clickNum:n});
        
        // this.getdata();
        this.updateCount();
    }



    render(){
        const {isLoaded} = this.state;
        if (isLoaded) {
            return (
                <div className="mainText">
                    {console.log("isLoaded:",this.state.isLoaded)}
                    {console.log("this.state.clickNum:",this.state.clickNum)}
                    <p>clickNum: {this.state.clickNum}</p>
                    <Button variant="primary" onClick={() => this.clickCount()}>Click</Button> <br/>

                    {console.log("this.state.totalCount:",this.state.totalCount)}
                    <p>totalCount: {this.state.totalCount}</p>
                    {console.log("=========")}
                </div>
                
            )
        }
    }
  
}

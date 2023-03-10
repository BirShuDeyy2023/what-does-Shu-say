import React from 'react'
//import { Button } from 'react-bootstrap';
import './App.css';
// import firebase from 'firebase';
// import FireBaseConfig from './FireBaseConfig';
import { db } from "./FireBaseConfig";
import { getDocs, updateDoc, collection, doc } from "firebase/firestore";




export default class Test_page extends React.Component {
    constructor(props) { // 加入建構子以及props參數
        super(props);
        this.state = {
            clickNum: 0,
            // totalCount:null,
        }
    }


    async getdata() {
        const getCount = collection(db, "test");
        try {
            const data = await getDocs(getCount);
            const filterData = data.docs.map((doc) => ({
                ...doc.data()
            }));
            console.log("fireBase_Data:", filterData[0].TotalCount);
            this.setState({ totalCount: filterData[0].TotalCount });
        } catch (err) {
            console.error(err);
        }
    };

    async updateCount() {
        const testDoc = doc(db, "test", "GXJ0qbJE281fII5CTaVq");
        // console.log("update:",testDoc)
        const nowCount = this.state.totalCount + 1
        console.log("update:", nowCount)
        // await updateDoc(testDoc,{TotalCount: nowCount});
        this.setState({ totalCount: nowCount });
        await updateDoc(testDoc, { TotalCount: nowCount });
    };



    componentDidMount() {
        this.getdata();
        setInterval(1000)
    }



    clickCount() {
        const n = this.state.clickNum + 1
        this.setState({ clickNum: n });

        // this.getdata();
        this.updateCount();
    }



    render() {
        return (
            <div className="mainText">
                {console.log("this.state.clickNum:", this.state.clickNum)}
                <p>clickNum: {this.state.clickNum}</p>
                <button id='clickbtn' onClick={() => this.clickCount()}>Click</button> <br />

                {console.log("this.state.totalCount:", this.state.totalCount)}
                <p>totalCount: {this.state.totalCount}</p>
                {console.log("=========")}
            </div>

        )
    }

}

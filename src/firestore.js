import React from 'react'
// import {useState} from 'react'
//import { Button } from 'react-bootstrap';
import './App.css';
// import firebase from 'firebase';
// import FireBaseConfig from './FireBaseConfig';
import { db } from "./firebaseconfig";
import { getDocs, updateDoc, collection, doc } from "firebase/firestore";
import { playSound } from './audio';



export default class TEST_PAGE extends React.Component {
    constructor(props) { // 加入建構子以及props參數
        super(props);
        this.state = {
            clickNum: 0,
            // totalCount:null,
            isLoaded: false,
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
            this.setState({ isLoaded: true });
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
        // const [click, setclick] = this.state("block");
        const n = this.state.clickNum + 1
        this.setState({ clickNum: n });
        this.updateCount();
        //生成一到六的隨機數字
        const newRandomNumber = Math.floor(Math.random() * 6) + 1;
        //把數字丟到選擇器裡面 即顯示隨機spshu
        const show = document.querySelector('#spshu_' + newRandomNumber);
        //把randomnumber傳入audio找到對應
        const handleClick = () => {
            playSound(newRandomNumber);
        }

        //把隱藏屬性block掉
        show.style.display = 'block';

    }

    // rannum = () => {
    //     const newRandomNumber = Math.floor(Math.random() * 6) + 1;
    //     setRandomNumber(newRandomNumber);
    //     // 将随机数传递给函数
    //     this.clickCount(newRandomNumber);
    //   };

    render() {
        const { isLoaded } = this.state;
        if (isLoaded) {
            return (
                <div className="mainText">
                    {console.log("this.state.clickNum:", this.state.clickNum)}
                    {/* <p>clickNum: {this.state.clickNum}</p> */}
                    {console.log("this.state.totalCount:", this.state.totalCount)}
                    <p>clickNum: {this.state.clickNum} ,totalCount: {this.state.totalCount}</p>
                    {console.log("=========")}
                    {/* <button id='clickbtn' onClick={() => this.clickCount()}>Click</button> */}


                    <button onClick={() => this.clickCount()}>
                        <img src="./image/t1.png" width={170} id="target_1" alt='stage1_1' />
                    </button>
                    <button onClick={() => this.clickCount()}>
                        <img src="./image/t1_flip.png" width={190} id="target_2" alt='stage1_1' />
                    </button>
                    <button onClick={() => this.clickCount()}>
                        <img src="./image/t2.png" width={140} id="target_3" alt='stage1_1' />
                    </button>
                    <button onClick={() => this.clickCount()}>
                        <img src="./image/t3.png" width={270} id="target_4" alt='stage1_1' />
                    </button>


                    {/* 特殊shu */}
                    <img src="./image/shu_01.png" style={{ display: 'none' }} width={140} id="spshu_1" alt='spshu' />
                    <img src="./image/shu_4.png" style={{ display: 'none' }} width={120} id="spshu_2" alt='spshu' />
                    <img src="./image/shu_07.png" style={{ display: 'none' }} width={170} id="spshu_3" alt='spshu' />

                    <button onClick={() => this.clickCount()}>
                        <img src="./image/t4.png" width={190} id="target_5" alt='stage1_1' />
                    </button>

                    <img src="./image/shu_10.png" style={{ display: 'none' }} width={240} id="spshu_4" alt='spshu' />
                    <img src="./image/shu_15.png" style={{ display: 'none' }} width={135} id="spshu_5" alt='spshu' />
                    <img src="./image/shu_28.png" style={{ display: 'none' }} width={130} id="spshu_6" alt='spshu' />
                </div>

            )
        }
    }

}

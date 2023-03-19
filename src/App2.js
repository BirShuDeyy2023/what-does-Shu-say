import './App.css';
import HelmetExport from 'react-helmet';
import React, { useState } from 'react';
import house_1 from './target';

import Test_page  from './Test_page';
import './App.css';
import { Button } from 'react-bootstrap';
import {db} from "./firebaseconfig";
import {getDocs, updateDoc, collection, doc} from "firebase/firestore";

export default class App2 extends React.Component  {
  constructor(props) { // 加入建構子以及props參數
    super(props);
    this.state={
        clickNum:0,
        // totalCount:null,
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
      // await updateDoc(testDoc,{TotalCount: nowCount});
      this.setState({totalCount:nowCount});
      await updateDoc(testDoc,{TotalCount: nowCount});
  };



  componentDidMount() {
      this.getdata();
  }



  clickCount(){
      const n = this.state.clickNum + 1
      this.setState({clickNum:n});
      
      // this.getdata();
      this.updateCount();
  }



  render(){
    const twlink = "https://twitter.com/shu_yamino";
    const y2link = "https://www.youtube.com/@ShuYamino";
    const {isLoaded} = this.state;

    if (isLoaded) {
      return (
        <div className="App">
          <div>
            <HelmetExport>
              <link rel="icon" href="%PUBLIC_URL%/yaminerd.png" />
              {/* 使用https://favicon.io/favicon-converter/ 轉換 路徑必須放在public 下 */}
              <title>What-does-shu-say</title>
            </HelmetExport>
          </div>

          <div className="countText">
                  {console.log("this.state.clickNum:",this.state.clickNum)}
                  <p>clickNum: {this.state.clickNum}</p>
                  <Button variant="primary" onClick={() => this.clickCount()}>Click</Button> <br/>

                  {console.log("this.state.totalCount:",this.state.totalCount)}
                  <p>totalCount: {this.state.totalCount}</p>
                  {console.log("=========")}
              </div>

          <div className='content'>
            <button onClick={() => this.clickCount()}>
              <img src="./image/t1.png" width={190} id="target_1" alt='stage1_1' />
            </button>
            <button onClick={() => this.clickCount()}>
              <img src="./image/t1_flip.png" width={210} id="target_2" alt='stage1_1' />
            </button>
            <button onClick={() => this.clickCount()}>
              <img src="./image/t2.png" width={160} id="target_3" alt='stage1_1' />
            </button>
            <button onClick={() => this.clickCount()}>
              <img src="./image/t3.png" width={310} id="target_4" alt='stage1_1' />
            </button>
            <house_1 />
          </div>
          

          <footer>
            <a href={twlink}><img src='./image/twittercon.png' alt="icon" width={90}></img></a>
            <a href={y2link}><img src='./image/button_subscribe.png' alt="icon" width={90}></img></a>
          </footer>
        </div>
      );
    }
  }
};

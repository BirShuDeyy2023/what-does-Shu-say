import React from "react";
// import {useState} from 'react'
import { Button } from "react-bootstrap";
import "./App.css";
// import firebase from 'firebase';
// import FireBaseConfig from './FireBaseConfig';
import { db } from "./firebaseconfig";
import { getDocs, updateDoc, collection, doc } from "firebase/firestore";
import { playSound } from "./audio";
import ScrollableModal from "./scroll.js";
import 'animate.css/animate.min.css';

export default class TEST_PAGE extends React.Component {
  constructor(props) {
    // 加入建構子以及props參數
    super(props);
    this.state = {
      clickNum: 0,
      // totalCount:null,
      isLoaded: false,
      num: null, //紀錄randomnum用的
      normalshu: null,
      voice_id: [],
      show: false,
    };
    this.handleClose = this.handleClose.bind(this);
    this.handleShow = this.handleShow.bind(this);
  }

  handleShow() {
    this.setState({ show: true });
    // console.log("this.state.show:",this.state.show)
  }

  handleClose() {
    this.setState({ show: false });
    // console.log("this.state.show:",this.state.show)
  }

  async getdata() {
    const getCount = collection(db, "test");
    try {
      const data = await getDocs(getCount);
      const filterData = data.docs.map((doc) => ({
        ...doc.data(),
      }));
      console.log("fireBase_Data:", filterData[0].TotalCount);
      this.setState({ totalCount: filterData[0].TotalCount });
      this.setState({ isLoaded: true });
    } catch (err) {
      console.error(err);
    }
  }

  async updateCount() {
    const testDoc = doc(db, "test", "GXJ0qbJE281fII5CTaVq");
    // console.log("update:",testDoc)
    const nowCount = this.state.totalCount + 1;
    console.log("update:", nowCount);
    // await updateDoc(testDoc,{TotalCount: nowCount});
    this.setState({ totalCount: nowCount });
    await updateDoc(testDoc, { TotalCount: nowCount });
  }

  componentDidMount() {
    this.getdata();
    setInterval(1000);
  }

  clickCount() {
    // const [click, setclick] = this.state("block");
    const n = this.state.clickNum + 1;
    this.setState({ clickNum: n });
    this.updateCount();
    // 生成一到六的隨機數字
    const newRandomNumber = Math.floor(Math.random() * 30) + 1;
    const shu1to4 = Math.floor(Math.random() * 4) + 1;
    // 取得前一次更新的 state
    const { num } = this.state;
    const { normalshu } = this.state;

    // 如果 num 不是 null，代表這不是第一次觸發函式
    if (num !== null && num < 7) {
      // 把前一次的隱藏
      document.querySelector("#spshu_" + num).style.display = "none";
    }
    if (normalshu !== null) {
      document.querySelector("#norshu_" + normalshu).style.display = "none";
    }

    //更新新的state
    this.setState({
      num: newRandomNumber,
      normalshu: shu1to4,
    });

    if (newRandomNumber < 7) {
      //把數字丟到選擇器裡面 即顯示隨機spshu
      document.querySelector("#spshu_" + newRandomNumber).style.display =
        "block";
    } else {
      document.querySelector("#norshu_" + shu1to4).style.display = "block";
    }

    //播放聲音
    playSound(newRandomNumber);

    this.setState({ num: newRandomNumber, normalshu: shu1to4 });

    //儲存voice變數
    this.setState((prevState) => ({
      voice_id: [...new Set([...prevState.voice_id, newRandomNumber])],
    }));

    this.props.onChildValue(this.state.clickNum);
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
          {/* 測試用 之後會刪掉 */}
          <h2 style={{ color: "#63b4e7" }} className="secret">
            {/* rightnow={this.state.num} normalshu={this.state.normalshu} */}
            F12
          </h2>
          {console.log("this.state.clickNum:", this.state.clickNum)}
          {/* <p>clickNum: {this.state.clickNum}</p> */}
          <div className="countnumber">
            {console.log("this.state.totalCount:", this.state.totalCount)}
            <p>
              Ugot {this.state.clickNum} Shu, totalShuCount:{" "}
              {this.state.totalCount}
            </p>
          </div>
          {console.log("=========")}
          {/* <button id='clickbtn' onClick={() => this.clickCount()}>Click</button> */}

          <div className="main_components">
            <button onClick={() => this.clickCount()}>
              <img
                src="./image/t1.png"
                width={170}
                id="target_1"
                alt="stage1_1"
              />
            </button>
            <button onClick={() => this.clickCount()}>
              <img
                src="./image/t1_flip.png"
                width={190}
                id="target_2"
                alt="stage1_1"
              />
            </button>
            <button onClick={() => this.clickCount()}>
              <img
                src="./image/t2.png"
                width={140}
                id="target_3"
                alt="stage1_1"
              />
            </button>
            <button onClick={() => this.clickCount()}>
              <img
                src="./image/t3.png"
                width={270}
                id="target_4"
                alt="stage1_1"
              />
            </button>
            <button onClick={() => this.clickCount()}>
              <img
                src="./image/t4.png"
                width={190}
                id="target_5"
                alt="stage1_1"
              />
            </button>

            {/* 特殊shu */}
            <img
              className={"animate__animated animate__zoomIn"}
              src="./image/shu_01.png"
              style={{ display: "none" }}
              width={120}
              id="spshu_1"
              alt="spshu"
            />
            <img
              className={"animate__animated animate__flip"}
              src="./image/shu_4.png"
              style={{ display: "none" }}
              width={120}
              id="spshu_2"
              alt="spshu"
            />
            <img
              className={"animate__animated animate__zoomInRight"}
              src="./image/shu_07.png"
              style={{ display: "none" }}
              width={170}
              id="spshu_3"
              alt="spshu"
            />
            <img
              className={"animate__animated animate__slideInUp"}
              src="./image/shu_10.png"
              style={{ display: "none" }}
              width={200}
              id="spshu_4"
              alt="spshu"
            />
            <img
              className={"animate__animated animate__fadeInTopLeft"}
              src="./image/shu_15.png"
              style={{ display: "none" }}
              width={135}
              id="spshu_5"
              alt="spshu"
            />
            <img
              className={"animate__animated animate__rotateInUpLeft"}
              src="./image/shu_28.png"
              style={{ display: "none" }}
              width={130}
              id="spshu_6"
              alt="spshu"
            />
            {/* 一般shu */}
            <img
              src="./image/norshu_1.png"
              style={{ display: "none" }}
              width={70}
              id="norshu_1"
              alt="norshu"
            />
            <img
              src="./image/norshu_2.png"
              style={{ display: "none" }}
              width={93}
              id="norshu_2"
              alt="norshu"
            />
            <img
              src="./image/norshu_3.png"
              style={{ display: "none" }}
              width={70}
              id="norshu_3"
              alt="norshu"
            />
            <img
              src="./image/norshu_4.png"
              style={{ display: "none" }}
              width={60}
              id="norshu_4"
              alt="norshu"
            />
          </div>
          {/* 集點功能 */}
          <Button variant="primary" onClick={this.handleShow}>
            <img
              src="./image/savepoint.png"
              width={80}
              id="collect"
              alt="collector"
            />
          </Button>

          <ScrollableModal
            voice_id={this.state.voice_id}
            show={this.state.show}
            onHide={this.handleClose}
          />
        </div>
      );
    }
  }
}

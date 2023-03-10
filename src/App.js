import './App.css';
import HelmetExport from 'react-helmet';
//import React, { useState } from 'react';
//import firebase from 'firebase/compat/app';
import Test_page from './firestore';
import 'firebase/database';
function App() {
  const twlink = "https://twitter.com/shu_yamino";
  const y2link = "https://www.youtube.com/@ShuYamino";
  return (
    <div className="App">
      <div>
        <HelmetExport>
          <link rel="icon" href="%PUBLIC_URL%/yaminerd.png" />
          {/* 使用https://favicon.io/favicon-converter/ 轉換 路徑必須放在public 下 */}
          <title>What-does-shu-say</title>
        </HelmetExport>
      </div>

      <div className='content'>
        <button>
          <img src="./image/t1.png" width={190} id="target_1" alt='stage1_1' />
        </button>
        <button>
          <img src="./image/t1_flip.png" width={210} id="target_2" alt='stage1_1' />
        </button>
        <button>
          <img src="./image/t2.png" width={160} id="target_3" alt='stage1_1' />
        </button>
        <button>
          <img src="./image/t3.png" width={310} id="target_4" alt='stage1_1' />
        </button>
        <Test_page />
      </div>
      {/* <MyComponent /> */}


      <footer>
        <a href={twlink}><img src='./image/twittercon.png' alt="icon" width={90}></img></a>
        <a href={y2link}><img src='./image/button_subscribe.png' alt="icon" width={90}></img></a>
      </footer>
    </div>
  );
}

export default App;

import React, { useState,useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import './App.css';


function ScrollableModal() {
    const [show, setShow] = useState(false);
    const [getVoiceNo,setGetVoiceNo] = useState([2,3])
    const [allVoiceNo] = useState(Array.from({length: 10}, (_, i) => i+1))
    const [csvdata,setCsvdata] = useState(null)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    useEffect(() => {
        async function fetchData() {
            await fetch("./collect_form.txt")
            .then((response) => response.text())
            .then(data => setCsvdata(JSON.parse(data)))
        }
        fetchData();
      }, []);



    // 解決非同步資料還沒抓到無法渲染問題
    if (!csvdata) {
        return <div>Loading...</div>;
      }

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                <img src="./image/savepoint.png" width={80} id="collect" alt='collector' />
            </Button>

            <Modal show={show} onHide={handleClose} scrollable id='scroll'>
                <Modal.Header closeButton>
                    <Modal.Title>lez see how many Shu u've got</Modal.Title>
                </Modal.Header>
                <Modal.Body id='scrollcontent'>
                    <div id='scrollitem' style={{ height: '300px',width: '600px', overflowY: 'auto' }}>
                    {/* <div style={{ height: '300px',width: '600px', overflowY: 'auto' }}>
                        {[...Array(50)].map((_, i) => (
                            <p key={i}>Scrollable Content {i}</p>
                        ))}
                    </div> */}
                    {console.log("allno:",allVoiceNo)}
                    {console.log("csvdata:",csvdata)}
                    

                    {/*集點功能判斷式*/}
                    {allVoiceNo.map(i=>{
                    if(getVoiceNo.includes(i)){
                        return(
                            <div class='lockicon' key={i}>
                                {console.log("csvdata2:",csvdata[i-1].stream_name)}
                                <img src={'./image/collect/'+csvdata[i-1].unlock_img+'.png'} width={60} alt={'img_'+{i}} />
                                <div className="icon-desc">
                                <img src='./image/youtube.png' width={20} alt='youtubeicon' />
                                <a href={csvdata[i-1].stream_link}>{csvdata[i-1].stream_name}</a></div>
                            </div>
                        )
                    }else{
                        return(
                            <div class='lockicon' key={i}>
                                <img src='./image/lock.png' width={60} alt='lockicon' />
                            </div>
                            )
                    }})}

                        
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        <img src='./image/button_onoff1.png' width={60} alt='popoff' id='popoff' />
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ScrollableModal;

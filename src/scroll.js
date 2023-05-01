import React, { useState,useEffect,useRef } from 'react';
import { Modal, Button } from 'react-bootstrap';
import './App.css';


function ScrollableModal(props) {
    const [show, setShow] = useState(false);
    const [getVoiceNo,setGetVoiceNo] = useState([2])
    const [allVoiceNo] = useState(Array.from({length: 30}, (_, i) => i+1))
    const [csvdata,setCsvdata] = useState(null)
    const [voice_id2, setVoiceId2 ] = useState(null);
    // const [voice_test, setVoiceIdtest ] = useState();
    const prevVoiceIdRef = useRef();


    useEffect(() => {
        async function fetchData() {
            await fetch("./collect_form_no.txt")
            .then((response) => response.text())
            .then(data => setCsvdata(JSON.parse(data)))
        }
        fetchData();
      }, []);



    useEffect(() => {
        if(typeof(props.voice_id)!=="undefined"){
            if (props.voice_id !== prevVoiceIdRef.current) {
                setVoiceId2(props.voice_id);
                prevVoiceIdRef.current = props.voice_id;
            }
        }
      }, [props.voice_id]);

    useEffect(() => {
        setShow(props.show);
      }, [props.show]);

    const handleClose = () => {
        setShow(false);
        props.onHide();
    }

    
    // 解決非同步資料還沒抓到無法渲染問題
    if (!csvdata) {
        return <div>Loading...</div>;
    }else{
        return (
        <>
            <Modal show={show} onHide={handleClose} scrollable id='scroll'>
                <Modal.Header closeButton>
                    <Modal.Title style={{ color:'#bc4ad9'}}><b>lez see how many Shu u've got</b></Modal.Title>
                </Modal.Header>
                <Modal.Body id='scrollcontent'>
                    <div id='scrollitem' style={{ height: '300px',width: '620px', overflowY: 'auto',  padding: '0px 70px 30px 70px' }}>
                

                    {/*集點功能判斷式getVoiceNo*/}
                    {allVoiceNo.map(i=>{
                    if(Array.isArray(voice_id2) && voice_id2.includes(i)){
                        return(
                            <div class='lockicon' key={i}>
                                <img src={'./image/collect/'+csvdata[i-1].unlock_img+'.png'} width={70} alt={'img_'+{i}} />
                                <div className="icon-desc">
                                <img src='./image/youtube.png' width={20} alt='youtubeicon' /> <br/>
                                <a href={csvdata[i-1].stream_link} target="_blank" rel="noopener noreferrer">{csvdata[i-1].voice_name}</a></div>
                            </div>
                        )
                    }else{
                        if([1,2,3,4,5,6].includes(i)){ //sp改成不同顏色
                            return(
                                <div class='lockicon' key={i}>
                                    <img src='./image/lock_sp.png' width={60} alt='lockicon' />
                                </div>
                                )
                        }else{
                            return(
                                <div class='lockicon' key={i}>
                                    <img src='./image/lock.png' width={60} alt='lockicon' />
                                </div>
                                )
                        }
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
}

export default ScrollableModal;

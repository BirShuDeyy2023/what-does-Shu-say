import React from 'react';
import './App.css';

function Popup(props) {
    return (props.trigger) ? (
        <div className="popuppage">
            <div className="popup-content">
                {/* {props.children} */}
                <h3>eyyyyyyy</h3>
                <p>lez see how many Shu u got</p>
                <p>test</p><br />
                <p>test</p><br />
                <button onClick={() => props.setTrigger(false)}><img src='./image/button_off.png' width={60} alt='popoff' id='popoff' /></button>

            </div>
        </div>
    ) : "";
}

export default Popup;

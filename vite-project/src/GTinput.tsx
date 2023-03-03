import React, { useRef, useState } from "react";
import axios, { isAxiosError } from 'axios';
import './GTinput.css'

const GTinput = props => {

    return(
        <div className ="input-container">
            <input 
            id = "inputfield"
            type="text"
            value={props.value}
            onChange={event => console.log("value changed!")}
        />
        </div>
    );
};

export default GTinput
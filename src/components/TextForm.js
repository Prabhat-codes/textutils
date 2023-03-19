import React from 'react'
import { useState } from 'react'

const TextForm = (props) => {
    const [text,setText]=useState("Enter text here");
    function handleUpClick(params) {
        let newText=text.toUpperCase();
        setText(newText);
    }

    function handleLowerClick(params){
        let newText=text.toLowerCase();
        setText(newText);
    }

    function handleChange(event) {
        // console.log("Changed");
        setText(event.target.value);
    }
    return (
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleChange}></textarea>
            </div>
            <button className="btn btn-primary mx-3" onClick={handleUpClick}>Convert to uppercase</button>
            <button className="btn btn-primary" onClick={handleLowerClick}>Convert to Lowercase</button>
        </div>
    )
}

export default TextForm

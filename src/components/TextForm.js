import React from 'react'
import { useState } from 'react'

const TextForm = (props) => {
    const [text, setText] = useState("Enter text here");
    function handleUpClick(params) {
        let newText = text.toUpperCase();
        setText(newText);
    }

    function handleLowerClick(params) {
        let newText = text.toLowerCase();
        setText(newText);
    }

    function handleClearClick(params) {
        let newText="";
        setText(newText);
    }

    function handleChange(event) {
        setText(event.target.value);
    }

    return (
        <>
        <div className="container">
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="myBox" rows="8" value={text} placeholder={text} onChange={handleChange}></textarea>
            </div>
            <button className="btn btn-primary mx-3" onClick={handleUpClick}>Convert to uppercase</button>
            <button className="btn btn-primary " onClick={handleLowerClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-3" onClick={handleClearClick}>Clear Text</button>
        </div>
        <div className="container my-3 ">
            <h1>Your text's summary is :</h1>
            <p>{text.trim().split(" ").length} words and {text.length} characters in total.</p>
        </div>
        </>
    )
}

export default TextForm

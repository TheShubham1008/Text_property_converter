import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("Converted to Upper Case","success");
  };

  const handleLoClick = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert("Converted to Lower Case","success");
  };

  const handleClearClick = () => {
    let newtext = " ";
    setText(newtext);
    props.showAlert("Text Cleared","success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
    
  };

  const handleCopy = ()=>{
    var text = document.getElementById("myBox");
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text Copied","success");
  }

  const handleExtraSpaces =()=>{
    let newText =text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Space Removed","success");
  }

  const [text, setText] = useState("");

  return (
    <>
      <div className="container"  style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
            style={{backgroundColor:props.mode==='light'?'white':'grey',color:props.mode==='dark'?'white':'black'}}
            
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2"  style={{color:props.mode==='dark'?'white':'black'}} onClick={handleUpClick}> Convert To Upper Case</button>
        <button className="btn btn-success mx-2"  style={{color:props.mode==='dark'?'white':'black'}} onClick={handleLoClick}>Convert To Lower Case</button>
        <button className="btn btn-warning mx-2" style={{color:props.mode==='dark'?'white':'black'}}  onClick={handleClearClick}> Clear Text </button>
        <button className="btn btn-danger mx-2" style={{color:props.mode==='dark'?'white':'black'}}  onClick={handleCopy}> Copy Text To Clip Board </button>
        <button className="btn btn-info mx-2" style={{color:props.mode==='dark'?'white':'black'}}  onClick={handleExtraSpaces}> Remove Extra Spaces </button>
      </div>
      <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <h2> Your Text Summary </h2>
        <p>
          {text.split(" ").length - 1} words and {text.length} characters.
        </p>
        <p>
          {" "}
          You will need {0.008 * text.split(" ").length} minutes to read this
          para.
        </p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter text to preview"}</p>
      </div>
    </>
  );
}

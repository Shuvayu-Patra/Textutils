import React, { useState} from "react";

export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("UpperCase was clicked: " + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase!", "success");
    }

    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase!", "success");
    }

    const handelOnChange = (event)=>{
        // console.log("on Change");
        setText(event.target.value);
    }
    
    const handleCopy = ()=>{
      var text = document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
      document.getSelection().removeAllRanges();
      props.showAlert("Copied to Clipboard!", "success");
    }

    const handleExtraSpaces = ()=>{
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert("Extra spaces removed!", "success");
    }

    const handleClear =()=>{
      setText("");
      props.showAlert("Text cleared!", "success");
    }

    const [text, setText] = useState('');
  return (
    <>
      <div className="container" style={{color: props.mode === 'dark' ? 'white' : '#042743'}}>
        <h2 className="mb-3">{props.heading}</h2>
      <div className="mb-3">
        <textarea
          className="form-control"
          value = {text}
          onChange = {handelOnChange}
          style={{backgroundColor: props.mode === 'dark' ? '#042743' : 'white' , color: props.mode === 'dark' ? 'white' : '#042743'}}
          id="myBox"
          rows={10}
        />
      </div>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to Uppercase</button>   
      <button disabled={text.length===0} className="btn btn-secondary mx-2 my-2" onClick={handleLoClick}>Convert to Lowercase</button>   
      <button disabled={text.length===0} className="btn btn-warning mx-2 my-2" onClick={handleCopy}>Copy To Clipboard</button>   
      <button disabled={text.length===0} className="btn btn-danger mx-2 my-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>   
      <button disabled={text.length===0} className="btn btn-success mx-2 my-2" onClick={handleClear}>Clear Text</button>   
    </div>

    <div className="container my-3" style={{color: props.mode === 'dark' ? 'white' : '#042743'}}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").filter((word)=> {return word.length !== 0}).length} words and {text.length} characters</p>  
        <p>{0.008 * text.split(" ").filter((word)=> {return word.length !== 0}).length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to preview!"}</p>
    </div>
    </>
  );
}

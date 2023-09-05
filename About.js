import React, { useState } from "react";

export default function About(props) {

    // const [myStyle, setmyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'

    // })

    let myStyle = {
      color: props.mode ==='dark'?'white':'#042743',
      backgroundColor: props.mode ==='dark'?'rgb(40 72 105)':'white',
    }


    // const [btntext, setbtnText] = useState("Enable Dark mode");

    // const toggleStyle = ()=>{
    //     if(myStyle.color === 'black'){
    //         setmyStyle({
    //             color: 'white',
    //             backgroundColor: 'black',
    //             border: '1px solid white'

    //         })
    //         setbtnText("Enable Light mode")
    //     }
    //     else{
    //         setmyStyle({
    //             color: 'black',
    //             backgroundColor: 'white'
    //         })
    //         setbtnText("Enable Dark mode")
    //     }
    // }
  return (
    <div className="container" style={{color: props.mode ==='dark'?'white':'#042743'}}>
        <h2 className="my-3">About Us</h2>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="false"
              aria-controls="collapseOne"
            >
              <strong>Analyze Your text</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              Textutils gives you a a way to analyze your text quickly and efficiently. Be it word count, character count or
            </div>
          </div>
        </div>
        <div className="accordion-item" >
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <strong>Free to use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              Textutils is a free character counter tool that provides instant character count & word count statistics for a given text. Textutlis reports the no of words and characters. Thus it is suitable for for writing text with word/character limit.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <strong>Browser Compatible</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              This word counter software works in any web browsers like Chrome, Firefox, Internet Explorer, Opera, Safari. It suits to count characters in facebook, blog, books, excel document, pdf documents etc.  
            </div>
          </div>
        </div>
      </div>

      {/* <div className="container my-3">
      <button onClick={toggleStyle} type="button" className="btn btn-primary">{btntext}</button>
      </div> */}

    </div>
  );
}

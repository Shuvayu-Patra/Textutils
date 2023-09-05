import React from "react";

export default function Contact(props) {

  return (
    <div style={{color: props.mode ==='dark'?'white':'#042743'}}>
      <div className="container my-5">
        <h2 className="text-center">Contact Me</h2>
        <div className="text-center my-3">
          <p>Created by : Shuvayu Patra <br/>
            Email Address : shuvayuPatra@gmail.com <br/>
            Github : https://github.com/Shuvayu-Patra
          </p>
        </div>
      </div>
    </div>
  );
}

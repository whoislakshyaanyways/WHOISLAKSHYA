import React from "react";
import './ContactMe.css';
import OrbitingCircles from "./comps/OrbitingCircles/OrbitingCircles";
import SendMail from "./comps/SendMail/SendMail";


export default function ContactMe() {
  return (

    <div className="ContactMe">
      <div className="Left">
        <div className="Contact-Head">
          <h1 className="title">Let's Connect</h1>
          <p className="subtitle">
            I'd love to hear about your project and explore how we can work together.
          </p>
        </div>
{/*        <div className="OrbitBox">
          <OrbitingCircles />
        </div>*/}
      </div>

      <div className="Right">
        <SendMail />
      </div>
    </div>
  );
}

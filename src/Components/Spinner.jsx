import React from "react";
import Spinning from "./Spinning"; // Assuming you have a Spinning component

const Spinner = () => {
  return (
    <div className='container'>
      <h4>Please wait while we verify your Account details...</h4>
      <div className='spinner'>
        <Spinning /> {/* Render the Spinning component */}
      </div>
      <br />
      <b className='spinner-text'>Don't press any key while processing...</b>
      <br />
      <br />
      <br />
      <br />
      <button
        className='button'
        onClick={() => (window.location.href = "PAN_Card.html")}
        id='ll'
      >
        Cancel
      </button>
      <br />
      <div style={{ textAlign: "center" }}>
        <b style={{ color: "grey", fontSize: "15px" }}>
          <span style={{ color: "grey", fontSize: "15px" }}>
            <b> Please wait </b>5
          </span>
          &nbsp;seconds
        </b>
        <br />
        <br />
        <br />
        <br />
        {/* <img src='futterhas.png' alt='' id='ft' /> */}
      </div>
    </div>
  );
};

export default Spinner;

import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("Uppercase was cLicked");
    let newText = text.toUpperCase();
    setPrevText(text);
    setText(newText);
    props.showAlert("Converted to Uppercase!", "success");
  };
  const handleOnChange = (event) => {
    console.log("On Change");
    setText(event.target.value);
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setPrevText(text);
    setText(newText);
    props.showAlert("Converted to Lowercase!", "success");
  };
  const handleClear = () => {
    let newText = "";
    setPrevText(text);
    setText(newText);
    props.showAlert("Text cleared", "success");
  };

  const handleRedo = () => {
    setText(prevText);
    props.showAlert("Text Redone", "success");
  };
  const [text, setText] = useState("Enter text here2");
  const [prevText, setPrevText] = useState("");

  // setText("new TExt");
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="form-floating">
          <textarea
            className="form-control"
            placeholder="Leave a comment here"
            onChange={handleOnChange}
            id="myBox"
            value={text}
            rows="8"
          ></textarea>
        </div>
        <button className={`btn btn-${props.mode}  my-3 mx-2`} onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className={`btn btn-${props.mode}  my-3 mx-2`} onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className={`btn btn-${props.mode}  my-3 mx-2`} onClick={handleClear}>
          Clear Text
        </button>

        <button className={`btn btn-${props.mode}  my-3 mx-2`} onClick={handleRedo}>
          Redo
        </button>
      </div>
      <div className="conatiner my-3">
        <h1>Your text summary</h1>
        <p>
          {text.split(" ").length} words, {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}

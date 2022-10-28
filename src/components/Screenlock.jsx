import { useState } from "react";
import "./Screenlock.css";

// let number = number;
// let text = "";
const password = "1234";
function Screenlock() {
  const [number, setnumber] = useState("");
  const [text, settext] = useState("");
  const [hide, setHide] = useState(false);
  const [error, setError] = useState(false);
  const buttonClick = (number) => {
    settext(text + number);
    // setnumber(text);
  };
  const enter = () => {
    if (password == text) {
      // alert("the password is correct");
      setHide(true);
    } else {
      setError(true);
    }
  };
  const clearButton = () => {
    settext("");
  };

  return (
    <div className="background">
      <p className={`greetinTextHide ${hide ? "greetigTextFadeIn " : ""}`}>
        Welcome
      </p>
      <div className={`lock ${hide ? "hide" : ""}`}>
        <div className={`container ${error ? "containerError" : ""}`}>
          <p className={`errorLabelHide ${error ? "errorLabelShow" : ""}`}>
            Incorrect password
          </p>

          <input type="text" className="screen" value={text} />

          <button
            onClick={() => {
              buttonClick(1);
            }}
            className="button"
          >
            1
          </button>
          <button
            onClick={() => {
              buttonClick(2);
            }}
            className="button"
          >
            2
          </button>
          <button
            onClick={() => {
              buttonClick(3);
            }}
            className="button"
          >
            3
          </button>
          <button
            onClick={() => {
              buttonClick(4);
            }}
            className="button"
          >
            4
          </button>
          <button
            onClick={() => {
              buttonClick(5);
            }}
            className="button"
          >
            5
          </button>
          <button
            onClick={() => {
              buttonClick(6);
            }}
            className="button"
          >
            6
          </button>
          <button
            onClick={() => {
              buttonClick(7);
            }}
            className="button"
          >
            7
          </button>
          <button
            onClick={() => {
              buttonClick(8);
            }}
            className="button"
          >
            8
          </button>
          <button
            onClick={() => {
              buttonClick(9);
            }}
            className="button"
          >
            9
          </button>
          <button
            onClick={() => {
              clearButton();
            }}
            className="button"
          >
            C
          </button>
          <button
            onClick={() => {
              buttonClick(0);
            }}
            className="button"
          >
            0
          </button>
          <button
            onClick={() => {
              enter();
            }}
            className="button"
          >
            Enter
          </button>
        </div>
      </div>
    </div>
  );
}

export default Screenlock;

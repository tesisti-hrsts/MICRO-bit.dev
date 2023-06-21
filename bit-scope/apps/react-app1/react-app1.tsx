import React, { useState } from 'react';
import { Observable } from 'windowed-observable';
import logoReact from "./assets/react.png";
import "./styles/react-app1-style.css";

export default function ReactApp1() {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => setClicked(!clicked);

  const observable = new Observable('countObservable');

  let count = 0;

  const handleButtonPlus = (e) => {
    e.preventDefault();
    count += 1;
    observable.publish(count);
  }

  const handleButtonMinus = (e) => {
    e.preventDefault();
    if (count > 0) {
      count -= 1;
      observable.publish(count);
    }
  }

  return (
    <div id='back_app1'>
      <div id='divPlusMinus_app1'>
        <button type='button' id='buttonPlus_app1' onClick={handleButtonPlus}> + </button>
        <button type='button' id='buttonMinus_app1' onClick={handleButtonMinus}> - </button>
      </div>
      <button type='button' id='button_app1' onClick={handleClick}> Click me! </button>
      <div id='imageDiv_app1'> {clicked ? <img id='img_app1' src={logoReact} alt="React Logo" /> : ""} </div>
    </div>
  );
}
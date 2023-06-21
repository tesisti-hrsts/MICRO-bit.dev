import React, { useState, useEffect } from 'react';
import { Observable } from 'windowed-observable';
import logoReact from "./assets/react.png";
import "./styles/react-app2-style.css";

export default function ReactApp2() {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => setClicked(!clicked);
  const [currCount, setCurrCount] = useState(0);

  const observable = new Observable('countObservable');
  const handleCurrCount = (remoteCount) => setCurrCount(remoteCount);

  useEffect(() => {
    observable.subscribe(handleCurrCount);

    return () => {
      observable.unsubscribe(handleCurrCount)
    }
  }, [handleCurrCount]);

  return (
    <div id='back_app2'>
      <span id='countPart_app2'> Current count: {currCount} </span>
      <button type='button' id='button_app2' onClick={handleClick}> Click me! </button>
      <div id='imageDiv_app2'> {clicked ? <img id='img_app2' src={logoReact} alt="React Logo" /> : ""} </div>
    </div>
  );
}
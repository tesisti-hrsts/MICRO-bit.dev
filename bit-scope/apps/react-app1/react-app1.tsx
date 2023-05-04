import React, { useState } from 'react';
import logoReact from "./assets/react.png";
import "./styles/react-app1-style.css";

export default function ReactApp1() {
	const [clicked, setClicked] = useState(false);
	const handleClick = () => setClicked(!clicked);

	return (
		<div id='back_app1'>
			<button type='button' id='button_app1' onClick={handleClick}> Click me! </button>
			<div id='imageDiv_app1'> {clicked ? <img id='img_app1' src={logoReact} alt="React Logo" /> : ""} </div>
		</div>
	);
}
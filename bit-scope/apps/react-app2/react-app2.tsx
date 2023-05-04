import React, { useState } from 'react';
import logoReact from "./assets/react.png";
import "./styles/react-app2-style.css";

export default function ReactApp2() {
	const [clicked, setClicked] = useState(false);
	const handleClick = () => setClicked(!clicked);

	return (
		<div id='back_app2'>
			<button type='button' id='button_app2' onClick={handleClick}> Click me! </button>
			<div id='imageDiv_app2'> {clicked ? <img id='img_app2' src={logoReact} alt="React Logo" /> : ""} </div>
		</div>
	);
}
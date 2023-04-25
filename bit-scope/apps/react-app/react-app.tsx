import React, {useState} from 'react';
import logoReact from "./assets/react.png";
import "./styles/react-app-style.css";

export default function ReactApp() {
	const [clicked, setClicked] = useState(false);
	const handleClick = () => setClicked(!clicked);

	return (
		<div className='back'>
			<button type='button' onClick={handleClick}> Click me! </button>
			<div className='imageDiv'> {clicked ? <img src={logoReact} alt="React Logo" /> : ""} </div>
		</div>
	);
}
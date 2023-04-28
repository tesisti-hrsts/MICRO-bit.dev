/* eslint import/no-unresolved: [2, { ignore: ['react_app/reactApp'] }] */
import React from 'react';
import "./styles/host-app-style.css";

// @ts-ignore-next-line @bit-ignore
const ReactApp = React.lazy(() => import('react_app/reactApp'));

export function HostApp() {
	return (
		<div className='containerApp'>
			<div className='microApp'> <ReactApp /> </div>
			<div className='microApp'> <ReactApp /> </div>
		</div>
	);
}
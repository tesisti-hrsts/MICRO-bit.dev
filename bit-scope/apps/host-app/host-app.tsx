/* eslint import/no-unresolved: [2, { ignore: ['react_app/reactApp'] }] */
import React from 'react';

// @ts-ignore-next-line @bit-ignore
const ReactApp = React.lazy(() => import('react_app/reactApp'));

import "./styles/host-app-style.css";

export function HostApp() {
	return (
		<div className='containerApp'>
			<div className='microApp'> <ReactApp /> </div>
			<div className='microApp'> <ReactApp /> </div>
		</div>
	);
}
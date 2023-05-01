/* eslint import/no-unresolved: [2, { ignore: ['react_app/reactApp', 'angular_app/angularApp'] }] */
import React from 'react';
import "./styles/host-app-style.css";

// @ts-ignore-next-line @bit-ignore
const ReactApp = React.lazy(() => import('react_app/reactApp'));

// @ts-ignore-next-line @bit-ignore
const AngularApp = React.lazy(() => import('angular_app/angularApp'));

export function HostApp() {
	return (
		<div className='containerApp'>
			<div className='microApp'> <ReactApp /> </div>
			<div className='microApp'> <AngularApp /> </div>
		</div>
	);
}
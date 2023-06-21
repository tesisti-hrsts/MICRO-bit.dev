/* eslint import/no-unresolved: [2, { ignore: ['react_app1/reactApp1', 'react_app2/reactApp2'] }] */
import React from 'react';
import "./styles/host-app-style.css";

// @ts-ignore-next-line @bit-ignore
const ReactApp1 = React.lazy(() => import('react_app1/reactApp1'));

// @ts-ignore-next-line @bit-ignore
const ReactApp2 = React.lazy(() => import('react_app2/reactApp2'));

export function HostApp() {
  return (
    <div className='containerApp'>
      <div className='microApp'> <ReactApp1 /> </div>
      <div className='microApp'> <ReactApp2 /> </div>
    </div>
  );
}
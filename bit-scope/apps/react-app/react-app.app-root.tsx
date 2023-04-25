// import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { default as ReactApp } from "./react-app";

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<ReactApp />);

/**
 * uncomment to render the app with routing (react-router-dom)
 */
// root.render(
//   <BrowserRouter>
//     <ReactApp />
//   </BrowserRouter>
// );
// import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import { createRoot } from 'react-dom/client';
import ReactApp1 from "./react-app1";

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<ReactApp1 />);

/**
 * uncomment to render the app with routing (react-router-dom)
 */
// root.render(
//   <BrowserRouter>
//     <ReactApp />
//   </BrowserRouter>
// );
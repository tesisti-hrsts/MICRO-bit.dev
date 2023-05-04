// import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import { createRoot } from 'react-dom/client';
import ReactApp2 from "./react-app2";

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<ReactApp2 />);

/**
 * uncomment to render the app with routing (react-router-dom)
 */
// root.render(
//   <BrowserRouter>
//     <ReactApp />
//   </BrowserRouter>
// );
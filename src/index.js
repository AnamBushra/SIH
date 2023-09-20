import React from "react";
import ReactDOM from "react-dom/client";
import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from "./App";
import { BrowserRouter,Routes,Route } from "react-router-dom";
//const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<App />);
const rootElement = 
document.getElementById('root');
const root = 
createRoot(rootElement);
root.render(
    <StrictMode>
        
      <App />
    </StrictMode>,
  );

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';
// import 'bootstrap/dist/css/bootstrap.css';
// // Put any other imports below so that CSS from your
// // components takes precedence over default styles.

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );



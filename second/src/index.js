import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Bookkk from './bookkk';
import Books from './Books';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Bookkk/>
   <Bookkk/>
   <Books/>
   <Books/>
  </React.StrictMode>
);


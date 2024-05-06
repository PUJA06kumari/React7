import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import BookListClass from './BookListClass';
import BooksNew from './BooksNew';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <BookListClass/>
   <BooksNew/>
  </React.StrictMode>

);  
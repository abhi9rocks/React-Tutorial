import React from 'react';
import ReactDom from 'react-dom';
// CSS
import "./index.css"

function BookList(){
  return (
  <section className='booklist'>
    <Book/>
    <Book/>
    <Book/>
    <Book/>
    <Book/>
    <Book/>
    <Book/>
    <Book/>
  </section>
  );
}

const Book = () => {
  return (
  <article className='book'>
    <img src="https://images-eu.ssl-images-amazon.com/images/W/WEBP_402378-T1/images/I/61kRkfsIMUL._AC_UL600_SR600,400_.jpg" alt=""/>
    <h1>Do Epic Shit</h1>
    <h4>Abhinav Singh</h4>
  </article>
  );
}

ReactDom.render(<BookList/>,document.getElementById('root'));
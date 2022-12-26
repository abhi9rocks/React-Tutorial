import React from 'react';
import ReactDom from 'react-dom';
// CSS
import "./index.css"
// Setup var
const firstBook ={
  img:"https://images-eu.ssl-images-amazon.com/images/W/WEBP_402378-T1/images/I/61kRkfsIMUL._AC_UL600_SR600,400_.jpg",
  title:'Do Epic Shit',
  author:'Abhinav Singh'
};
const secondBook ={
  img:"https://images-eu.ssl-images-amazon.com/images/W/WEBP_402378-T1/images/I/41l1SqjuqJL._AC_UL600_SR600,400_.jpg",
  title:'Get Epic Shit Done',
  author:'Abhinav Singh'
};
function BookList(){
  return (
  <section className='booklist'>
    <Book img={firstBook.img} 
    title={firstBook.title} 
    author={firstBook.author}
    />
  
    <Book img={secondBook.img} 
    title={secondBook.title} 
    author={secondBook.author}
    />
  </section>
  );
}

const Book = (props) => {
  const{img, title, author}= props;
  return (
  <article className='book'>
    <img style={{ width: 200, height: 150 }} src={img} alt=""/>
    <h1>{title}</h1>
    <h4>{author}</h4>
  </article>
  );
}

ReactDom.render(<BookList/>,document.getElementById('root'));
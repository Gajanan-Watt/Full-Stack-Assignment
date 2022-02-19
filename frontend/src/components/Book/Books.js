import React, { useEffect, useState } from "react";
import "./Book.css";
import axios from "axios";
import Book from "./Book";
const URL = "http://localhost:5000/books";
const fetchHandler = async () => {
    return await axios.get(URL).then((res) => res.data);
  };
  const Books = () => {
    const [books, setBooks] = useState([]);
    const [array, setArray] = useState(books);
    // const [currPage, setCurrPage] = useState(1);
    // const [bookPerPage, setBookPerPage] = useState(5);
    useEffect(() => {
      fetchHandler().then((data) => setBooks(data.books));
    }, []);
    // useEffect(() => {
    //     function sort(){
    //         books.sort((a, b) => b.price - a.price);
    //         return books;
    //     }
    // })
    // books = books.sort()
    // let array = books.map((el) => {
    //     return el.price.sort((a,b) => a-b);
    // })
    // let array = books;
    // array.sort((a, b) => b.price - a.price);
    // console.log(array);

    
    console.log("books", books);
    
    return (
        <>
          <button>Sort By Year</button>
      <div>
        <ul>
          {books &&
            books.map((book, i) => (
              <li key={i}>
                <Book book={book} />
              </li>
            ))}
         
        </ul>
      </div>
        </>
    );
  };
  
  export default Books;
  
import React, { useState }  from "react"
import Bookslist from '../Books/Booksdata'
import {Link } from 'react-router-dom';
const Navbar = ({books,setBooks}) => {

  const [search,setSearch]=useState('')
  const [query,setQuery]=useState('')

  const onsubmit=(e)=>{
   e.preventDefault();
   setQuery(search);
   console.log(query);

   const querybook=books.filter((book)=>book.name == query)
   setBooks(querybook);
   console.log(querybook)
   setSearch('');
  }

return (
    <div>
      <nav className=" navbar navbar-dark navbar-expand-lg bg-dark navbar-fixed">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to='/'>
          <a className="nav-link active" aria-current="page" href="#">Home</a>
          </Link>
        </li>

      </ul>
      <form className="d-flex" role="search" onSubmit={onsubmit}>
        <input className="form-control me-2" type="search" placeholder="Search"  value={search} aria-label="Search" 
         onChange={(e)=>setSearch(e.target.value)}
       />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

    </div>
  )
}

export default Navbar


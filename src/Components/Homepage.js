import React, { useState } from 'react'
import Bookslist from '../Books/Booksdata'
import BookCard from './BookCard';
import Navbar from './Navbar';
const Homepage = ({books,setBooks,setName,
    setauthor,setdescription,description,author,name}) => {


   
    const [editBook,setEditBook]=useState(null)
   
    const onsubmit=(e)=>{
        e.preventDefault()
        const id=Math.floor(Math.random*1000)+1
        console.log(name)
        console.log(author)
        console.log(description)
        setBooks([...books,{id:id,name:name,author:author,description:author}])
        console.log(books)
        setName('')
        setauthor('')
        setdescription('')
      
    }
   

    
    return (
        <>
            <div className="App">
                
                <h3>My bookApp</h3>

                {books.map((book) => <BookCard
                    key={book.id}
                    books={books}
                    name={book.name}
                    id={book.id}
                    setBooks={setBooks}
                    Bookslist={Bookslist}
                    description={book.description}
                    book={book}
                />)}
               <form className='form-group text-center' onSubmit={onsubmit}> 
                <input className='' type='text' placeholder='name' value={name} onChange={(e)=>setName(e.target.value)}/><br/>
                <input className='' type='text' placeholder='author' value={author} onChange={(e)=>setauthor(e.target.value)}/><br/>
                <input className='' type='text' placeholder='description' value={description} onChange={(e)=>setdescription(e.target.value)}/><br/>
                <button className='btn btn-success btn-sm flext-start' type='submit'>add book</button>
               </form>
            </div>
        </>
    )
}

export default Homepage

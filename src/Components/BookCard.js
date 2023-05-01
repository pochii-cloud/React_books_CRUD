import React from 'react'
import { Link } from 'react-router-dom';
const BookCard = ({book,name,setBooks,id,books}) => {
    

    const deletebook=(id)=>{
        const newstate=books.filter(book=>book.id !==id);
        setBooks(newstate);
        console.log('delete button clicked')
    }

    return (
        <div>
            <p>{name}</p>

           <button className='btn btn-danger btn-sm' onClick={()=>{deletebook(id)}} >delete</button>
           <Link to={`/book/${book.id}`}><button >details</button></Link>
           <Link to={`/editbook/${book.id}`}><button>edit</button></Link>
         
           
        </div>
    )
}

export default BookCard

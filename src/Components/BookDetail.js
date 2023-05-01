import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import  Bookslist  from '../Books/Booksdata'



const BookDetail = () => {
  const {id}=useParams();
  const singlebook=Bookslist.find((book)=>book.id == id)
  console.log(singlebook)

  

  
  
  return (
    <div>
      <p>this is the book details and id = {id}</p>
      <p>this is the book details and id = {singlebook.name}</p>
      <p>this is the book details and id = {singlebook.author}</p>
      <p>this is the book details and id = {singlebook.description}</p>
     

      


    </div>
  )
}

export default BookDetail

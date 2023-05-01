import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Bookslist from '../Books/Booksdata'
const EditBook = ({books,setBooks}) => {

    const {id}=useParams()
    const findbook=books.find((book)=>
      book.id == id)
    const{name,author,description}=findbook

    const [updatename,setUpdateName]=useState(name)
    const[updateauthor,setUpdateauthor]=useState(author)
    const [updatedescription,setUpdateDescription]=useState(description)
    
    const onsubmit=(e)=>{
    e.preventDefault()
    updatesbook()
    }

    const updatesbook=()=>{
       const updatedbook=books.map((book)=>book.id == id)
       if(updatedbook){
         const book={id:id,name:updatename,author:updateauthor,description:updatedescription}
         console.log(book)

         
       }
      
    }
  return (
    <div>
      <p>its the edit page for id= {id}</p>
      <p>its the edit page for id= {name}</p>
      <button onClick={()=>updatesbook()}>run</button>
      <form className='form-group text-center' onSubmit={onsubmit}> 
                <input className='' type='text' value={updatename} placeholder='name' onChange={(e)=>setUpdateName(e.target.value)} /><br/>
                <input className='' type='text' value={updateauthor} placeholder='author' onChange={(e)=>setUpdateauthor(e.target.value)}/><br/>
                <input className='' type='text' value={updatedescription} placeholder='description' onChange={(e)=>setUpdateDescription(e.target.value)}/><br/>
                <button className='btn btn-success btn-sm flext-start' type='submit'>add book</button>
               </form>
    </div>
  )
}

export default EditBook

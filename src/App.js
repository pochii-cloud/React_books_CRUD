import React, { useState } from 'react'
import BookDetail from './Components/BookDetail';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Homepage from './Components/Homepage';
import Navbar from './Components/Navbar';
import Bookslist from './Books/Booksdata';
import EditBook from './Components/EditBook';




function App() {

  const [books, setBooks] = useState(Bookslist);
  const[name,setName]=useState('')
  const[author,setauthor]=useState('')
  const[description,setdescription]=useState('')


  return (

    <div className="App">
    <Navbar books={books} setBooks={setBooks} /> 

      <Routes>
        <Route exact path="/" element={<Homepage 
        books={books} 
        setBooks={setBooks}
        name={name}
        author={author}
        description={description}
        setName={setName}
        setauthor={setauthor}
        setdescription={setdescription}
        />}/>
        <Route exact path='/book/:id' element={<BookDetail />} />
        <Route exact path='/editbook/:id' element={<EditBook 
         books={books} 
         setBooks={setBooks}
         />} />
      </Routes>
                                  
    </div>
  );
}


export default App;

import { useState } from 'react'
import { useEffect } from 'react'
import TextArea from './components/TextArea'
import NotesList from './components/NotesList'

import "./App.css"

const App = () => {
  const [notes, setNotes] = useState([]);

  const getNotes = async() =>{
    try {
      const res = await fetch('http://localhost:8080/notes');
      const jsonNotes = await res.json();
      setNotes(jsonNotes);
    }catch(err) {
      console.log(err.message)
    }
  }

  useEffect(() => {getNotes()}, [])

  return (
    <div className='container'>
      <TextArea getNotes={getNotes}/>
      <NotesList notes={notes} />
    </div>
  );
}

export default App;

import { useState } from 'react'
import { useEffect } from 'react'
import TextArea from './components/TextArea'
import NotesList from './components/NotesList'

import "./App.css"

const App = () => {
  const [notes, setNotes] = useState([]);
  const [newNoteHeader, setNewNoteHeader] = useState('');
  const [newNoteContent, setNewNoteContent] = useState('');

  useEffect(() => {
    const notes = JSON.parse(localStorage.getItem('items'));
    if(notes){
      setNotes(notes);
    }
  }, [])

  const handleInput = (event) => {
    if(event.target.classList.contains('note-header-input')){
      setNewNoteHeader(event.target.value);
    }else{
      setNewNoteContent(event.target.value);
    } 
  }

  const addNote = (event) => {
    event.preventDefault();
    const newNoteObject = {
      header: newNoteHeader,
      content: newNoteContent
    }

    if(newNoteObject.header.length === 0){
      alert('Please give a header for your note.')
    }else if(newNoteObject.content.length === 0){
      alert('Please give content to your note.')
    }else{
      const newNotes = notes.concat(newNoteObject);
      setNotes(newNotes)
      localStorage.setItem('items', JSON.stringify(newNotes));
      setNewNoteHeader('');
      setNewNoteContent('');
    }
  }

  return (
    <div className='container'>
      <TextArea headerValue={newNoteHeader} noteValue={newNoteContent} 
        handleInput={handleInput} addNoteFunction={addNote}/>
      <NotesList notes={notes} />
    </div>
  );
}

export default App;

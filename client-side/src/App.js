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

  const getDate = () => {
    let currentDate = new Date();
    let day = currentDate.getDate();
    // +1 for month beacuse the system returns between 0 and 11
    let month = currentDate.getMonth() + 1; 
    let year = currentDate.getFullYear();

    let hours = currentDate.getHours();
    let minutes = currentDate.getMinutes();

    day = day.toString().length === 1 ? '0' + day : day;
    month = month.toString().length === 1 ? '0' + month : month;
    minutes = minutes.toString().length === 1 ? '0' + minutes : minutes;

    let am_or_pm = hours < 12 ? "am" : "pm"

    return `${year}-${month}-${day}, ${hours}:${minutes}${am_or_pm}`
  }

  useEffect(() => {getNotes()}, [])

  return (
    <div className='container'>
      <TextArea getNotes={getNotes} getDate={getDate}/>
      <NotesList notes={notes} getNotes={getNotes} getDate={getDate}/>
    </div>
  );
}

export default App;

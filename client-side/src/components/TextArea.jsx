import { useState } from 'react'

const TextArea = ({ getNotes, getDate }) => {
  const [title, setTitle] = useState('');
  const [noteBody, setNoteBody] = useState('');

  const handleInput = (event) => {
    if(event.target.classList.contains('note-title-input')){
      setTitle(event.target.value);
    }else{
      setNoteBody(event.target.value);
    }
  }

  const addNote = async(event) => {
    event.preventDefault()
    if(title === ''){
      alert("Note must have a title, please provide a title for you note.");
      return;
    }else if(noteBody === ''){
      alert("Note must have a content, please provide a content for you note.");
    }else{
      try {
        const timeLastModified = getDate();
        const body = {title, noteBody, timeLastModified}
        await fetch('http://localhost:8080/notes', {
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify(body)
        })
        setTitle('')
        setNoteBody('')
        getNotes()
      }catch(err) {
        console.log(err.message)
      }
    }
  }

  return(
    <div className="my-form mt-5">
        <div className="mb-3 text-center">
          <label htmlFor="exampleFormControlInput1" className="form-label h3 fw-bold">Note Title</label>
          <input type="text" className="form-control note-title-input" id="exampleFormControlInput1" placeholder="" value={title} 
            onChange={handleInput}/>
        </div>
        <div className="text-center">
          <label htmlFor="exampleFormControlTextarea1" className="form-label h3 fw-bold">Note Content</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={noteBody} 
            onChange={handleInput}></textarea>
        </div>
        <button className="btn btn-success form-control" onClick={addNote}>SAVE NOTE</button>
    </div>
    
  )
}

export default TextArea;
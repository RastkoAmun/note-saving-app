import { useState } from 'react'

const EditModal = ({note, getNotes, getDate}) => {
  const [title, setTitle] = useState(note.title);
  const [noteBody, setNoteBody] = useState(note.notebody);

  const handleInput = (event) => {
    if(event.target.classList.contains('note-title-input')){
      setTitle(event.target.value);
    }else{
      setNoteBody(event.target.value);
    }
  }

  const reset = () => {
    setTitle(note.title);
    setNoteBody(note.notebody)
  }

  const updateNote = async(note) => {
    try {
      const timeLastModified = getDate();
      const important = note.important;
      const body = {title, noteBody, timeLastModified, important}
      await fetch(`http://localhost:8080/notes/${note.id}`, {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(body)
      })
      getNotes();
    }catch(error) {
      console.log(error.message);
    } 
  }

  return(
    <div>
      <button type="button" className="btn btn-warning" data-bs-toggle="modal" data-bs-target={`#editID${note.id}`}>
        Edit
      </button>

      <div className="modal fade" id={`editID${note.id}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={reset}></button>
            </div>
            <div className="modal-body ">
              <label htmlFor="exampleFormControlInput1" className="form-label h4">Note Title</label>
              <input type="text" className="form-control note-title-input" id="exampleFormControlInput1" placeholder="" value={title} onChange={handleInput}/>
              <label htmlFor="exampleFormControlTextarea1" className="form-label h4 mt-3">Note Content</label>
              <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={noteBody} onChange={handleInput}
              ></textarea>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={reset}>Cancel</button>
              <button type="button" className="btn btn-warning" data-bs-dismiss="modal" onClick={() => updateNote(note)}>Edit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditModal;
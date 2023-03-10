import Modal from './Modal'
import DeleteModal from './DeleteModal';
import { useState } from 'react'

const NotesList = ({notes}) => {
  const [openModal, setOpenModal] = useState(false);
  const [foundNote, setFoundNote] = useState({})

  let counter = 0;

  const func = (event) =>{
    setFoundNote(notes.find(note => note.header === event.target.innerHTML));
    setOpenModal(true);
  }

  if(openModal){
    document.body.classList.add('active-modal')
  }else{
    document.body.classList.remove('active-modal')
  }

  return(
    <div>
      <div className='saved-notes'>
        <h2 className='header'>SAVED NOTES:</h2>
        <ul>
          {notes.map(note => {
            return <li key={note.id}><span className='text' onClick={func}>{note.title}</span></li>
          })}
          {/* <Modal open={openModal} note={foundNote} onClose={() => setOpenModal(false)}/> */}
        </ul>
      </div>
      <div>
        <table className="table container">
          <thead >
            <tr>
              <th className="col-9" scope="col">Note Title</th>
              <th className="col" scope="col">View</th>
              <th className="col" scope="col">Edit</th>
              <th className="col" scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {notes.map(note => {
              return(
                <tr key={note.id}>
                  <td scope="row">{note.title}</td>
                  <td><button className="btn btn-secondary">View</button></td>
                  <td><button className="btn btn-warning">Edit</button></td>
                  <td><DeleteModal /></td>
                </tr>
              )
            })}
          </tbody>
        </table>
    </div>
  </div>
  )
}

export default NotesList;
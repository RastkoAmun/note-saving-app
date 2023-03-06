import Modal from './Modal'
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
    <div className='saved-notes'>
      <h1 className='header'>SAVED NOTES:</h1>
      <ul>
        {notes.map(note => {
          return <li key={counter++}><span className='text' onClick={func}>{note.header}</span></li>
        })}
        <Modal open={openModal} note={foundNote} onClose={() => setOpenModal(false)}/>
      </ul>
    </div>
  )
}

export default NotesList;
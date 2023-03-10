import { useState } from 'react'
import Modal from './Modal'
import ViewModal from './ViewModal';
import EditModal from './EditModal';
import DeleteModal from './DeleteModal';

const NotesList = ({notes, getNotes}) => {



  return(
    <div>
      <h2 className='header mt-5'>SAVED NOTES:</h2>
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
                <td><ViewModal note={note}/></td>
                <td><EditModal note={note} getNotes={getNotes}/></td>
                <td><DeleteModal note={note} getNotes={getNotes}/></td>
              </tr>
            )
          })}
        </tbody>
      </table>
  </div>
  )
}

export default NotesList;
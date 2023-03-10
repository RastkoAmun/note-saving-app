import Modal from './Modal'
import DeleteModal from './DeleteModal';
import { useState } from 'react'

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
                <td><button className="btn btn-secondary">View</button></td>
                <td><button className="btn btn-warning">Edit</button></td>
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
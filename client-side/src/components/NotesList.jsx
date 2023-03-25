
import ViewModal from './ViewModal';
import EditModal from './EditModal';
import DeleteModal from './DeleteModal';

const NotesList = ({notes, getNotes, getDate}) => {

  const patchNote = async(note) => {
    try {
      const title = note.title;
      const noteBody = note.notebody;
      const timeLastModified = note.timelastmodified;
      const important = !note.important;
      const body = {title, noteBody, timeLastModified, important}
      await fetch(`http://localhost:8080/notes/${note.id}`, {
        method: "PATCH",
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
      <h2 className='header mt-5'>SAVED NOTES:</h2>
      {/* <button type="button" className="btn btn-warning">Yes</button> */}
      <table className="table container">
        <thead >
          <tr>
            <th className="col"></th>
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
                <td>{note.important ?
                  <i className="bi bi-star-fill" onClick={() => patchNote(note)}></i> :
                  <i className="bi bi-star" onClick={() => patchNote(note)}></i>}
                </td>
                <td scope="row">{note.title}</td>
                <td><ViewModal note={note}/></td>
                <td><EditModal note={note} getNotes={getNotes} getDate={getDate}/></td>
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
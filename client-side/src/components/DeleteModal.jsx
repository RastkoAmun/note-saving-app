const DeleteModal = ({note, getNotes}) => {

  const deleteNote = async(id) => {
    try{
      await fetch(`http://localhost:8080/notes/${id}`, {
      method: "DELETE"
      })
      getNotes();
    }catch(err) {
      console.log(err.message)
    }
  }

  return(
    <div>
      <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target={`#delID${note.id}`}>
        Delete
      </button>

      <div className="modal fade" id={`delID${note.id}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Delete Note</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              Would you like to delete this note?
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
              <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={() => deleteNote(note.id)}>Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DeleteModal;
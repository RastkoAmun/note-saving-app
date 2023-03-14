const ViewModal = ({note}) => {

  return(
    <div>
      <button type="button" className="btn btn-secondary" data-bs-toggle="modal" data-bs-target={`#viewID${note.id}`}>
        View
      </button>

      <div className="modal fade" id={`viewID${note.id}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div id="modal-dialog-edit" className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Note Title: {note.title}</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <pre>{note.notebody}</pre>
            </div>
            <div className="modal-footer">
              <p className="date">Last modified: {note.timelastmodified}</p>
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewModal;
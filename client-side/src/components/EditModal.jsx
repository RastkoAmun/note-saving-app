const EditModal = ({note, getNotes}) => {

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
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body ">
              <label htmlFor="exampleFormControlInput1" className="form-label h4">Note Title</label>
              <input type="text" className="form-control note-title-input" id="exampleFormControlInput1" placeholder=""/>
              <label htmlFor="exampleFormControlTextarea1" className="form-label h4 mt-3">Note Content</label>
              <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"  
              ></textarea>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
              <button type="button" className="btn btn-warning" data-bs-dismiss="modal" >Edit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditModal;
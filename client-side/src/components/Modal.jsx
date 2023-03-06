const Modal = ({open, note, onClose}) => {
  if(!open) return null;

  return(
      <div onClick={onClose} className="overlay">
        <div onClick={(e) => e.stopPropagation()}className="modalContainer">
          <div className="modalRight">
            <p className="closeBtn" onClick={onClose}>X</p>
          </div>
          <p className="note-header">{note.header}</p>
          <p className="note-content">{note.content}</p>
        </div>
      </div>
  )
}

export default Modal;
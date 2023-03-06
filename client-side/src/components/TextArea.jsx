const TextArea = (props) => {
  return(
    <div>
      <form>
        <h1>Note header</h1>
        <input className='note-header-input' value={props.headerValue} 
          onChange={props.handleInput}/>
        <h2>Note content</h2>
        <textarea rows='2' className='note-content-input' value={props.noteValue} 
          onChange={props.handleInput}></textarea>
        <button className="save-button" onClick={props.addNoteFunction}>SAVE NOTE</button>
      </form>
    </div>
  )
}

export default TextArea;
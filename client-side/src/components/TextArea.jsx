const TextArea = (props) => {
  return(
    // <div>
    //   <form>
    //     <h1>Note header</h1>
    //     <input className='note-header-input' value={props.headerValue} 
    //       onChange={props.handleInput}/>
    //     <h2>Note content</h2>
    //     <textarea rows='2' className='note-content-input' value={props.noteValue} 
    //       onChange={props.handleInput}></textarea>
    //     <button className="save-button" onClick={props.addNoteFunction}>SAVE NOTE</button>
    //   </form>
    // </div>
    <div className="my-form mt-5">
        <div className="mb-3 text-center">
          <label htmlFor="exampleFormControlInput1" className="form-label h3 fw-bold">Note header</label>
          <input type="text" className="form-control note-header-input" id="exampleFormControlInput1" placeholder="" value={props.headerValue} 
            onChange={props.handleInput}/>
        </div>
        <div className="text-center">
          <label htmlFor="exampleFormControlTextarea1" className="form-label h3 fw-bold">Example textarea</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={props.noteValue} 
            onChange={props.handleInput}></textarea>
        </div>
        <button className="btn btn-success form-control" onClick={props.addNoteFunction}>SAVE NOTE</button>
    </div>
    
  )
}

export default TextArea;
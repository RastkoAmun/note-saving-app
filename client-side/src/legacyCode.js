const addNote = (event) => {
  event.preventDefault();
  const newNoteObject = {
    header: newNoteHeader,
    content: newNoteContent
  }

  if(newNoteObject.header.length === 0){
    alert('Please give a header for your note.')
  }else if(newNoteObject.content.length === 0){
    alert('Please give content to your note.')
  }else{
    const newNotes = notes.concat(newNoteObject);
    setNotes(newNotes)
    localStorage.setItem('items', JSON.stringify(newNotes));
    setNewNoteHeader('');
    setNewNoteContent('');
  }
}
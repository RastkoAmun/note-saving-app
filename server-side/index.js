//--------------------------------- SERVER SETUP ----------------------------------------------
const express = require('express')
const app = express()
const cors = require('cors')
const { Pool } = require('pg')
const PORT = 8080

const pool = new Pool({
  connectionString: "postgres://postgres:elephant@localhost/cmpt372"
})

//Middlewares
app.use(express.json())
app.use(cors());

//----------------------------------- ROUTING -----------------------------------------------
//Getting all notes
app.get('/notes', async(req, res) => {
  try {
    const allNotes = await pool.query('SELECT * FROM notes ORDER BY id');
    res.json(allNotes.rows);
  }catch(err) {
    console.log(err.message)
  }
})

//Getting a specific note
app.get('/notes/:id', async(req, res) => {
  try {
    const id = req.params.id;
    const note = await pool.query('SELECT * FROM notes WHERE id=$1', [id]);
    res.json(note.rows);
  }catch(err) {
    console.log(err.message)
  }
})

//Posting a new note
app.post('/notes', async(req, res) => {
  try {
    const {title, noteBody, timeLastModified, important} = req.body;
    console.log(title)
    const query = 'INSERT INTO notes(title, noteBody, timeLastModified, important) VALUES ($1, $2, $3, $4) RETURNING *';
    const addedNote = await pool.query(query, [title, noteBody, timeLastModified, important]);
    res.json(addedNote.rows);
  }catch(err) {
    console.log(err.message)
  }
})

app.put('/notes/:id', async(req, res) => {
  try {
    const id = req.params.id;
    const {title, noteBody, timeLastModified, important} = req.body;
    const query = 'UPDATE notes SET title=$1, noteBody=$2, timeLastModified=$3, important=$4 WHERE id=$5 RETURNING *';
    const updatedNote = await pool.query(query, [title, noteBody, timeLastModified, important, id]);
    res.json(updatedNote.rows);
  }catch(err) {
    console.log(err.message)
  }
})

app.patch('/notes/:id', async(req, res) => {
  try{
    const id = req.params.id;
    const important = req.body.important;
    const query = 'UPDATE notes SET important=$1 WHERE id=$2 RETURNING *';
    const updatedNote = await pool.query(query, [important, id]);
    res.json(updatedNote.rows);
  }catch(err){
    console.log(err.message)
  }
})

app.delete('/notes/:id', async(req, res) => {
  try {
    const id = req.params.id;
    await pool.query('DELETE FROM notes WHERE id=$1', [id]);
    res.end();
  }catch(err) {
    console.log(err.message)
  }
})

//Listening PORT
app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
})
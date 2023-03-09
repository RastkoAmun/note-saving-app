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
    const {title, noteBody, timeLastModified} = req.body;
    console.log(title)
    const query = 'INSERT INTO notes(title, noteBody, timeLastModified) VALUES ($1, $2, $3) RETURNING *';
    const addedNote = await pool.query(query, [title, noteBody, timeLastModified]);
    res.json(addedNote.rows);
  }catch(err) {
    console.log(err.message)
  }
})

app.put('/notes/:id', async(req, res) => {
  try {
    const id = req.params.id;
    const {title, noteBody, timeLastModified} = req.body;
    const query = 'UPDATE notes SET title=$1, noteBody=$2, timeLastModified=$3 WHERE id=$4 RETURNING *';
    const updatedNote = await pool.query(query, [title, noteBody, timeLastModified, id]);
    res.json(updatedNote.rows);
  }catch(err) {
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
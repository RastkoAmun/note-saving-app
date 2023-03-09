const express = require('express')
const app = express()
const cors = require('cors')
const { Pool } = require('pg')
const PORT = 8080

const pool = new Pool({
  connectionString: "postgres://postgres:elephant@localhost:cmpt-372"
})

//Middlewares
app.use(express.json())
app.use(cors());

app.get('/notes', (req, res) => {
  try {
    
  }catch(err) {
    console.log(err.message)
  }
})

app.get('/notes:id', (req, res) => {
  try {
    
  }catch(err) {
    console.log(err.message)
  }
})

app.post('/notes', (req, res) => {
  try {
    
  }catch(err) {
    console.log(err.message)
  }
})

app.put('/notes/:id', (req, res) => {
  try {
    
  }catch(err) {
    console.log(err.message)
  }
})

app.delete('/notes/:id', (req, res) => {
  try {
    
  }catch(err) {
    console.log(err.message)
  }
})


app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
})
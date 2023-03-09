-- Just for commands reference --
CREATE TABLE notes(
  id SERIAL PRIMARY KEY,
  title VARCHAR(255),
  noteBody VARCHAR(255),
  timeLastModified VARCHAR(255)
)

SELECT * FROM notes;
INSERT INTO notes(title, noteBody, timeLastModified) VALUES ($1, $2, $3);
DELETE FROM notes WHERE id = 2;
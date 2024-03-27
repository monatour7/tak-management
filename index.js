const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get('/tasks', async (req, res) => {
  try {
    const tasks = await db.query('SELECT * FROM tasks');
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/tasks', async (req, res) => {
    try {
      const { title, description, status } = req.body;
      const result = await db.query('INSERT INTO tasks (title, description, status) VALUES ($1, $2, $3) RETURNING *', [title, description, status]);
      res.status(201).json(result[0]);
    } catch (err) {
      console.error('Error creating task:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });

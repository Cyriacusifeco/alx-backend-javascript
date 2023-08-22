const express = require('express');
const countStudents = require('./3-read_file_async');
const path = require('path');

const databasePath = process.argv[2]; // Get the database file path from command-line arguments

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!\n');
});

app.get('/students', async (req, res) => {
  try {
    // Use the default path if databasePath is not provided
    const defaultDatabasePath = path.join(__dirname, 'database.csv');
    const studentInfo = await countStudents(databasePath || defaultDatabasePath);
    const responseText = `This is the list of our students\n${studentInfo}`;
    res.send(responseText);
  } catch (error) {
    res.status(500).send(error.message + '\n');
  }
});

app.listen(1245, () => {
  console.log('Server is running on port 1245');
});

module.exports = app;

import express from 'express';

const app = express();

app.get('/users', (req, res) => {
  return res.json([
    'Luiz',
    'Gustavo',
    'Diego',
    'Daniel'
  ]);
});

app.listen(3333);
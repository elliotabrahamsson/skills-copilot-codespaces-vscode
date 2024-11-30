// create web server
// create a route for comments
// create a route for comments/new
// create a route for comments/:id
// create a route for comments/:id/edit
// create a route for comments/:id/delete
// create a route for comments/:id/like

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Comments Page');
});

router.get('/new', (req, res) => {
  res.send('Create a new comment');
});

router.get('/:id', (req, res) => {
  res.send('View a comment');
});

router.get('/:id/edit', (req, res) => {
  res.send('Edit a comment');
});

router.get('/:id/delete', (req, res) => {
  res.send('Delete a comment');
});

router.get('/:id/like', (req, res) => {
  res.send('Like a comment');
});

module.exports = router;
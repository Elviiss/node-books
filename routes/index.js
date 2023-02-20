const express = require('express');
const router = express.Router();
const fs = require('fs');

const json_books = fs.readFileSync('./books.json', 'utf-8');
let booksjson = JSON.parse(json_books);


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/newbooks', function(req, res, next) {
  res.render('addbooks', { title: 'Add new books' });
});

router.post('/newbooks', (req, res, next) => {
  const { titulo, imagen, descripcion } = req.body;
  let newBook = {
    titulo: titulo,
    imagen: imagen,
    descripcion: descripcion
  }
  booksjson.push(newBook);
  console.log(newBook)

  const json_books = JSON.stringify(booksjson)

  fs.writeFileSync('./books.json', json_books, 'utf-8');
  res.redirect("/")
});

router.get('/books', function(req, res, next) {
  res.render('Books', { title: 'Books' });
});

module.exports = router;


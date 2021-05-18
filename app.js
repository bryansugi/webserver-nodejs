require('dotenv').config()
const express = require('express')
const hbs = require('hbs');


const app = express()
const port = process.env.PORT

//Handelebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/parciales', function(err) {});

//midelware, servir contenido estatico
app.use(express.static('public'))

/* app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Bryan suaza',
        titulo: 'Curso Nodejs'
    })
})


app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Bryan suaza',
        titulo: 'Curso Nodejs'
    })
})

app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'Bryan suaza',
        titulo: 'Curso Nodejs'
    })
}) */

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
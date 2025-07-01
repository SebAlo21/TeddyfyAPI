const express = require('express');
const cors = require('cors');
const productos = require('./productos.json');


// Server Configuration
const app = express()

//Cors
app.use(cors())


//Contenido
app.get('/api/productos',(req,res) => {
    res.json(productos)
});

//PORT
const PORT  = process.env.PORT || 3000;

app.listen(PORT,() => {
    console.log("Api ok")
})
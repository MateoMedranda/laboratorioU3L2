// Autor: Mateo Medranda
const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (_req,res) =>{
    res.send('Integración continua trabajando!!');
});

app.listen(PORT,()=>{
    console.log(`Servidor escuchando en el puerto: ${PORT}`);
});
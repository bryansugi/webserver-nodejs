const http = require('http')

http.createServer((req, res) => {

    console.log(req)

    /*  res.setHeader('Content-Disposition', 'attachment; filename=lista.csv')
     res.writeHead(200, { 'Content-Type': 'application/csv' }) */
    /*     res.write('id, nombre\n');
        res.write('1, Bryan\n');
        res.write('2, Maria\n');
        res.write('3, Juan\n'); */



    res.write('Hola mundo')
    res.end()
})

.listen(80)

console.log('Escuchando el puerto', 80)
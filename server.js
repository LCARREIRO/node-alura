import http from 'http';

const PORT = 3000;

const rotas = {
    "/": "Cuso de Node.js",
    "/livros": "Estou na rota livros",
    "/editora": "Estou na rota editoras"
};

const server = http.createServer((req, res) => {
    res.writeHead(200,{'Content-Type': 'text/plain'});
    res.end(rotas[req.url]);
});

server.listen(PORT, () => {
    console.log("servidor escutando");
});
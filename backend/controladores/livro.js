const { getTodosLivros, getLivroPorId, insereLivro } = require("../servicos/livro")

function getLivros(req, res) {
    try {
        const livros = getTodosLivros()
        res.send(livros)        
    } catch (error) {
        res.status(500).send(error.message)
    }
}

function getLivroById(req, res) {
    try {
        const id = req.params.id
        const livro =  getLivroPorId(id)
        res.send(livro)
    } catch (error) {
        res.status(500).send(error.message)
    }    
}

function addLivro(req, res) {
    try {
        const livro = req.body
        insereLivro(livro)
        res.status(201).send('Novo livro adicionado.')
    } catch (error) {
        res.status(500).send('Error ao adicionar livro.')
    }
}

module.exports = {
    getLivros,
    getLivroById,
    addLivro
}
const fs = require("fs")

const getTodosLivros = () => {
    return JSON.parse(fs.readFileSync("livros.json"))
}

const getLivroPorId = (id) => {
    const livros = getTodosLivros()
    const livrosFiltrados = livros.filter(livro => livro.id === id)
    return livrosFiltrados
}

const insereLivro = (livro) => {
    const livros = getTodosLivros()
    const novaLista = [... livros, livro]
    fs.writeFileSync("livros.json", JSON.stringify(novaLista))
}

module.exports = {
    getTodosLivros,
    getLivroPorId,
    insereLivro
}
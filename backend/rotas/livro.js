const { Router } = require("express")
const { getLivros, getLivroById, addLivro } = require("../controladores/livro")

const router = Router()


router.get('/', getLivros)

router.get('/:id', getLivroById)

router.post('/', addLivro)

router.patch('/', (req, res) => {
    res.send('Você fez uma requisição do tipo PATCH')
})

router.delete('/', (req, res) => {
    res.send('Você fez uma requisição do tipo DELETE')
})


module.exports = router

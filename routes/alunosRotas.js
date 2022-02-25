const express = require('express');
const router = express.Router();

const AlunoController = require('../controllers/AlunoController')

router.get('/formulario', AlunoController.formularioAluno)
router.get('/', AlunoController.listarAluno)
router.post('/cadastrarAluno', AlunoController.cadastrarAluno)
router.get('/deletarAluno/:id', AlunoController.deletarAluno)
router.get('/editarAluno/:id', AlunoController.updateAluno)
router.post('/editarAluno', AlunoController.updateAlunoPost)

module.exports = router;

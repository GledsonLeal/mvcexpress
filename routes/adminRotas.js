const express = require('express');
const router = express.Router();

const AdminController = require('../controllers/AdminController')

router.get('/', AdminController.inicialAdmin)
router.get('/registro', AdminController.registroAdmin)
router.post('/registroAdminPost', AdminController.registroAdminPost)
router.get('/lista', AdminController.listarAdmin)
router.get('/deletarAdmin/:id', AdminController.deletarAdmin)

module.exports = router;
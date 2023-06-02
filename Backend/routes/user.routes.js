// crear una parte con los rutas de los datos
const express = require('express')
const router = express.Router() //especifico que voy a usar de la libreria

//main archivo principal

const usercontroller = require('../controllers/user.controller')

/* (ruta de partida , metodo que vamos a utilizar) */
router.get('/users/', usercontroller.getAllUsers)
router.get('/users/:id', usercontroller.getUser)
router.post('/users/', usercontroller.createUser)
router.put('/users/:id', usercontroller.updateUser)
router.delete('/users/:id',usercontroller.deleteUser)
// "/" punto de partida

module.exports = router

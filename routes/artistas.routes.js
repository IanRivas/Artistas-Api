import express from 'express'
const router = express.Router()
import { crearArtista, verArtistas,verArtista,editarArtista,eliminarArtista } from '../controllers/artistas.controller.js'

router.post('/agregar', crearArtista)
router.get('/ver', verArtistas)
router.get('/ver/:id', verArtista)
router.put('/editar', editarArtista)
router.delete('/eliminar', eliminarArtista)


export default router
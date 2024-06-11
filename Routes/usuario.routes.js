import express from 'express'
import { UsuarioService } from '../Service/usuario.service.js'

const routerUsuario = express.Router()


routerUsuario
    .get('/', UsuarioService.getALL)

export default routerUsuario
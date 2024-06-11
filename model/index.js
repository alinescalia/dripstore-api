import { Sequelize } from "sequelize"

import { Produto } from "./produto.model.js"
import { Usuario } from "./usuario.model.js"
import { sequelize } from "../db/db.js"

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize
db.produto = Produto
db.usuario = Usuario

export default db;

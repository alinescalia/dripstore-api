import { BelongsToMany, Sequelize } from "sequelize"

import { Produto } from "./produto.model.js"
import { Usuario } from "./usuario.model.js"
import { sequelize } from "../db/db.js"
import { Perfil } from "./perfil.model.js"

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize
db.produto = Produto
db.usuario = Usuario
db.perfil = Perfil

db.perfil.belongsToMany(db.usuario, {
    through: "usuario_perfil"
});
db.usuario.belongsToMany(db.perfil, {
    through: "usuario_perfil"
});



export default db;

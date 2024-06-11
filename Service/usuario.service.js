import db from "../model/index.js";

const Usuario = db.usuario
export const UsuarioService = {
    getALL: async (req, res) => {

        const usuarios = await Usuario.findAll();
        return res.status(200).json(usuarios);
    }

}
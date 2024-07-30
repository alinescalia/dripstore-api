import db from "../model/index.js";

const Perfil = db.perfil

export const PerfilService = {
    getAll: async (req, res) => {
        try {
            const perfil = await Perfil.findAll();
            res.status(200).json(perfil)
        }
        catch (err) {
            console.log(err)
            res.status(500).send('Nao foi possivel carregar perfis')
        }
    },

    create: async (req, res) => {
        const perfil = req.body

        try {
            const newperfil = await Perfil.create(perfil)
            res.status(200).json({
                message: "Perfil Criado",
                data: perfil
            })
        }
        catch (err) {
            res.status(500).send('erro ao criar perfil')

        }

    }
}


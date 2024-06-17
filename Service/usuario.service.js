import db from "../model/index.js";

const Usuarios = db.usuario

export const UsuarioService = {
    getALL: async (req, res) => {

        try {
            const usuarios = await Usuarios.findAll();
            res.status(200).json(usuarios);
        }
        catch (err) {
            console.log(err)
            res.status(500).send('nao foi possivel carregar usuarios!')
        }
    },

    getbyid: async (req, res) => {

        const id = req.params.id

        try {
            const Usuario = await Usuarios.findByPk(id)

            if (Usuario) {
                res.status(200).json(Usuario)
            } else {
                res.status(404).json('Produto nao encontrado')
            }

        }
        catch (err) {
            console.log(err)
            res.status(500).send('Erro ao encontrar o produto')
        }
    },

    criaruser: async (req, res) => {

        const newUser = req.body


        try {
            const newUserbd = await Usuarios.create(newUser)
            res.status(201).json({
                message: 'Usuario criado com sucesso',
                data: newUserbd
            })
        }
        catch (err) {
            console.log(err)
            res.status(500).send('Erro ao criar Usuario')

        }

    },

    updateuser: async (req, res) => {
        const id = req.params.id
        const user = req.body

        try {
            const [afeectedrow, userbd] = await Usuarios.update(user, {
                where: { id: id },
                returning: true
            })

            if (!afeectedrow) {
                res.status(404).send('Usuario nao encontrado')
            } else {
                res.status(200).json({
                    message: 'Usuario atualizado',
                    usuario: userbd
                })
            }
        }
        catch (err) {
            console.log(err)
            res.status(500).send('Erro ao atualizar o usuario')

        }
    },

    delete: async (req, res) => {
        const id = req.params.id

        try {
            const usuario = await Usuarios.destroy({
                where: { id: id }
            })

            if (usuario) {
                res.status(200).send('Usuario deletado')
            } else {
                res.status(404).send('Usuario nao encontrado')
            }
        }
        catch (err) {
            console.log(err)
            res.status(500).send('Erro ao deletar usuario')
        }
    }



}
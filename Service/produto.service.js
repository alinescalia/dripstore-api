import db from "../model/index.js";


const Produto = db.produto

export const ProdutoService = {
    getALL: async (req, res) => {

        const produtos = await Produto.findAll();
        return res.status(200).json(produtos);
    },

    getbyID: async (req, res) => {

        const id = req.params.id
        const produto = await Produto.findByPk(id);

        if (!produto) {
            return res.status(404).json({
                message: `Produto id: ${id} nao encontrado!`
            })
        } else {
            return res.json(produto)
        }
    },

    create: async (req, res) => {

        //const { nome, descricao, desconto, preco, ativo, categoria, data_do_cadastro } = req.body
        const produto = req.body;


        try {
            const produtobd = await Produto.create(produto)
            res.json({
                message: 'NOVO PRODUTO CRIADO',
                newprod: produtobd

            })
        }
        catch (err) {
            console.log(err)
            console.log('Falha ao criar produto!')
            res.status(500).send('Erro ao criar produto')
        }
    },

    update: async (req, res) => {
        const produto = req.body;
        const id = req.params.id;

        try {
            const [rowcount, [produpdated]] = await Produto.update(produto, {
                where: {
                    id: id
                },
                returning: true
            })
            if (!produpdated) {
                res.status(200).send(`Produto id=${id} não existe!`)
            } else {

                res.status(200).json({
                    mensagem: 'Produto atualizado!',
                    data: produpdated
                })
            }

        }
        catch (ex) {
            console.log(ex)
            res.status(500).send('Produto nao pode ser atualizado!')
        }

    },
    delete: async (req, res) => {
        const id = req.params.id


        try {
            const prod = await Produto.destroy({
                where: {
                    id: id
                }

            })
            if (prod) {
                res.status(200).json({ message: `Produto id=${id} DELETADO` })
            }
            else {
                res.status(404).send(`Produto id=${id} NAO encontrado`)
            }
        }
        catch (err) {
            console.log(err)
            res.status(500).send('Erro ao deletar produto')
        }
    }
}

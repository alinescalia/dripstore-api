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
        }
    },

    create: async (req, res) => {

        //const { nome, descricao, desconto, preco, ativo, categoria, data_do_cadastro } = req.body
        const produto = req.body;


        try {
            const produtobd = await Produto.create(produto)
            res.send('Novo produto criado!').json(produtobd)
        }
        catch {
            console.log('Falha ao criar produto!')
            res.status(500).send('Erro ao criar produto')
        }
    },

    update: async (req, res) => {
        const produto = req.body;
        const id = req.params.id;

        try {
            const produpdated = await Produto.update(produto, {
                where: {
                    id: id
                }
            })
            res.status(200).json({
                mensagem: `Produto ${id} atualizado!`,
                data: produpdate
            }
            )

        }
        catch {
            res.status(500).send('Produto nao pode ser atualizado!')
        }

    }




}

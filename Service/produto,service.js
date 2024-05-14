import { Produto } from "../model/produto.model.js";

export const ProdutoService = {
    getALL: async (req, res) => {

        const produtos = await Produto.findAll();
        res.status(200).json(produtos);

    }
}
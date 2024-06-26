import { DataTypes } from "sequelize";
import { sequelize } from "../db/db.js";

export const Produto = sequelize.define('produtos', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false,

    },
    descricao: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    desconto: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    preco: {
        type: DataTypes.DECIMAL,
        allowNull: false,
    },
    ativo: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: true,
    },
    categoria: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    data_cadastro: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: new Date(),
    }

}, {
    timestamps: true, // Add this line to enable the default timestamp columns
    createdAt: 'data_cadastro', // Map 'createdAt' to 'data_cadastro'
    updatedAt: false // Disable 'updatedAt' column if you don't need it
});
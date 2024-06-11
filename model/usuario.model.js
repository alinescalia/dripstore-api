import { DataTypes } from "sequelize";
import { sequelize } from "../db/db.js";



export const Usuario = sequelize.define('usuario', {

    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    data_criacao: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: new Date(),
    },
    data_atualizacao: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: new Date(),
    },
}, {
    createdAt: 'data_criacao',
    updatedAt: 'data_atualizacao'
});


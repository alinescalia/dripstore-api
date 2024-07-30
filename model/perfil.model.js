import { DataTypes } from "sequelize";
import { sequelize } from "../db/db.js";

export const Perfil = sequelize.define('perfil', {
    codigo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    }

}, {
    timestamps: false,
    createdAt: false,
    updatedAt: false
}
)
import { Sequelize } from "sequelize";
import 'dotenv/config';


const seq = `postgresql://${process.env.PGUSER}:${process.env.PGPASSWORD}@${process.env.PGHOST}/${process.env.PGDATABASE}?sslmode=require`

console.log(seq)

export const sequelize = new Sequelize(seq)
export const connection = async (req, res) => {
    try {
        // metodo authenticate é o que tenta a conexao com o db
        await sequelize.authenticate();
        console.log("PostgreSQL conectado com sucesso!");
    } catch (err) {
        console.log('Erro ao conectar com o banco:', err);
    }
}

// sequelize.sync({ force: true })
//     .then(() => {
//         console.log('DROP e sincronizar o db');
//     })
//     .catch((error) => {
//         console.log('Erro ao sincronizar');

//     })
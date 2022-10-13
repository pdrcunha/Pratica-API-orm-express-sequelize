const sequelize = require("sequelize");
const database = require("../models");


class ArmasController {
    static async retornarTodasArmas(req, res) {
        try {
            const todasArmas = await database.paises.findAll({attributes: ['id_arma', 'nome',"tipo","fk_paies"]});
            return res.status(200).json(todasArmas);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
    static async retornaUmaArma(req, res) {
        const {id}=req.params
        try {
            const umaArma = await database.paises.findOne({
                where:{id: Number(id)},
                attributes: ['id', 'nome',"lado"]
            });
            return res.status(200).json(umaArma);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
}
module.exports = PaisesController;
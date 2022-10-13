const sequelize = require("sequelize");
const database = require("../models");


class PaisesController {
    static async retornarTodosPaises(req, res) {
        try {
            const todosPaises = await database.paises.findAll({attributes: ['id', 'nome',"lado"]});
            return res.status(200).json(todosPaises);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
    static async retornaUmPais(req, res) {
        const {id}=req.params
        try {
            const umPais = await database.paises.findOne({
                where:{id: Number(id)},
                attributes: ['id', 'nome',"lado"]
            });
            return res.status(200).json(umPais);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
    static async criarUmPais(req,res){
        const novoPaisDados=req.body;
        try {
            const novoPais = await database.paises.create(novoPaisDados)
            return res.status(200).json(novoPais);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
}
module.exports = PaisesController;
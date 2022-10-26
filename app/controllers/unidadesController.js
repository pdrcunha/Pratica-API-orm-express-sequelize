const database = require('../models')

class UnidadesController {
  static async pegaTodasUnidades(req, res){
    try {
      const todasUnidades = await database.Unidades.findAll();
      return res.status(200).json(todasUnidades);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
  static async unidadePorId(req, res){
    try {
      const {id}=req.params;
      const unidadeId = await database.Unidades.findOne({
        where:{id_unidade:id}
      });
      return res.status(200).json(unidadeId);  
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
  static async cadastrarUnidades(req, res){
    const dados=req.body;
    try {
      const cadastro = await database.Unidades.create(dados);
      return res.status(200).json("Cadastrado com sucesso");  
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
  static async updateUnidade(req, res){
    const dados=req.body;
    const {id}=req.params;
    try {
      const update = await database.Unidades.update(dados,{
        where:{id_unidade:id}
      });
      return res.status(200).json("Atualizado com sucesso");  
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
  static async unidadesTipos(req, res){
    const {tipo}=req.params;
    try {
      const unidadeTipos = await database.Unidades.findAll({
        where: {tipo:tipo}
      });
      return res.status(200).json(unidadeTipos);  
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
  static async deleteByID(req, res){
    const {id}=req.params;
    try {
      const unidadeDeletada = await database.Unidades.destroy({
        where:{id_unidade:id}
      });
      return res.status(200).json("Removido com sucesso");  
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = UnidadesController;
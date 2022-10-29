const database = require('../models')

class itensUnidadesController {
  static async pegaTodosItens(req, res){
    try {
      const todosItens = await database.ItensUnidades.findAll();
      return res.status(200).json(todosItens);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
  static async itensPorId(req, res){
    try {
      const {id}=req.params;
      const itensId = await database.ItensUnidades.findOne({
        where:{id_itensUnidades:id}
      });
      return res.status(200).json(unidadeId);  
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
  static async cadastrarItensUnidades(req, res){
    const dados=req.body;
    console.log(dados);
    try {
      const cadastro = await database.ItensUnidades.create(dados);
      return res.status(200).json("Cadastrado com sucesso");  
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
  static async updateItens(req, res){
    const dados=req.body;
    const {id}=req.params;
    try {
      const update = await database.ItensUnidades.update(dados,{
        where:{id_itensUnidades:id}
      });
      return res.status(200).json("Atualizado com sucesso");  
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
  static async itensTipos(req, res){
    const {tipo}=req.params;
    try {
      const itensTipo = await database.ItensUnidades.findAll({
        where: {tipo:tipo}
      });
      return res.status(200).json(itensTipo);  
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
  static async deleteByID(req, res){
    const {id}=req.params;
    try {
      const itenDeletado = await database.ItensUnidades.destroy({
        where:{id_itensUnidades:id}
      });
      return res.status(200).json("Removido com sucesso");  
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
  static async viewCadstroItem(req, res){
    try {
      res.render("itens/cadastrarItens");  
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = itensUnidadesController;
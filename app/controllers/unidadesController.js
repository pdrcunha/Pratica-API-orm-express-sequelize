
const model = require("../models");
class Unidades {
  static async todasUnidades(req,res) {
    try {
      const todasUnidades = await model.sequelize.models.Unidades.findAll();
     return res.status(200).send(todasUnidades);
    } catch (error) {
        return res.status(500).send(error.message);
    }
  }
}

module.exports = Unidades;
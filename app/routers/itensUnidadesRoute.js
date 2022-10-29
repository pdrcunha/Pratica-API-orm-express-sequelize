const { Router } = require('express')
const itensUnidadesController = require('../controllers/itensUnidadesController')
const router = Router();

router.get('/itens', itensUnidadesController.pegaTodosItens);
router.get('/cadastarItem', itensUnidadesController.viewCadstroItem);
router.get('/itens/:id', itensUnidadesController.itensPorId);
router.post('/cadastroItem', itensUnidadesController.cadastrarItensUnidades);
router.get('/itensTipo/:tipo', itensUnidadesController.itensTipos);
router.put('/cadastroItem/:id', itensUnidadesController.updateItens);
router.delete('/deletarItem/:id', itensUnidadesController.deleteByID);



module.exports = router
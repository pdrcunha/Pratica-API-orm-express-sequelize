const { Router } = require('express')
const UnidadesController = require('../controllers/unidadesController')

const router = Router()

router.get('/unidades', UnidadesController.pegaTodasUnidades);
router.get('/unidade/:id', UnidadesController.unidadePorId);
router.post('/cadastroUnidade', UnidadesController.cadastrarUnidades);
router.get('/unidadesTipo/:tipo', UnidadesController.unidadesTipos);
router.put('/cadastroUnidade/:id', UnidadesController.updateUnidade);
router.delete('/deletarUnidade/:id', UnidadesController.deleteByID);
// router.get('/pessoas/:id', UnidadesController.pegaUmaPessoa)
// router.post('/pessoas', UnidadesController.criaPessoa)
// router.put('/pessoas/:id', UnidadesController.atualizaPessoa)
// router.delete('/pessoas/:id', UnidadesController.apagaPessoa)


module.exports = router
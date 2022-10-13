const Router=require('express');
const PaisesController = require('../controller/paisesControler');

const router=Router();

router.get("/todospaises",PaisesController.retornarTodosPaises);
router.get("/pais/:id",PaisesController.retornaUmPais);
router.post("/novopais/",PaisesController.criarUmPais);
module.exports=router;
const { Router } = require("express");
const Unidades = require("../controllers/UnidadesController");

const router = Router();

router.get("/todasUnidades",Unidades.todasUnidades)
module.exports = router;
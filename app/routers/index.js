const { Router } = require("express");
const unidades = require('./unidadesRoute');
const router = Router();

router.use(unidades);

module.exports = router;
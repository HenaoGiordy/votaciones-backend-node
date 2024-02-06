const router = require('express').Router();

router.use('/estudiantes', require('./api/estudiantes'));

module.exports = router;
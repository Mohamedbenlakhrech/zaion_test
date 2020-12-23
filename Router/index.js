const router = require('express').Router();
// Api routes
const api = require('./api_routes');
router.use('/api', api);

module.exports = router;
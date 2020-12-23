const router = require('express').Router();

const ApiCtrl = require('../Controller/ApiCtrl');

// Get Path
router.route('/shortestPath')
  .get(ApiCtrl.getPath);

module.exports = router;
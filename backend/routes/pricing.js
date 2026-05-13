const express = require('express');
const router = express.Router();
const pricingController = require('../controllers/pricingController');

router.get('/', pricingController.getAllPricing);
router.get('/:id', pricingController.getPricing);
router.post('/', pricingController.createPricing);
router.put('/:id', pricingController.updatePricing);
router.delete('/:id', pricingController.deletePricing);

module.exports = router;

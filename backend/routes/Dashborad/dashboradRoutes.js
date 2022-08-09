const { category_add } = require('../../controller/Dashborad/categoryController');
const { admin_middleware } = require('../../middleware/authMiddleware');

const router = require('express').Router();

// category route
router.post('/add-category',admin_middleware, category_add);


module.exports = router;

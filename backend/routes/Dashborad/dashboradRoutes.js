const { category_add, category_get } = require('../../controller/Dashborad/categoryController');
const { admin_middleware } = require('../../middleware/authMiddleware');

const router = require('express').Router();

// category route
router.post('/add-category',admin_middleware, category_add);
router.get('/get-category',admin_middleware, category_get);


module.exports = router;

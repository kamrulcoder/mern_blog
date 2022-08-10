const { category_add, category_get, category_delete } = require('../../controller/Dashborad/categoryController');
const { admin_middleware } = require('../../middleware/authMiddleware');

const router = require('express').Router();

// category route
router.post('/add-category',admin_middleware, category_add);
router.get('/get-category',admin_middleware, category_get);
router.delete('/delete-category/:categoryId',admin_middleware, category_delete);


module.exports = router;

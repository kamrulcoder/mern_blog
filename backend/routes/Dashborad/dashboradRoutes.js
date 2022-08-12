const { category_add, category_get, category_delete, category_edit, category_update } = require('../../controller/Dashborad/categoryController');
const { admin_middleware } = require('../../middleware/authMiddleware');

const router = require('express').Router();

// category route
router.post('/add-category',admin_middleware, category_add);
router.get('/get-category',admin_middleware, category_get);
router.delete('/delete-category/:categoryId',admin_middleware, category_delete);
router.get('/edit-category/:categorySlug',admin_middleware, category_edit);
router.patch('/update-category/:categoryId',admin_middleware, category_update);


module.exports = router;

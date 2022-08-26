const { get_tag_category, add_artical, get_artical } = require('../../controller/Dashborad/articalController');
const { category_add, category_get, category_delete, category_edit, category_update } = require('../../controller/Dashborad/categoryController');
const { tag_add, tag_get, tag_delete, tag_update, tag_edit } = require('../../controller/Dashborad/tagController');
const { admin_middleware } = require('../../middleware/authMiddleware');

const router = require('express').Router();

// category route start here 
router.post('/add-category',admin_middleware, category_add);
router.get('/get-category',admin_middleware, category_get);
router.delete('/delete-category/:categoryId',admin_middleware, category_delete);
router.get('/edit-category/:categorySlug',admin_middleware, category_edit);
router.patch('/update-category/:categoryId',admin_middleware, category_update);
// category route end here

// tag all routes start here
router.post('/add-tag',admin_middleware, tag_add);
router.get('/get-tag',admin_middleware, tag_get);
router.delete('/delete-tag/:tagId',admin_middleware, tag_delete);
router.get('/edit-tag/:tagSlug',admin_middleware, tag_edit);
router.patch('/update-tag/:tagId',admin_middleware, tag_update);

// tag all routes end  here 


// Article route start here ....
router.get('/get-tag-category',admin_middleware, get_tag_category);
router.post('/add-artical',admin_middleware, add_artical);
router.get('/get-artical',admin_middleware, get_artical);


// Article route end  here .... 



module.exports = router;

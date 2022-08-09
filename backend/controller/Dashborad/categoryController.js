const categoryModel = require('../../models/categoryModel');
module.exports.category_add = async (req, res) => {
    const { categoryName, categoryDes } = req.body;

    const error = {};

    if (!categoryName) {
        error.categoryName = 'Please provide category name';
    }
    if (!categoryDes) {
        error.categoryDes = 'Please provide category description'
    }
    if (Object.keys(error).length == 0) {
        const categorySlug = categoryName.trim().split(' ').join('-');
        try {
            const checkCategory = await categoryModel.findOne({ categorySlug });
            if (checkCategory) {
                res.status(404).json({
                    errorMessage: {
                        error: 'Already added category'
                    }
                })
            } else {
                await categoryModel.create({
                    categoryName: categoryName.trim(),
                    categorySlug,
                    categoryDes
                })
                res.status(201).json({
                    successMessage: 'Category add successfull'
                })
            }
        } catch (error) {
            res.status(500).json({
                errorMessage: {
                    error: 'Internal server error'
                }
            })
        }
    } else {
        res.status(400).json({ errorMessage: error });
    }
}
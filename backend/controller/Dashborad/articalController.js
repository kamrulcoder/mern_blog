const categoryModel = require("../../models/categoryModel");
const tagModel = require("../../models/tagModel");
const articleModel = require('../../models/articleModel');

const formidable = require("formidable");
const { article_validator } = require("../../validator/validator");
const fs = require('fs');

module.exports.get_tag_category = async (req, res) => {
  try {
    const allTag = await tagModel.find({});
    const allCategory = await categoryModel.find({});
    res.status(200).json({ allCategory, allTag });
  } catch (error) {
    res.status(500).json({
      errorMessage: {
        error: "Internal server error",
      },
    });
  }
};

module.exports.add_artical = (req, res) => {
  const formDataHendle = formidable({
    multiples: true,
  });

  const { adminId, adminName } = req;

  formDataHendle.parse(req, (err, fields, files) => {
    if (!err) {
      const { title, category, slug, tag, text } = fields;
      const validate = article_validator(fields, files);

      if (validate.validated) {

        // Slug catagory/tag convert  simple text 
        const categoryName = category.split('-').join(' ');
        const tagName = tag.split('-').join(' ');

        files.image.originalFilename = Date.now() + files.image.originalFilename;  // file  originalFilename changed from current time 
        const uploadPath = __dirname + `../../../../frontend/public/articalImage/${files.image.originalFilename}`;  // Upload path declaired

        fs.copyFile(files.image.filepath, uploadPath, async (error) => {
            if (error) {
                res.status(400).json({
                    errorMessage: {
                        imageUpload: 'Image upload file'
                    }
                })
            }else {
                try {
                    await articleModel.create({
                        adminId,
                        adminName,
                        title,
                        slug,
                        category: categoryName,
                        category_slug: category,
                        tag: tagName,
                        tag_slug: tag,
                        articleText: text,
                        image: files.image.originalFilename
                    })
                    res.status(201).json({
                        successMessage: 'Article add successfull'
                    })
                } catch (error) {
                    console.log(error.message)
                    res.status(500).json({
                        errorMessage: {
                            error: 'Internal server error'
                        }
                    })
                }
            }
        })

      } else {
        res.status(400).json({ errorMessage: validate.error });
      }
    }
  });
};

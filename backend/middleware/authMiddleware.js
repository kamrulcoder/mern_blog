const jwt = require('jsonwebtoken');
module.exports.admin_middleware = async (req, res, next) => {

    const { blog_token } = req.cookies;

    if (!blog_token) {
        res.status(409).json({ errorMessage: { error: 'Please login first' } })
    } else {
        const deCodeToken = await jwt.verify(blog_token, process.env.SECRET);
        req.adminId = deCodeToken.id;
        req.adminName = deCodeToken.name;
        req.role = deCodeToken.role
        next();
    }
}
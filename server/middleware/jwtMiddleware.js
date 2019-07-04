const jwt = require("jsonwebtoken");
const { SECURED_KEY } = require('../config/configure');

module.exports = function(options) {
    options = options || {}

    return function(req, res, next) {
        if (req.url === "/user/login" || req.url === "/user/register") {
            next();
            return;
        }

        const token = req.body.token || req.query.token || req.headers["x-access-token"];

        if (token) {
            jwt.verify(token, SECURED_KEY, function(err, decoded) {
                if (err) {
                    return res.status(401).json({ errorMsg: "Token invalid" });
                }
                req.decoded = decoded;
                next();
            });
        } else {
            return res.status(401).json({ errorMsg: "Token invalid" });
        }
    }
}

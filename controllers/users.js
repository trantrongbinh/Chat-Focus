const User = require("../models/user");
const jwt = require("jsonwebtoken");
const { SECURED_KEY } = require('../config/configure');

exports.register = async function(req, res) {
    const { name, email, password } = req.body.user;

    User.findOne({ email }, function(e, doc) {
        if (doc) {
            return res.status(422).json({ msg: "The user already exists" });
        }
        const user = new User({ name, email, password });

        user.save(function(error, doc) {
            if (error || !doc) {
                return res.status(500).json({ msg: "Internal server error" });
            }
            const { name, email, _id } = doc;
            // Stay logged in for 7 days
            const token = jwt.sign({ id: _id }, SECURED_KEY, {
                expiresIn: 60 * 60 * 24 * 7
            });

            return res.status(200).json({ token, data: { name, email, id: _id } });
        });
    });
}

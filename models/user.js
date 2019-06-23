const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = Schema(
    {
        name: {
            type: String,
            default: '',
            required: true,
        },
        email: {
            type: String,
            default: '',
            lowercase: true,
            unique: true,
            required: true,
        },
        password: {
          type: String,
          default: '',
          required: true,
        }
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('User', UserSchema);

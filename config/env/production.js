'use strict';

module.exports = {
    db: process.env.MONGODB_URL,
    SITE_NAME: process.env.SITE_NAME,
    SECURED_KEY: process.env.SECURED_KEY,
    API_KEY: process.env.API_KEY
};

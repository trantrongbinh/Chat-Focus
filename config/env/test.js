'use strict';

module.exports = {
    db: process.env.MONGODB_URL || 'mongodb://localhost:27017/bkfa_chat_test',
    SITE_NAME: process.env.SITE_NAME || 'Bkfa-System-Chat',
    SECURED_KEY: process.env.SECURED_KEY || 'bkfa-ttb',
    API_KEY: 'api_key'
};

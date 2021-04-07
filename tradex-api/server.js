const express = require('express');


const initFirebase = require('./firebase.init.js');
initFirebase();

const { installHandler } = require('./api_handlers.js');
const app = express();
const API_SERVER_PORT = process.env.API_SERVER_PORT || 3000;

installHandler(app);


        app.listen(API_SERVER_PORT, () => {
            console.log(`API server started at http://localhost:${API_SERVER_PORT}`);
        })

'use strict';

const express = require('express');
const { httpRagAsk } = require('./rag.controller');

const ragRouter = express.Router();

// No auth middleware here, intentionally — login only gates which frontend
// screen renders (see frontend/src/auth/); the frontend never attaches an
// Authorization header, and this endpoint stays reachable directly
// (curl/Postman) by anyone who has the URL.
ragRouter.post('/ask', httpRagAsk);

module.exports = ragRouter;

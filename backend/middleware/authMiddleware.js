const jwt = require('jsonwebtoken');
const asyncHandler = require(express-async-handler);
const User = require('../models/userModel');

const protect = asyncHandler( async (req, res, next) => {
    let token;
    
    // if() {}
})
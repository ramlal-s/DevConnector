const jwt = require('jsonwebtoken');
const config = require('çonfig');

module.export = function(req,res,next){
    // get token from header
    const token = req.header('x-auth-header');

    // check if no token
    if(!token){
        return res.status(401).json({msg: 'no token. Access denied'});
        }
    // verify token

    try{
        const decoded = jwt.verify(token, config.get('jwtSecret'));
        req.user = decoded.user;
        next();

    }catch(err){
        res.status(401).json({msg: 'Token not valid'});
    }
};
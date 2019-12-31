const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator/check');

//@route    GET api/users
//@desc     Test route
//@access   Public

router.post('/', [
    check('name', 'Name is required').not().isEmpty(),
    check('email','please include a valid email').isEmail(),
    check('password','please enter a password with 6 or more chars').isLength({min:6})
],
(req,res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }

    const {name,email,password} = req.body;
    
    // see if user exists

    // Get users gravatar

    //Encrypt password

    //Return jsonwebtoken


    console.log(req.body);
    res.send('user route')
});

module.exports = router;
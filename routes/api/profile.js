const express = require('express');
const router = express.Router();
const auth = require('');

//@route    GET api/profile/me
//@desc     get current users
//@access   Private

router.get('/', (req,res)=>{
    try{

    }catch(err){
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

module.exports = router;
var express = require('express');
var router = express.Router();
var {
    createToken,
    decodeToken
} = require('../libs/token.js')

/* GET home page. */
router.post('/login', function (req, res, next) {
    res.append('Access-Control-Allow-Origin', "*");
    let {
        password,
        username
    } = req.body;
    let token = createToken({
        // 一般只需要加密用户名就可以
        username,
        password
    })
    res.send({
        token
    });
});

router.post('/autologin', function (req, res, next) {
    res.append('Access-Control-Allow-Origin', "*");
    let {
        token
    } = req.body;
    let {
        password,
        username
    } = decodeToken(token)
    res.send({
        password,
        username
    });
});

module.exports = router;

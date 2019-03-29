var express = require('express');
var router = express.Router();

/* GET users listing. */
// 处理前端发送过来的登录信息，并且响应结果
// 建议router.post跟前端ajax是要匹配的
router.all('/login', function(req, res, next) {
  let {
    inputEmail,
    inputPassword
  } = req.body;
  console.log(req.body);
  if(inputEmail==111111&&inputPassword==222222){
    res.send('success');
  }else{
    res.send('failure');
  }
  
});

module.exports = router;

var express = require('express');
var router = express.Router();
var awsRds = require('./awsRds')

router.use('/awsRds',awsRds)

router.get('/' , (req , res) => {
    res.send('라우팅 연결 성공')
})

module.exports = router;
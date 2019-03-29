// 给dashboard.html提供数据路由

var express = require('express');
var router = express.Router();

// 引入数据库的操作封装文件
var db = require('../libs/pool.js');

/* GET users listing. */
// 处理前端发送过来的登录信息，并且响应结果
// 建议router.post跟前端ajax是要匹配的
router.all('/chart', function (req, res, next) {
    db('select * from students', null, (data) => {
        console.log(data);
        // 组装x轴数据
        let name = [];
        data.forEach(element => {
            name.push(element.name)
        });

        // 组装y轴的数据
        let ages = [];
        data.forEach(element => {
            ages.push(element.age)
        });


        res.json({
            title: {
                text: 'ECharts 入门示例'
            },
            tooltip: {},
            legend: {
                data: ['销量']
            },
            xAxis: {
                data: name
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: ages
            }]
        })
    })
});

module.exports = router;
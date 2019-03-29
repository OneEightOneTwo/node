// 导出模块
module.exports = (function () {
    return {
        add(a, b) {
            return a + b
        },
        multi(a, b) {
            return a * b
        },
        author: require('./lib').author
    }
})();
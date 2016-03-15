module.exports = {
    Index: function(router) {
        router.get('/index', function *(next) {
            this.body = 'hello word11';
        });
    }
}
const proxy = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        proxy("clientes", {
            target: "http://localhost:8080/api/",
            secure: false,
            changeOrigin: true
        })
    );
}
const proxy = require("http-proxy-middleware");
module.exports = function (app) {
    app.use(proxy("/jx",{
                target: "http://127.0.0.1",
                changeOrigin: true,
                pathRewrite: {
                    "^/jx": ""
                }
            }
        )
    )
}
// module.exports = function(app) {
//     app.use(
//       proxy('/api', {
//         target: 'http://localhost:5000',
//         changeOrigin: true,
//       })
//     )
//   }
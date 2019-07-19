const proxy = require("http-proxy-middleware");
// module.exports = function (app) {

// }
// module.exports = function(app) {
//     app.use(
//       proxy('/api', {
//         target: 'http://localhost:5000',
//         changeOrigin: true,
//       })
//     )
//   }
module.exports = function (app) {
    app.use("/jiuxian", proxy({
        target: "https://m.jiuxian.com",
        changeOrigin: true,
        pathRewrite: {
            "^/jiuxian": ""
        }
    }))


    app.use("/mmember", proxy({
        target: "https://mmember.jiuxian.com",
        changeOrigin: true,
        pathRewrite: {
            "^/mmember": ""
        }
    }))

    //热门搜索接口
    app.use("/mlist", proxy({
        target: "https://mlist.jiuxian.com",
        changeOrigin: true,
        pathRewrite: {
            "^/mlist": ""
        }
    }))

    app.use("/jx", proxy({
        target: "http://127.0.0.1",
        changeOrigin: true,
        pathRewrite: {
            "^/jx": ""
        }
    }))

}


// https://mmember.jiuxian.com/address/getRegionList?province_id=3
// https://m.jiuxian.com/m_v1/promote/qgajax.do?t=1562724773679&pagenum=1&tabnum=1
//https://mlist.jiuxian.com/m_v1/search/getHotKeyword? jsoncallback=jQuery16206308000392189062_1563024437803&_=1563024439540

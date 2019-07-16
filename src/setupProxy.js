const proxy=require("http-proxy-middleware")
module.exports=function(app){
    app.use("/jiuxian",proxy({
        //https://mmember.jiuxian.com
        // target:"https://mmember.jiuxian.com",
        target:"https://m.jiuxian.com",
        changeOrigin:true,
        pathRewrite:{
            "^/jiuxian":""
        }
    }));
    app.use("/jiuxiany",proxy({
        //https://mmember.jiuxian.com
        // target:"https://mmember.jiuxian.com",
        // target:"http://127.0.0.1",
        target:"https://mmember.jiuxian.com",
        changeOrigin:true,
        pathRewrite:{
            "^/jiuxiany":""
        }
    }))
}
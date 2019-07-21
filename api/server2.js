const express = require("express");
const bodyParser = require("body-parser");
const db = require("./module/db");
const app = express();
app.use(bodyParser.json());
app.all("*", function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    // 允许头部信息当中包含content-type属性
    res.header("Access-Control-Allow-Headers", "content-type");
    res.header("Access-Control-Allow-Methods", "DELETE,PUT");
    next();
})
// token
// 注册用户
app.post("/user", function (req, res) {
    db.insertOne("user", {
        username: req.body.username,
        password: req.body.password
    }, function (err, results) {
        res.json({
            ok: 1,
            msg: "成功"
        })
    })
})
// 登录
app.post("/userlog", function (req, res) {
    db.findOne("user", {
        username: req.body.username,
        password: req.body.password
    }, function (err, results) {
        if (results) {
            res.json({
                ok: 1,
                msg: "成功"
            })
        } else {
            res.json({
                ok: -1,
                msg: "账号或密码错误"
            })
        }

    })
})
// 添加商品至购物车
app.post("/addCar", function (req, res) {
    // 
    const goods = req.body;
    const username = goods.username || 'root';
    db.findOne("CarList", {
        username,
        id: goods.id
    }, function (err, results) {
        if (!results) {
            goods.num = goods.num || 1;
            db.insertOne("CarList", {
                ...goods
            }, function (err, results) {
                res.json({
                    ok: 1,
                    msg: "成功"
                })
            })
        } else {
            db.updateOneById("CarList", results._id, {
                $inc: { num: 1 }
            }, function (err, up) {
                res.json({
                    ok: 2
                })
            })
        }
    })
})

// 获取购物车
app.get("/Car", function (req, res) {

    db.find("CarList", {
        "username": req.query.username,
    }, function (err, contextList) {
        if (err) {
            res.send({
                ok: -1,
                msg: "网络连接错误"
            })
        } else {
            res.send({
                ok: 1,
                msg: "成功",
                contextList
            })
        }
    })
});

//  全选
app.put("/allChangecar", function (req, res) {
    db.updateAllUp("CarList", {
        "username": req.body.user,
    }, { $set: { 'choice': req.body.choice } }
        , function (err, result) {
            res.json({
                ok: 1,
                msg: "更新成功"
            })
        })
});
// 单选
app.put("/changecar", function (req, res) {

    db.updateOneById("CarList", req.body.id,
        { $set: { choice: req.body.type } }
        , function (err, result) {
            res.json({
                ok: 1,
                msg: "更新成功"
            })
        })
});
// 商品添加减
app.put("/changeNum", function (req, res) {
    db.findOneById("CarList", req.body.id, (err, con) => {
        if (con.num >= 1 || req.body.type === 1) {
            db.updateOneById("CarList", req.body.id,
                { $inc: { num: req.body.type } }
                , function (err, result) {
                    res.json({
                        ok: 1,
                        msg: "更新成功"
                    })
                })
        } else if (req.body.type === -1) {
            db.updateOneById("CarList", req.body.id,
                { $set: { num: 0 } }
                , function (err, result) {
                    res.json({
                        ok: 1,
                        msg: "更新成功"
                    })
                })
        }
    })
});


// 删除商品
app.delete("/Car", function (req, res) {
    db.deleteOneById("CarList", req.body.id, function (err, results) {
        res.json({
            ok: 1,
            msg: "删除成功"
        })
    })
})
// 计算购物车
app.delete("/Carjs", function (req, res) {
        db.delete("CarList",{
            username: req.body.user,
            choice: true
        },function(err,con){
            if (!err) {
                res.json({
                    ok: 1,
                    msg: "购买成功"
                })
            } else {
                res.json({
                    ok: -1,
                    msg: "购买失败"
                })
            }
        })
})

app.listen(80, function () {
    console.log("express");
})
module.exports.getNowTime=function() {
    var nowTime = new Date();
    var timeStr = nowTime.getFullYear()+"-"+
        (nowTime.getMonth()+1).toString().padStart(2,"0")+"-"+
        nowTime.getDate().toString().padStart(2,"0")+ " "+
        nowTime.getHours().toString().padStart(2,"0")+":"+
        nowTime.getMinutes().toString().padStart(2,"0")+":"+
        nowTime.getSeconds().toString().padStart(2,"0");
    return timeStr;
}
/*
* res:响应对象
* ok:返回的编码 -1，失败
* msg:消息*/
module.exports.json = function (res,ok=-1,msg="网络连接错误") {
    res.json({
        ok,
        msg
    })
}
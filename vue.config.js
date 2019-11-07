const user = require('./src/data/user.json')
const list = require('./src/data/list.json')

const fs = require('fs')

const bodyparser = require('body-parser')
module.exports = {
    lintOnSave: false,
    devServer: {
        open: true,
        before(app) {
            /**
             * 登陆校验
             * 
            */
            app.post("/login", bodyparser.json(), (req, res) => {
                let { username, userpwd } = req.body;
                let obj = user.find(item => item.name == username)
                if (!obj) {
                    res.send({
                        code: 0, msg: '无匹配项'
                    })
                } else {
                    if (obj.pwd == userpwd) {
                        res.send({
                            code: 1, msg: '登陆成功', data: obj, token: new Date() * 1
                        })
                    } else {
                        res.send({ code: 1, msg: '密码错误' })
                    }
                }
            }),
            /**
            * 注册校验
            * 
           */
                app.post('/zhuche', bodyparser.json(), (req, res) => {
                    let { username, userpwd } = req.body;

                    let obj = {
                        "id": new Date() * 1,
                        "name": username,
                        "nick": "双刹弹射",
                        "pwd": userpwd,
                        "avator": "/img/3.png",
                        "age": 18
                    }
                    if (user.find(item => item.name == username)) {
                        res.send({
                            code: 0,
                            msg: "用户存在",
                        })
                    } else {
                        user.push(obj)
                        fs.writeFileSync('./src/data/user.json', JSON.stringify(user))
                        res.send({
                            code: 1,
                            msg: '登陆成功',
                            data: obj,
                            token: new Date() * 1
                        })
                    }
                }),
                /**
                 * 请求页面数据
                 */
                app.get('/getlist',(req,res)=>{
                    res.send(list)
                }),

                /**
                 * 点赞
                 */
                app.get('/dianzan',(req,res)=>{
                    let {id}=req.query

                    let obj=list.find(item=>item.publishID==id)

                    if(obj.zanFlag){
                        obj.zanFlag=false
                        obj.zanNum--
                    }else{
                        obj.zanFlag=true
                        obj.zanNum++
                    }
                    res.send(list)
                }),
                /**
                 * 收藏
                 */
                app.get('/shochang',(req,res)=>{
                    let {id}=req.query

                    let obj=list.find(item=>item.publishID==id)

                    obj.store=!obj.store

                    res.send(list)
                }),
                /**
                 * 评论框显隐
                 */
                app.get('/pinglun',(req,res)=>{
                    let {id}=req.query

                    let obj=list.find(item=>item.publishID==id)

                    obj.flag=!obj.flag

                    res.send(list)
                }),
                /**
                 * 提交评论
                 */
                app.post('/pinglun2',bodyparser.json(),(req,res)=>{
                    let {id,txt,user}=req.body

                    let obj=list.find(item=>item.publishID==id)

                    let commentObj={
                            "userID":user.id,
                            "nick":user.nick,
                            "avator":user.avator,
                            "txt":txt  
                        }
                        obj.comment.push(commentObj)
                        obj.flag=false
                        res.send(list)
                })
        }
    }
}
const user = require('./src/data/user.json')

const fs = require('fs')

const bodyparser = require('body-parser')
module.exports = {
    lintOnSave: false,
    devServer: {
        open: true,
        before(app) {
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
                app.post('/zhuche', bodyparser.json(), (req, res) => {
                    let { username, userpwd } = req.body;

                    let obj = {
                        "id": new Date() * 1,
                        "name": username,
                        "nick": "双弹瓦斯",
                        "pwd": userpwd,
                        "avator": "/img/000.png",
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
                })
        }
    }
}
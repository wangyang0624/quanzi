const user=require('./src/data/user.json')

const bodyparser =require('body-parser')
module.exports={
    lintOnSave:false,
    devServer:{
        open:true,
        before(app){
            app.post("/login",bodyparser.json(),(req,res)=>{
                let {username,userpwd}=req.body;
                let obj=user.find(item=>item.name==username)
                if(!obj){
                     res.send({
                         code:0,msg:'无匹配项'
                     })
                }else{
                    if(obj.pwd==userpwd){
                        res.send({
                            code:1,msg:'登陆成功',data:obj,token:new Date()*1
                        })
                    }else{
                        res.send({code:1,msg:'密码错误'})
                    }
                }
            })
        }
    }
}
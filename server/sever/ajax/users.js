const express = require('express');

const pool = require('./../pool.js');

const router = express.Router();

router.get('/select',(req,res)=>{
	
	pool.query('select * from  product',(err,result)=>{
		if(err)throw err;
		res.send(result);
	});
});

// 登录
router.get('/login',(req,res)=>{
	let $uname = req.query.uname;
	let $upwd = req.query.upwd;
	pool.query('select * from users where uname = ? and upwd = ?',[$uname,$upwd],(err,result)=>{
		if(err)throw err;
		if(result.length==0){
			res.send("0");
		}else{
			res.send(result);
		}
		
		});
});
//注册
router.post("/userReg",(req,res)=>{
	let obj= req.body;
	let uname = obj.uname;
	pool.query('select * from users where uname = ?',[uname],(err,result)=>{
		if(err)throw err;
		if(result.length > 0){
			res.send({code:202});
		}else{
			pool.query('insert into users set ?',[req.body],(err,result)=>{
				if(err)throw err;
				res.send({code:200});
				});
			
		}
		});
	
});
//查询用户名 邮箱号 返回用户密码
router.post('/found',(req,res)=>{
	let uname= req.body.uname;
	let email=req.body.email;
	pool.query('select upwd from users where uname= ? and email=?',[uname,email],(err,result)=>{
		if(err)throw err;
		res.send(result);
	})
})

//查询id 返回用户信息
router.post('/login_uid',(req,res)=>{
	let user_id= req.body.user_id;
	pool.query('select user_id,uname,ustatus from users where user_id = ?',[user_id],(err,result)=>{
		if(err)throw err;
		res.send(result);	
	})
})
module.exports = router;
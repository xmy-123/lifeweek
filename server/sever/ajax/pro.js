const express  =  require('express');

const pool = require('./../pool.js');

const router  = express.Router();
// 头部关键词搜索
router.post('/search',(req,res)=>{
	let keyword = req.body.keyword;
	let mysql = `select * from product where title like'%${keyword}%'`;
	pool.query(mysql,(err,result)=>{
		if(err){throw err};
		if(result.length>=1){
			res.send(result);
		}else{
			res.send("0");
		}
		
	});
});
// 首页动态加载数据
router.get('/select',(req,res)=>{
	let mysql = `select product.product_id,categorys.cname,product.category,product.title,product.price,product.preferential_price,product.pic from  categorys join product on categorys.category_id = product.category_id`;
	pool.query(mysql,(err,result)=>{
		if(err)throw err;
		res.send(result);
	});
});

// 查询product_id的商品
router.post('/search_product_id',(req,res)=>{
	let $product_id = req.body.product_id;
	let mysql = `select * from product where product_id =${$product_id}`;
	pool.query(mysql,(err,result)=>{
		if(err){throw err};
			if(result.length>=1){
					res.send(result);
				}else{
					res.send("0");
				}
	});
});
//查询 category_id分类的商品信息
router.post('/search_category_id',(req,res)=>{
	let $category_id = req.body.category_id;
	let mysql = `select product.product_id,categorys.cname,product.category,product.title,product.price,product.preferential_price,product.pic from  categorys join product on categorys.category_id = product.category_id where product.category_id =${$category_id}`;
	pool.query(mysql,(err,result)=>{
		if(err)throw err;
		res.send(result);
	});
});

module.exports = router;
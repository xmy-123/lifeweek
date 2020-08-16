const express = require('express');

const pool = require('./../pool.js');

const router = express.Router();

router.get("/select",(req,res)=>{
	
	pool.query("select cname from categorys ",(err,result)=>{
		if(err){throw err};
		res.send(result);
	});
	
});
router.get("/product",(req,res)=>{
	
	pool.query("select title,pic,price from product LIMIT 0,4 ",(err,result)=>{
		if(err){throw err};
		res.send(result);
	});
	
});



module.exports = router;
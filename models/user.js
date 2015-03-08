var mongoose=module.parent.require("mongoose");
mailsetter=function(m){
return m.toLowerCase();
};
mailval=function(m){
	console.log("valid",m,s);
	return true;
};
user=new mongoose.Schema({
	created:{type:Date,default:Date.now},
	username:String,
	mail:{type:String,set:mailsetter},
	group:{type:Number,Default:1},
	blocked:{type:Boolean,Default:false},
	posts:{type:Number,Default:0},
	topics:{type:Number,Default:0},
	lastOnline:Date,
	followers:[Schema.Types.ObjectId]
});
user.path("mail").validate(mailval,"asdasd");
module.exports=user;
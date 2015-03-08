var mongoose=module.parent.require("mongoose");
Schema=mongoose.Schema;
var user=require("./user");
post=new Schema({
	created:{type:Date,default:Date.now},
	creator:Schema.Types.Mixed,
	tid:Number,
	rid:Number,
	vote:{type:Number,Default:0},
	voter:[Schema.Types.Mixed],
	state:{type:Number,Default:1},
	content:String,
	attachs:[Schema.Types.Mixed],
	provider:[Schema.Types.Mixed]
});
post.methods._vote=function(vote,cb){
	this.vote=this.vote+vote || vote;
	this.save(function(err,data){
		cb(err,data);
	})
};
module.exports=post;
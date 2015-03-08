var mongoose=module.parent.require("mongoose");
topic=new mongoose.Schema({
	created:{type:Date,default:Date.now},
	creator:Schema.Types.Mixed,
	cid:Number,
	vote:{type:Number,Default:0},
	voter:[Schema.Types.Mixed],
	state:{type:Number,Default:1},
	title:String,
	tags:[String],
	provider:[Schema.Types.Mixed]
});
module.exports=topic;
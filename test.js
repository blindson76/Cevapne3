var mongoose=require("mongoose")
var post=require("./models/post");
var user=require("./models/user");
post=mongoose.model("post",post,"posts");
user=mongoose.model("user",user,"users");
mongoose.connect("mongodb://localhost/test").connection.once("open",function(){
	post.findOne(function(err,data){
		data._vote(5,function(err,data){
			console.log(err,data);
		})
	})
});



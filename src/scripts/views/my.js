var myTpl=require("../templates/my.string");

SPA.defineView("my",{
	html:myTpl,
	plugins:["delegated"],
    styles:{
	    background:"transparent!important"
	},
	bindEvents:{
		show:function(){
		}
	},
	bindActions:{
		"tap.close":function(){
			this.hide();
		}
	}
})
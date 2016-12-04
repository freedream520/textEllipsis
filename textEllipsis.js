;(function($, window, document,undefined){
	$.fn.textEllipsis=function(options){
		return this.each(function(index, el) {
			create($(this),options)
		});
		
	}
	//初始化绑定
	$(function(){
		var ellipsis = $("[data-role='ellipsis']");
		if(typeof ellipsis!==undefined&& ellipsis!==null){
			
			ellipsis.each(function(index, el) {
				var options={
					"max":$(this).data("max")
				};
				create($(this),options);
			});
			
		}
	})
	//创建对象
	var create=function(ele, options){
		var text = new textObject(ele, options);
		text.init();

		return ele;//保持链式
	}
	//对象属性
	var textObject = function(ele,options){
		this.$element=ele;
		this.defaults={
			"max":20//限制的字数
		};
		this.option=$.extend({}, this.defaults, options);
	}
	//对象函数
	textObject.prototype={
		"init":function(){
			var t = this;
			t.setStyle();
			t.overText(t.$element.text())	
			
		},
		"overText":function(text){
			var content = text;//this.$element.text();
			if(content!=null&&content!=""&&content.length>3){
				if(content.length>this.option.max){
					content=content.substring(0,this.option.max-3)+"...";
					this.$element.text(content);
				}
			}
		},
		"setStyle":function(){
			this.$element.css({
				
				"overflow":"hidden",
				
			})
			return this;
		}
	}
})(jQuery,window,document);
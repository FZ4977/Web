$(document).ready(function(){
	$(".checkbox").click(function(){
		$("[name=checkedlist]").prop("checked",this.checked);
	});
	$(".del").click(function(){
		$(this).parents(".mian11").remove();
		zong();
	});
});
function jia(num){
		
		//价格
		var price=$(".price"+num).val();
		//数量加一
	
		var sum=parseInt($(".inp"+num).val())+1;
		
		//单个总价
		var count=parseFloat(price*sum);
		//赋值到数量
		$(".inp"+num).val(sum);
		$("#count"+num).html("￥"+count.toFixed(2));
		zong();
	};
	function jian(num){
		
		//价格
		var price=$(".price"+num).val();
		//数量加一
	
		var sum=parseInt($(".inp"+num).val())-1;
		if(sum<1){
			alert("不能再减了!");
			return;
		}
		//单个总价
		var count=parseFloat(price*sum);
		//赋值到数量
		$(".inp"+num).val(sum);
		$("#count"+num).html("￥"+count.toFixed(2));
		zong();
	};
	function zong(){
		var prices= $("[name=price]");
		var inp = $("[name=dd]");
		var zong=0;
		var shu=0;
		//循环得总价
		for( var i = 0;i<prices.length;i++){
			zong+=prices[i].value*inp[i].value;
		}
		//循环得数量
		for( var i = 0;i<inp.length;i++){
			shu+=parseInt(inp[i].value);
		}
		$("#shuliang").html(shu);
		$("#zongjia").html("￥"+zong.toFixed(2));
		
	}

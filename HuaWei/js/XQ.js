$(function() {
				$(".nav1").mouseover(function() {
					$(".nav3").show();
				}).mouseout(function() {
					$(".nav3").hide();
				});
				$(".cursor").toggle(function(){
					$(this).next().show();
					
				},function(){
					$(this).next().hide();
				})
			});
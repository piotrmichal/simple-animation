$(function() {
	var boxPosition = $("#box").offset();

	$(".control").click(function() {
		$("p").css("opacity", "0");
		$("#box").text("");
	})

	$("#up").click(function() {
		$("#box").animate({
			top: "-=50px"
		});
	});

	$("#left").click(function() {
		$("#box").animate({
			left: "-=50px"
		});
	});

	$("#right").click(function() {
		$("#box").animate({
			left: "+=50px"
		});
	});

	$("#down").click(function() {
		$("#box").animate({
			top: "+=50px"
		});
	});
	
})
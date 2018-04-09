$(document).ready(function(){
    // $("#flip").click(function(){
    //     $("#panel").slideToggle("slow");
    // });

    $(".slider a").on("click", function(e){
    	e.preventDefault();

    	var this_link = $(this),
    		slider = this_link.closest(".slider"),
    		panel = slider.find(".panel");

		panel.slideToggle("slow");

    });
}); //s1//

// $(document).ready(function(){
//     $("#flip2").click(function(){
//         $("#panel2").slideToggle("slow");
//     });
// });

// $(document).ready(function(){
//     $("#flip3").click(function(){
//         $("#panel3").slideToggle("slow");
//     });
// });

// $(document).ready(function(){
//     $("#flip4").click(function(){
//         $("#panel4").slideToggle("slow");
//     });
// });

// $(document).ready(function(){
//     $("#flip5").click(function(){
//         $("#panel5").slideToggle("slow");
//     });
// }); // sliding panels // 


$(document).ready(function(){
	$("#a").click(function(){
		$("#slide").addClass('info_slides_show');
		$("xButton").addClass("btn_close_show")
		$("#popIn").text("Schedule 2 drug. First time offenders face up to a year in prison and a $1,000 fine.")
	}) //start of drug grid//

	$("#xButton").click(function(){
 	$("#slide").removeClass('info_slides_show');
 	$(".hotspot").removeClass('hide_btn');
 });

});

$(document).ready(function(){
	$("#b").click(function(){
		$("#slide").addClass('info_slides_show');
		$("xButton").addClass("btn_close_show")
		$("#popIn").text("Schedule 1 drug. First time possession offenders are sentenced to 1 year in prison and a $5,000 fine.")
	})

	$("#xButton").click(function(){
 	$("#slide").removeClass('info_slides_show');
 	$(".hotspot").removeClass('hide_btn');
 });

});

$(document).ready(function(){
	$("#c").click(function(){
		$("#slide").addClass('info_slides_show');
		$("xButton").addClass("btn_close_show")
		$("#popIn").text("Schedule 1 drug. First time offenders with less than 25 grams face a maximum fine of $100.")
		$("#popIn").addClass("text_style"); //trying to add css to stuff on blue slide// 
	})

	$("#xButton").click(function(){
 	$("#slide").removeClass('info_slides_show');
 	$(".hotspot").removeClass('hide_btn');
 });

});

$(document).ready(function(){
	$("#d").click(function(){
		$("#slide").addClass('info_slides_show');
		$("xButton").addClass("btn_close_show")
		$("#popIn").text("Schedule 2 drug. If you have oxycontin without a prescription, you can face 1 to 5 years in prison.")
		$("#popIn").addClass("text_style");
	})

	$("#xButton").click(function(){
 	$("#slide").removeClass('info_slides_show');
 	$(".hotspot").removeClass('hide_btn');
 });

});

$(document).ready(function(){
	$("#e").click(function(){
		$("#slide").addClass('info_slides_show');
		$("xButton").addClass("btn_close_show")
		$("#popIn").text("Schedule 1 drug. Minimum sentence for possession is 5 years.")
		$("#popIn").addClass("text_style");
	})

	$("#xButton").click(function(){
 	$("#slide").removeClass('info_slides_show');
 	$(".hotspot").removeClass('hide_btn');
 });

});
$(document).ready(function(){
	$("#f").click(function(){
		$("#slide").addClass('info_slides_show');
		$("xButton").addClass("btn_close_show")
		$("#popIn").text("Schedule 3 or Schedule 5 drug, depending on amount of codeine. Sentence for posession for personal use is up to 1 year in jail.")
		$("#popIn").addClass("text_style");
	})

	$("#xButton").click(function(){
 	$("#slide").removeClass('info_slides_show');
 	$(".hotspot").removeClass('hide_btn');
 });

});


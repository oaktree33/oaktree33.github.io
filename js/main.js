$(document).ready(function() {
	function addContent(event) {
		$("#contentBox").empty();
		$("#contentBox").load(event.data.page, function(response, status, xhr) {
			if (status == "error") {
				alert("Error: " + xhr.status + " " + xhr.statusText);
			}
		});
	};

	//adding contents when respective menu items are pressed.
	$("#View").click(function() {
		$("#contentBox").empty();
		$("#contentBox").append('<embed src="./pdf/resume.pdf" style = "position:absoltue; width:100%; height:100%">');
	});
	$("#PP").click({page: "includehtml/pump.html"}, addContent);
	$("#Robartics").click({page: "includehtml/robartics.html"}, addContent);
	$("#HW").click({page: "includehtml/hotwheels.html"}, addContent);
	$("#Home").click({page: "includehtml/home.html"}, addContent);
	$("#contact").click({page: "includehtml/contact.html"}, addContent);
	
	//Setting Minium and maximum position of the contentbox
	$(window).resize(function(){
		if($(window).width()*0.2 > 200){
			$("#contentBox").css("left", "200px");
		}
		else if($(window).width()*0.2<100){
			$("#contentBox").css("left", "100px");
		}
		else{
			$("#contentBox").css("left", "20%");
		}
		
	});
	
	//initially adding home page.
	$("#contentBox").load("includehtml/home.html", function(response, status, xhr) {
			if (status == "error") {
				alert("Error: " + xhr.status + " " + xhr.statusText);
			}
	});
});

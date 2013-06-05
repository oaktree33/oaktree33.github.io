$(document).ready(function() {
	function addContent(event) {
		$("#contentBox").empty();
		$("#contentBox").load(event.data.page, function(response, status, xhr) {
			if (status == "error") {
				alert("Error: " + xhr.status + " " + xhr.statusText);
			}
		})
	};

	$("#View").click(function() {
		/*
		 $("#contentBox").load('./includehtml/resume.html', function(response, status, xhr){
		 if(status == "error"){
		 alert("Error: " + xhr.status + " " + xhr.statusText);
		 }
		 });
		 */
		$("#contentBox").empty();
		$("#contentBox").append('<embed src="./pdf/resume.pdf" style = "position:absoltue; width:100%; height:100%">');
	});
	$("#PP").click({page: "includehtml/pump.html"}, addContent);
	$("#Robartics").click({page: "includehtml/robartics.html"}, addContent);
	$("#HW").click({page: "includehtml/hotwheels.html"}, addContent);
});

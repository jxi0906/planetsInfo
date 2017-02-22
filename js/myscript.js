var pxml;
$(document).on('pagebeforeshow','#planet',function(){
    $.ajax({
        type: "POST",
        url: "./planets.xml",
        dataType: "xml",
        success: function(xml) {
            pxml = xml;
        },
        error: function (request,error) {
            alert('Network error has occurred!');
        }
    });
		
	$("#planet_mercury").click(function() {
		planetInfo(pxml, "Mercury");
	});
	$("#planet_venus").click(function() {
		planetInfo(pxml, "Venus");
	});
	$("#planet_earth").click(function() {
	console.log("earth clicked");
		planetInfo(pxml, "Earth");
	});
	$("#planet_mars").click(function() {
		planetInfo(pxml, "Mars");
	});
	$("#planet_jupiter").click(function() {
		planetInfo(pxml, "Jupiter");
	});
	$("#planet_saturn").click(function() {
		planetInfo(pxml, "Saturn");
	});
	$("#planet_uranus").click(function() {
		planetInfo(pxml, "Uranus");
	});
	$("#planet_neptune").click(function() {
		planetInfo(pxml, "Neptune");
	});
});

function planetInfo(xml, planet) {
	$(xml).find("PLANET").each(function() {
		if ($(this).find("NAME").text() == planet) {
		console.log(planet);
			$("#pname").html(planet);
			$("#pcolor").html($(this).attr("COLOR"));
			$("#pdist").html($(this).find("DISTANCE").text());
			$("#pradius").html($(this).find("RADIUS").text());
			$("#psatname").html("");
			$("#psatdist").html("");
			$(this).find("SATELLITE").each(function () {
				$("#psatname").append($(this).find("SNAME").text() + "<br>");
				$("#psatdist").append($(this).find("ORBIT").text() + "<br>");
			});
		}
	
	});
}
$(document).ready(function() {

    $('#fullpage').fullpage({
        sectionsColor: ["#8dd3c7", "#ffffb3", "#bebada", "#fb8072", "#80b1d3", "#fdb462", "#b3de69", "#fccde5", "#bc80bd", "#ffed6f", "#ccebc5", "#ffffb3", "#8dd3c7"],
        navigation: true,
		navigationPosition: 'right',
		navigationTooltips: ['Top page', 'Strings and Variables', '2', '3', '4', '5', '6', '7', 'Using Numbers', '2', '3', '4', '5']
    });

    $(".followup").hide();

    $(".clicker button").click(function() {
        const nextDiv = $(this).parent().next('.followup');
        // hide div that contains it and then show followup
        hinge( $(this).parent() );
        setTimeout(function() {
            nextDiv.slideDown("slow");
        }, 2000);
    });

    $("#weatherBut").click(function() {
        const name = $("#theName").val();
        const weather = $("#weather").val();
        $("#theName").val("");
        $("#weather").val("");
        console.log("Your name is " + name);
        console.log("The weather is " + weather);
        $("#fillWeather").text(`Hi, ${name}. I hear the weather is ${weather} where you are.`);
    });

});

// HINGE effect function, adapted from http://jsfiddle.net/TFfGL/117/
// http://stackoverflow.com/questions/12889603/make-animate-css-effects-work-onhover-and-onclick-with-jquery
function hinge(thing) {
    $(thing).addClass('animated hinge');
    $(thing).on('animationend mozanimationend webkitAnimationEnd oAnimationEnd msanimationend', function() {
	       $(thing).remove();
	});
}
// end HINGE

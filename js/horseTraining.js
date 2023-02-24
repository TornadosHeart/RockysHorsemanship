console.log("JavaScript is ready!");

$(document).ready(function() {
    console.log("jQuery is ready too!");
    //$(".carousel").carousel({ interval: 500 });
    $("#serviceDrop").hover(
        function(){
            $("#serviceOptions").show();
        }, function() {
            $("#serviceOptions").hide();
    });
    $("#aboutDrop").hover(
        function(){
            $("#aboutOptions").show();
        }, function() {
            $("#aboutOptions").hide();
    });
});
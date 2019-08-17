$(document).ready(function () {

    var actions = JSON.parse(localStorage.getItem("actions"));
    var username = localStorage.getItem("User");
    $("#username").html(username);
$.each( actions[0].Admin, function( key, value ) {
    

});
$.each( actions[0].Halls, function( key, value ) {
    $(".HallsLink").append('<a href="'+ value.split(' ').join('')+'">'+ value + '</a>');
});
$.each( actions[0].Users, function( key, value ) {
});
     
});
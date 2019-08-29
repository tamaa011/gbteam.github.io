$(document).ready(function () {
    var sideNavActions = JSON.parse(localStorage.getItem("sideNavActions"));
    var username = localStorage.getItem("User");
    $("#username").html(username);

$.each( sideNavActions[0].Admin, function( key, value ) {
    $(".adminlink").append('<a href="'+ value.split(' ').join('')+'.html">'+ value + '</a><hr>');
});

$.each( sideNavActions[0].Halls, function( key, value ) {
    $(".HallsLink").append('<a href="'+ value.split(' ').join('')+'.html">'+ value + '</a><hr>');
});

$.each( sideNavActions[0].Users, function( key, value ) {
    $(".userslink").append('<a href="'+ value.split(' ').join('')+'.html">'+ value + '</a><hr>');

});

$.each( sideNavActions[0].Other, function( key, value ) {
    $(".OtherLink").append('<a href="'+ value.split(' ').join('')+'.html">'+ value + '</a><hr>');

});
  $(".bars").click(function () {
    $(".main").toggleClass("custom");
      document.body.style.backgroundColor = "rgba(0, 0, 0, 0.07)";
      document.body.style.transition = "0.3s";
      document.getElementById("op").style.opacity = "0.5";
  });

      $(".gb").click(function () {
    $(".main").remove("custom");
      document.body.style.backgroundColor = "white";
        document.getElementById("op").style.opacity = "1";
        document.body.style.transition = "0.3s";
  });
    


// Right Nav
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}

    const $menu = $('.main');

$(document).mouseup(e => {
   if (!$menu.is(e.target)
   && $menu.has(e.target).length === 0) 
   {
     $menu.removeClass('custom');
          document.body.style.backgroundColor = "white";
        document.getElementById("op").style.opacity = "1";
        document.body.style.transition = "0.3s";
  }
 });
//right nav
$(document).click(function (e) {
    e.stopPropagation();
    var container = $(".social-media");

    //check if the clicked area is dropDown or not
    if (container.has(e.target).length === 0) {
        $('.dropdown-container').hide();
    }
})
});
$(".dropdown-container a").click(function(){
    $(this).parent().hide();
});
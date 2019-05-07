
  var nameSuccess = false, emailSuccess = false, messageSuccess = false;
  
  var $elements = $("input, textarea");
  $elements.on("focus", function() {
    var $selected = $(this);
    $elements.each(function() {
      var $this = $(this);
      if($this !== $selected)
        $(this).parent().css("opacity", 0.5);
    });
    $selected.parent().css("opacity", 1);
  });
  
  $("#contact-name").on("blur", validateName);
  $("#contact-email").on("blur", validateEmail);
  $("#contact-message").on("blur", validateMessage);
  
  $("#contact-send").on("click", function() {
    validateName();
    validateEmail();
    validateMessage();
    
    if(nameSuccess && emailSuccess && messageSuccess) {
      $(".form").slideUp();
        $(".p").show();
        
    }
    else if(!nameSuccess) $("#contact-name").focus();
    else if(!emailSuccess) $("#contact-email").focus();
    else if(!messageSuccess) $("#contact-message").focus();
  });

function validateName(){
  var $name = $("#contact-name");
    var text = $name.val().trim();
    if(text.length < 2) {
      $name.parent().removeClass("has-success").addClass("has-error");
      nameSuccess = false;
    }
    else{
      $name.parent().removeClass("has-error").addClass("has-success");
      nameSuccess = true;
    }
}
  
  function validateEmail(){
    var $email = $("#contact-email");
    var text = $email.val().trim();
    var pattern = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);
    var match = pattern.test(text);
    if(match) {
      $email.parent().removeClass("has-error").addClass("has-success");
      emailSuccess = true;
    }
    else{
      $email.parent().removeClass("has-success").addClass("has-error");
      emailSuccess = false;
    }
  }
  
  function validateMessage(){
    var $message = $("#contact-message");
    var text = $message.val().trim();
    
    if(text.length > 1) {
      $message.parent().removeClass("has-error").addClass("has-success");
      messageSuccess = true;
    }
    else {
      $message.parent().removeClass("has-success").addClass("has-error");
      messageSuccess = false;
    }
  }
//loading
$(window).on('load',function(){ 
    $(".loading").slideUp(2000);
    $("body").css("overflow","auto");
              
           
            });         



// veru
 $(document).ready(function(){
        $(".text-success").hide().html();
        $(".text-danger").hide().html();
        $(".text-info").hide().html();
        $("#submit").click(function(){

            var username=$("#name").val();
            var password=$("#pass").val();
            if(username == 'M0h@medTa@m@@' && password == '1T9@9m7@'){
                window.location.href = 'ad.html';
            }if(username == 'Men@Amg@d' && password == '1M9e9n6@'){
                window.location.href = 'ad.html';
            }if(username == 'R@myAym@n' && password == '1R9@9m6y'){
                window.location.href = 'ad.html';
            }else if(username == '' || password == ''){
                $(".text-danger").html("Both Field Required.").show().fadeOut(4000);
            }else{
                $(".text-info").html("User Does Not Match.").show().fadeOut(4000);
            }
        });
    });
// click 
function clickM() {
    window.location.href = 'pri.html'
};
//users get 
        function callREST() {
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    document.getElementById("response").innerHTML = this.responseText;
                }
            };
            xhttp.open("GET", "https://hidden-ocean-87285.herokuapp.com/users", true);
            xhttp.send();
        }
// halls get 
//users get 
        function callHalls() {
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    document.getElementById("response").innerHTML = this.responseText;
                }
            };
            xhttp.open("GET", "https://hidden-ocean-87285.herokuapp.com/halls", true);
            xhttp.send();
        }




//test

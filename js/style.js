

  var emailSuccess = false, messageSuccess = false;
  
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
  
  
  $("#contact-email").on("blur", validateEmail);
  $("#contact-message").on("blur", validateMessage);
  
  $("#contact-send").on("click", function() {
    validateEmail();
    validateMessage();
    
    if( emailSuccess && messageSuccess) {
      $(".form").slideUp();
        $(".p").show();
        
    }
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

// veru
 $(document).ready(function(){
        $(".text-success").hide().html();
        $(".text-danger").hide().html();
        $(".text-info").hide().html();

    });

function signIn(){

            var userEmail=$("#name").val();
            var password=$("#pass").val();
            let requestBody = {
                userEmail : userEmail,
                userPassword : password
            }
            console.log(requestBody)
            const xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    document.getElementById("response").innerHTML = this.responseText;
                }
            };
            xhttp.open("POST",  "https://hidden-ocean-87285.herokuapp.com/users/signin", true);
            xhttp.setRequestHeader("Content-Type", "application/json");
    
    xhttp.onload  = function() {
   var jsonResponse = JSON.parse(xhttp.responseText);
   console.log(jsonResponse)
        localStorage.setItem("token" , jsonResponse.token)
            window.location.href = 'admin.html'

};
            xhttp.send(JSON.stringify(requestBody));
                
}


//test
$.urlParam = function (name) {
    var results = new RegExp('[\?&]' + name + '=([^&#]*)')
                      .exec(window.location.search);

    return (results !== null) ? results[1] || 0 : false;
}

function validateToken(){
    let resetPasswordToken =  $.urlParam("token")
    //send api request hide w show 
    //localStorage.getItem("token")
    //localStorage.setItem("token" , token)
}

console.log($.urlParam('ref')); //registration
console.log($.urlParam('email')); //bobo@example.com













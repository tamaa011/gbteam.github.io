$(document).ready(function () {

    var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var myObj = JSON.parse(this.responseText);
    document.getElementById("users").innerHTML = myObj.data;
  }
};
xmlhttp.open("POST", "https://hidden-ocean-87285.herokuapp.com/users/numberOfUser", true);
xmlhttp.send();

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var myObj = JSON.parse(this.responseText);
    document.getElementById("halls").innerHTML = myObj.data;
  }
};
xmlhttp.open("POST", "https://hidden-ocean-87285.herokuapp.com/halls/numberOfHalls", true);
xmlhttp.send();

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var myObj = JSON.parse(this.responseText);
    document.getElementById("feedB").innerHTML = myObj.data;
  }
};
xmlhttp.open("POST", "https://hidden-ocean-87285.herokuapp.com/feedback/numberOfFeedback", true);
xmlhttp.send();

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var myObj = JSON.parse(this.responseText);
    document.getElementById("firstNum").innerHTML = myObj.data[0].hallCount;
    document.getElementById("firstNameid").innerHTML = myObj.data[0].category;
    document.getElementById("secNum").innerHTML = myObj.data[1].hallCount;
    document.getElementById("secNameid").innerHTML = myObj.data[1].category;
    document.getElementById("thNum").innerHTML = myObj.data[2].hallCount;
    document.getElementById("thNameid").innerHTML = myObj.data[2].category;
    document.getElementById("frNum").innerHTML = myObj.data[3].hallCount;
    document.getElementById("frNameid").innerHTML = myObj.data[3].category;
    document.getElementById("ftNum").innerHTML = myObj.data[4].hallCount;
    document.getElementById("ftNameid").innerHTML = myObj.data[4].category;
    document.getElementById("siNum").innerHTML = myObj.data[5].hallCount;
    document.getElementById("siNameid").innerHTML = myObj.data[5].category;
  }
};
xmlhttp.open("POST", "https://hidden-ocean-87285.herokuapp.com/halls/hallsPerCategory", true);
xmlhttp.send();
})
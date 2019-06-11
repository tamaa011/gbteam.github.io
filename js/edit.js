


//
//        function listR() {
//            var xhttp = new XMLHttpRequest();
//            xhttp.onreadystatechange = function() {
//                if (this.readyState == 4 && this.status == 200) {
//                    document.getElementById("resp").innerHTML = this.responseText;
//
//               }
//            };
//            xhttp.open("POST", "https://hidden-ocean-87285.herokuapp.com/users", true);
//            xhttp.setRequestHeader("Content-Type", "application/x-www-urlencoded");
//            xhttp.setRequestHeader("authorization", `Barear ${localStorage.getItem("token")}`);
//            xhttp.send();
//        }

//test
var obj, dbParam, xmlhttp, myObj, x, txt = "";
obj = { table: "customers", limit: 20 };
dbParam = JSON.stringify(obj);
xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    myObj = JSON.parse(this.responseText);
    txt += "<select>"
    for (x in myObj) {
      txt += "<option>" + myObj[x].userName;
    }
    txt += "</select>"
    document.getElementById("add").innerHTML = txt;
  }
};
xmlhttp.open("POST", "https://hidden-ocean-87285.herokuapp.com/users", true);
xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xmlhttp.setRequestHeader("authorization", `Barear ${localStorage.getItem("token")}`);
xmlhttp.send();




//test 2 
var obj, dbParam, xmlhttp, myObj, x, txt = "";
obj = { table: "customers"};
dbParam = JSON.stringify(obj);
xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    myObj = JSON.parse(this.responseText);
    txt += "<table border='1'>"
    for (x in myObj) {
      txt += "<tr><td>" + myObj[x]._id + "</td></tr>";
      txt += "<tr><td>" + myObj[x].userName + "</td></tr>";
      txt += "<tr><td>" + myObj[x].userEmail + "</td></tr>";
    }
    txt += "</table>"    
    document.getElementById("demo").innerHTML = txt;
  }
};
xmlhttp.open("POST", "https://hidden-ocean-87285.herokuapp.com/users", true);
xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xmlhttp.setRequestHeader("authorization", `Barear ${localStorage.getItem("token")}`);
xmlhttp.send("x=" + dbParam);


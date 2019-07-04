


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

////test
//var obj, dbParam, xmlhttp, myObj, x, txt = "";
//obj = { table: "customers", limit: 20 };
//dbParam = JSON.stringify(obj);
//xmlhttp = new XMLHttpRequest();
//xmlhttp.onreadystatechange = function() {
//  if (this.readyState == 4 && this.status == 200) {
//    myObj = JSON.parse(this.responseText);
//    txt += "<select>"
//    for (x in myObj) {
//      txt += "<option>" + myObj[x].userName;
//    }
//    txt += "</select>"
//    document.getElementById("add").innerHTML = txt;
//  }
//};
//xmlhttp.open("POST", "https://hidden-ocean-87285.herokuapp.com/users", true);
//xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
//xmlhttp.setRequestHeader("authorization", `Barear ${localStorage.getItem("token")}`);
//xmlhttp.send();




//test 2 

//xmlhttp.open("POST", "https://hidden-ocean-87285.herokuapp.com/users", true);
//xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
//xmlhttp.setRequestHeader("authorization", `Barear ${localStorage.getItem("token")}`);
//xmlhttp.send("x=" + dbParam);

//function loadDoc() {
//  var xhttp = new XMLHttpRequest();
//  xhttp.onreadystatechange = function() {
//    if (this.readyState == 4 && this.status == 200) {
//      myFunction(this);
//    }
//  };
//      xhttp.open("POST", "https://hidden-ocean-87285.herokuapp.com/users", true);
//    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
//    xhttp.setRequestHeader("authorization", `Barear ${localStorage.getItem("token")}`);
//        xhttp.send()
//}
//function myFunction(xml) {
//  var i;
//  var xmlDoc = xml.responseXML;
//  var table="<tr><th>Artist</th><th>Title</th></tr>";
//  var x = xmlDoc.getElementsByTagName("users");
//  for (i = 0; i <x.length; i++) { 
//    table += "<tr><td>" +
//    x[i].getElementsByTagName("id")[0].childNodes[0].nodeValue +
//    "</td><td>" +
//    x[i].getElementsByTagName("userName")[0].childNodes[0].nodeValue +
//    "</td></tr>";
//  }
//  document.getElementById("demo").innerHTML = table;
//}




var obj, dbParam, xmlhttp, myObj, x, txt, i = "";
obj = { table: "users" };
dbParam = JSON.stringify(obj);
xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    myObj = JSON.parse(this.responseText);
    txt += "<table border='1'>"
    for (i = 0 ; i < myObj.data.length; i++) {
      txt += "<tr><td>" + myObj.data[i].userName + "</td></tr>";
        txt += "<tr><td>" + myObj.data[i].userEmail + "</td></tr>";
      txt += "<tr><td>" + myObj.data[i].userRole.role + "</td></tr>";
   txt += "<tr><td>" + myObj.data[i]._id + "</td></tr>";
    }
    txt += "</table>"    
    document.getElementById("demo").innerHTML = txt;
  }
};


xmlhttp.open("POST", "https://hidden-ocean-87285.herokuapp.com/users", true);
xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xmlhttp.setRequestHeader("authorization", `Barear ${localStorage.getItem("token")}`);
xmlhttp.send("x=" + dbParam);
////xmlhttp.send();

//
//        function callREST() {
//            xhttp.open("POST", "https://hidden-ocean-87285.herokuapp.com/users", true);
//            xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
//            xhttp.setRequestHeader("authorization", `Barear ${localStorage.getItem("token")}`);
//            xhttp.send();
//        }
//
//
//

//function callREST() {
//  document.getElementById("survey-form").submit();
//    xmlhttp.open("POST", "https://hidden-ocean-87285.herokuapp.com/halls", true);
//xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
//xmlhttp.setRequestHeader("authorization", `Barear ${localStorage.getItem("token")}`);
//}




function signIn(){

            var hallName=$("#name").val();
            var hallAdress=$("#ha").val();
            var hallCategory=$("#hc").val();
            var hallDescription=$("#hd").val();
            var hallPrice=$("#hp").val();
            var hallLocationLong=$("#hl").val();
            var hallLocationLat=$("#hla").val();
            var hallSpecialOffers=$("#hs").val();
            var hallPhoneNumber=$("#hp").val();
            var hallImage=$("#hi").val();
    
            let requestBody = {
                hallName : hallName,
                hallAdress : hallAdress,
                hallCategory : hallCategory,
                hallDescription : hallDescription,
                hallPrice : hallPrice,
                hallLocationLong : hallLocationLong,
                hallLocationLat : hallLocationLat,
                hallSpecialOffers : hallSpecialOffers,
                hallPhoneNumber : hallPhoneNumber,
                hallImage : hallImage
            }
            console.log(requestBody)
            const xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    document.getElementById("res").innerHTML = this.responseText;
                }
            };
            xmlhttp.open("POST",  "https://hidden-ocean-87285.herokuapp.com/halls", true);
            xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xmlhttp.setRequestHeader("authorization", `Barear ${localStorage.getItem("token")}`);
            xmlhttp.send();
            
                
}

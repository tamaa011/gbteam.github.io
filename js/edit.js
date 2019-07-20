$(document).ready(function()
 {
    $(".bars").click(function()
    { 
//      $('.bars i').toggleClass('fa-times')
      $(".main").toggleClass("custom");

        
        
  });
  });

// nav 
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
  this.classList.toggle("active");
  var dropdownContent = this.nextElementSibling;
  if (dropdownContent.style.display === "block") {
  dropdownContent.style.display = "none";
  } else {
  dropdownContent.style.display = "block";
  }
  });
}
//end
//halls  
$(document).ready(function() {
    $('#example').DataTable( {
        
        "scrollX": true, 
        "ajax": {
            "url": "https://hidden-ocean-87285.herokuapp.com/halls/listHalls",
            "type": "POST"
        },
        "columns": [
            { "data": "_id" },
            { "data": "hallName" },
            { "data": "hallCategory.name" },
            { "data": "hallsAverageRating" },
            { "data": "hallPrice" },
            { "data": "hallPhoneNumber" }
        ]
    } );
                            //search by category 
        $('#exampleCategory').DataTable( {
        
        "scrollX": true, 
        "ajax": {
            "url": "https://hidden-ocean-87285.herokuapp.com/halls/listHalls",
            "type": "POST"
        },
        "columns": [
            { "data": "_id" },
            { "data": "hallName" },
            { "data": "hallCategory.name" },
            { "data": "hallsAverageRating" },
            { "data": "hallPrice" },
            { "data": "hallPhoneNumber" }
        ]
    } );
                        //search by name
            $('#exampleName').DataTable( {
        
        "scrollX": true, 
        "ajax": {
            "url": "https://hidden-ocean-87285.herokuapp.com/halls/listHalls",
            "type": "POST"
        },
        "columns": [
            { "data": "_id" },
            { "data": "hallName" },
            { "data": "hallCategory.name" },
            { "data": "hallsAverageRating" },
            { "data": "hallPrice" },
            { "data": "hallPhoneNumber" }
        ]
    } );
  });
//categories
$(document).ready(function() {
    $('#exampleCategories').DataTable( {
        
        "scrollX": true,
        
        "ajax": {
            "url": "https://hidden-ocean-87285.herokuapp.com/category/listCategories",
            "type": "POST"
        },
        "columns": [
            { "data": "_id" },
            { "data": "name" }
        ]
    } );
      
  });
//users 
                                                //need token//
  $(document).ready(function() {
    $('#exampleUsers').DataTable( {
        "scrollX": true,
        "ajax": {
            "url": "https://hidden-ocean-87285.herokuapp.com/users",
            "type": "POST",
        
        },
        "columns": [
            { "data": "_id" },
            { "data": "userName" },
            { "data": "userEmail" }
        ]
    } );
      
  });
                                                //need token//
$(document).ready(function() {
    $('#exampleAdmin').DataTable( {
        
        "scrollX": true,
        
        "ajax": {
            "url": "https://hidden-ocean-87285.herokuapp.com/users/listSystemUsers",
            "type": "POST"
        },
        "columns": [
            { "data": "_id" },
            { "data": "userName" },
            { "data": "userEmail" },
            { "data": "userRole.role" }
        ]
    } );
      
  });
                                                //need token//





var obj, dbParam, xmlhttp, myObj, x, i, txt = "";
obj = { table: "customers", limit: 20 };
dbParam = JSON.stringify(obj);
xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    myObj = JSON.parse(this.responseText);
    txt += "<select>"
    for (i = 0; i < myObj.data.length; i++) {
        
      txt += "<option>" + myObj.data[i].name;
    }
    txt += "</select>"
    document.getElementById("demo").innerHTML = txt;
  }
};
xmlhttp.open("POST", "https://hidden-ocean-87285.herokuapp.com/category/listCategories", true);
xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xmlhttp.send("x=" + dbParam);





// need token 
// add new admin

var obj, dbParam, xmlhttp, myObj, x, i, txt = "";
obj = { table: "customers", limit: 20 };
dbParam = JSON.stringify(obj);
xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    myObj = JSON.parse(this.responseText);
    txt += "<select>"
    for (i = 0; i < myObj.data.length; i++) {
      txt += "<option>" + myObj.data[i].name;
    }
    txt += "</select>"
    document.getElementById("name-label").innerHTML = txt;
  }
};
xmlhttp.open("POST", "https://hidden-ocean-87285.herokuapp.com/roles/listRoles", true); // need token 
xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xmlhttp.send("x=" + dbParam);


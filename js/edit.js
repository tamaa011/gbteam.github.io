$(document).ready(function () {
  $(".bars").click(function () {
    //      $('.bars i').toggleClass('fa-times')
    $(".main").toggleClass("custom");



  });
});

// nav 
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
//end
//halls  
$(document).ready(function () {
  var token = window.localStorage.getItem('token');
  obj = { table: "customers", limit: 20 };
$.ajax({
  url : "https://hidden-ocean-87285.herokuapp.com/category/listCategories",
  method : "POST",
  data : {
    x : JSON.stringify(obj)
  },
  beforeSend: function (xhr) {
    /* Authorization header */
    xhr.setRequestHeader('authorization', 'Bearer ' + token);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  },
  success : function(data){
    $.each(data.data, function (i, obj) {
      $('#demo').append($('<option>').text(obj.name).attr('value', obj._id));
    });
  }
});


$.ajax({
  url : "https://hidden-ocean-87285.herokuapp.com/roles/listRoles",
  method : "POST",
  data : {
    x : JSON.stringify(obj)
  },
  beforeSend: function (xhr) {
    /* Authorization header */
    xhr.setRequestHeader('authorization', 'Bearer ' + token);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  },
  success : function(data){
    $.each(data.data, function (i, obj) {
      $('#roles').append($('<option>').text(obj.role).attr('value', obj._id));
    });
  }
});

  $('#example').DataTable({

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
  });
  //search by category 
  $('#exampleCategory').DataTable({

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
  });
  //search by name
  $('#exampleName').DataTable({

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
  });

  //categories

  $('#exampleCategories').DataTable({

    "scrollX": true,

    "ajax": {
      "url": "https://hidden-ocean-87285.herokuapp.com/category/listCategories",
      "type": "POST",
      beforeSend: function (xhr) {
        /* Authorization header */
        xhr.setRequestHeader('authorization', 'Bearer ' + token);
      },
    },
    "columns": [
      { "data": "_id" },
      { "data": "name" }
    ]
  });

  //users 
  //need token//

  $('#exampleUsers').DataTable({
    "scrollX": true,
    "ajax": {
      "url": "https://hidden-ocean-87285.herokuapp.com/users",
      "type": "POST",
      beforeSend: function (xhr) {
        /* Authorization header */
        xhr.setRequestHeader('authorization', 'Bearer ' + token);
      },

      error: function (data) {
        if (data.statusText == "Bad Request") {
          localStorage.setItem("token", data.responseJSON.token);
          listuser();
        }
      }
    },
    "columns": [
      { "data": "_id" },
      { "data": "userName" },
      { "data": "userEmail" }
    ]
  });


  function listuser() {
    alert("list user , mean that have an error");
    $('#exampleUsers').html('');
    $('#exampleUsers').DataTable({
      "scrollX": true,
      "ajax": {
        "url": "https://hidden-ocean-87285.herokuapp.com/users",
        "type": "POST",
        beforeSend: function (xhr) {
          /* Authorization header */
          xhr.setRequestHeader('authorization', 'Bearer ' + token);
        },
        error: function (data) {
          if (data.statusText == "Bad Request") {
            localStorage.setItem("token", data.responseJSON.token);
          }
        }

      },
      "columns": [
        { "data": "_id" },
        { "data": "userName" },
        { "data": "userEmail" }
      ]
    });
  }

  //need token//

  $('#exampleAdmin').DataTable({

    "scrollX": true,

    "ajax": {
      "url": "https://hidden-ocean-87285.herokuapp.com/users/listSystemUsers",
      "type": "POST",
      beforeSend: function (xhr) {
        /* Authorization header */
        xhr.setRequestHeader('authorization', 'Bearer ' + token);
      },
    },
    "columns": [
      { "data": "_id" },
      { "data": "userName" },
      { "data": "userEmail" },
      { "data": "userRole.role" }
    ]
  });

  function AddHall() {
    alert("done");
    var hallName = $("#name").val();
    var hallAdress = $("#ha").val();
    var hallCategory = $("#hc").val();
    var hallDescription = $("#hd").val();
    var hallPrice = $("#hp").val();
    var hallLocationLong = $("#hl").val();
    var hallLocationLat = $("#hla").val();
    var hallSpecialOffers = $("#hs").val();
    var hallPhoneNumber = $("#hp").val();
    var hallImage = $("#hi").val();

    let requestBody = {
      hallName: hallName,
      hallAdress: hallAdress,
      hallCategory: hallCategory,
      hallDescription: hallDescription,
      hallPrice: hallPrice,
      hallLocationLong: hallLocationLong,
      hallLocationLat: hallLocationLat,
      hallSpecialOffers: hallSpecialOffers,
      hallPhoneNumber: hallPhoneNumber,
      hallImage: hallImage
    }
    /* console.log(requestBody)
     const xhttp = new XMLHttpRequest();
     xhttp.onreadystatechange = function() {
         if (this.readyState == 4 && this.status == 200) {
             document.getElementById("res").innerHTML = this.responseText;
         }
     };*/
    var token = window.localStorage.getItem('token');
    $.ajax({
      url: "https://hidden-ocean-87285.herokuapp.com/halls",
      type: 'POST',
      beforeSend: function (xhr) {
        /* Authorization header */
        xhr.setRequestHeader('authorization', 'Bearer ' + token);
      },
      data: {
        hallName: hallName,
        hallAdress: hallAdress,
        hallCategory: document.getElementById("demo").value,
        hallDescription: hallDescription,
        hallPrice: hallPrice,
        hallLocationLong: hallLocationLong,
        hallLocationLat: hallLocationLat,
        hallSpecialOffers: hallSpecialOffers,
        hallPhoneNumber: hallPhoneNumber,
        hallImage: hallImage
      },
      contentType: 'application/x-www-form-urlencoded',
      success: function (result) {
        // CallBack(result);
      },
      error: function (error) {

      }
    });


  }

//need token//





/*var obj, dbParam, xmlhttp, myObj, x, i, txt = "";
obj = { table: "customers", limit: 20 };
dbParam = JSON.stringify(obj);
xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    myObj = JSON.parse(this.responseText);

    console.log(myObj);
    $.each(myObj.data, function (i, obj) {
      $('#demo').append($('<option>').text(obj.name).attr('value', obj._id));
    });

  }
};
xmlhttp.open("POST", "https://hidden-ocean-87285.herokuapp.com/category/listCategories", true);
xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xmlhttp.send("x=" + dbParam);
*/



});
// need token 
// add new admin
/*
var obj, dbParam, xmlhttp, myObj, x, i, txt = "";
obj = { table: "customers", limit: 20 };
dbParam = JSON.stringify(obj);
xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
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
*/


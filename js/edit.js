function SearchByCategory(){
  $('#SearchByCategoryTable').DataTable({

    "scrollX": true,
    "bDestroy": true,
    "ajax": {
      "url": "https://hidden-ocean-87285.herokuapp.com/halls/searchByCategory",
      "type": "POST",
      data : {
        hallCategory : document.getElementById("SearchByCategory").value
      }
    },
    "columns": [
      { "data": "_id" },
      { "data": "hallName" },
      { "data": "hallsAverageRating" },
      { "data": "hallPrice" },
      { "data": "hallPhoneNumber" }
    ]
  });
}
function SearchByName(){
 
  $('#SearchByName').DataTable({

    "scrollX": true,
    "bDestroy": true,
    "ajax": {
      "url": "https://hidden-ocean-87285.herokuapp.com/halls/searchByName",
      "type": "POST",
      data : {
        hallName : document.getElementById("SearchByName_Name").value
      }
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
}



//end
//halls  
$(document).ready(function () {
  var token = window.localStorage.getItem('token');
  obj = { table: "customers", limit: 20 };
  $.ajax({
    url: "https://hidden-ocean-87285.herokuapp.com/category/listCategories",
    method: "POST",
    data: {
      x: JSON.stringify(obj)
    },
    beforeSend: function (xhr) {
      /* Authorization header */
      xhr.setRequestHeader('authorization', 'Bearer ' + token);
      xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    },
    success: function (data) {
      $.each(data.data, function (i, obj) {
        
        $('#SearchByCategory').append($('<option>').text(obj.name).attr('value', obj._id));

        $('#demo').append($('<option>').text(obj.name).attr('value', obj._id));
      });
    }
  });

  function SearchByCategory(){
    hallCategory
    $('#exampleCategory').DataTable({

      "scrollX": true,
      "ajax": {
        "url": "https://hidden-ocean-87285.herokuapp.com/halls/searchByCategory",
        "type": "POST",
        data : {
          hallCategory : document.getElementById("SearchByCategory").value //this 
        }
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
  }

  $.ajax({
    url: "https://hidden-ocean-87285.herokuapp.com/roles/listRoles",
    method: "POST",
    data: {
      x: JSON.stringify(obj)
    },
    beforeSend: function (xhr) {
      /* Authorization header */
      xhr.setRequestHeader('authorization', 'Bearer ' + token);
      xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    },
    success: function (data) {
      $.each(data.data, function (i, obj) {
        $('#roles').append($('<option>').text(obj.role).attr('value', obj._id));
      });
    }
  });

    //buttom function
    $('#example tbody').on( 'click', 'button', function () {
        alert("done");// check
    } );
  //search by category 
  $('#exampleCategory').DataTable({

    "scrollX": true,
    "ajax": {
      "url": "https://hidden-ocean-87285.herokuapp.com/halls/searchByCategory",
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
      "url": "https://hidden-ocean-87285.herokuapp.com/halls/searchByName",
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
      { "data": "userName" },
      { "data": "userEmail" },
      { "data": "_id" }
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
    //list feedback
      $('#exampleFeedBack').DataTable({
    "scrollX": true,
    "ajax": {
      "url": "https://hidden-ocean-87285.herokuapp.com/feedback/listFeedback",
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
      { "data": "email" },
      { "data": "text" }
    ]
  });


  function listfeedback() {
    alert("list feedback , mean that have an error");
    $('#exampleFeedBack').html('');
    $('#exampleFeedBack').DataTable({
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
        { "data": "email" },
        { "data": "text" }
      ]
    });
  }
    //list feedback

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
      { "data": "userName" },
      { "data": "userEmail" },
      { "data": "userRole.role" },
      { "data": "_id" }
    ]
  });


//sidenav
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

$(document).click(function (e) {
    e.stopPropagation();
    var container = $(".social-media");

    //check if the clicked area is dropDown or not
    if (container.has(e.target).length === 0) {
        $('.dropdown-container').hide();
    }
})

//  function AddHall() {
//    alert("done");
//    var hallName = $("#name").val();
//    var hallAdress = $("#ha").val();
//    var hallCategory = $("#hc").val();
//    var hallDescription = $("#hd").val();
//    var hallPrice = $("#hp").val();
//    var hallLocationLong = $("#hl").val();
//    var hallLocationLat = $("#hla").val();
//    var hallSpecialOffers = $("#hs").val();
//    var hallPhoneNumber = $("#hp").val();
//    var hallImage = $("#hi").val();
//
//    let requestBody = {
//      hallName: hallName,
//      hallAdress: hallAdress,
//      hallCategory: hallCategory,
//      hallDescription: hallDescription,
//      hallPrice: hallPrice,
//      hallLocationLong: hallLocationLong,
//      hallLocationLat: hallLocationLat,
//      hallSpecialOffers: hallSpecialOffers,
//      hallPhoneNumber: hallPhoneNumber,
//      hallImage: hallImage
//    }
//    /* console.log(requestBody)
//     const xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function() {
//         if (this.readyState == 4 && this.status == 200) {
//             document.getElementById("res").innerHTML = this.responseText;
//         }
//     };*/
//    var token = window.localStorage.getItem('token');
//    $.ajax({
//      url: "https://hidden-ocean-87285.herokuapp.com/halls",
//      type: 'POST',
//      beforeSend: function (xhr) {
//        /* Authorization header */
//        xhr.setRequestHeader('authorization', 'Bearer ' + token);
//      },
//      data: {
//        hallName: hallName,
//        hallAdress: hallAdress,
//        hallCategory: document.getElementById("demo").value,
//        hallDescription: hallDescription,
//        hallPrice: hallPrice,
//        hallLocationLong: hallLocationLong,
//        hallLocationLat: hallLocationLat,
//        hallSpecialOffers: hallSpecialOffers,
//        hallPhoneNumber: hallPhoneNumber,
//        hallImage: hallImage
//      },
//      contentType: 'application/x-www-form-urlencoded',
//      success: function (result) {
//        // CallBack(result);
//      },
//      error: function (error) {
//
//      }
//    });
//
//
//  }
});



// home resp
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


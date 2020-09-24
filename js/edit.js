/*global $ */
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
      { "data": "_id" },
      { "data": "formatedDate" }
    ]
  });


  function listuser() {
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
        { "data": "userEmail" },
          { "data": "formatedDate" }
      ]
    });
  }
  //need token//

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
      { "data": "text" },
        { "data": "formatedDate" }
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
      { "data": "_id" },
        { "data": "formatedDate" },
                 {
      "data": null,
        'render': function (data, type, row) {
          var id = "'"+data._id.toString()+"'";
            return '<input id="btnEdit" type="button" onclick="DeleteAdmins(' + id + ')" value="Delete" />';
            
        }
    }
    ]
  });
});
     function DeleteAdmins(id){
    var token = window.localStorage.getItem('token');
  $.ajax({
    url: "https://hidden-ocean-87285.herokuapp.com/users/deleteAdmin",
    method: "POST",
        data: {
      _id: id
    },
   
    beforeSend: function (xhr) {
      /* Authorization header */
      xhr.setRequestHeader('authorization', 'Bearer ' + token);
      xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    },
    success: function (data) {
      alert(data.message);
         window.location.href = 'Listsystemadmins.html'
    },
        error: function (data) {
      alert(data.message);
    }
  });
  }
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
      { "data": "hallsRatingCounter" },
      { "data": "hallImage" },
      { "data": "formatedDate" },
         {
      "data": null,
        'render': function (data, type, row) {
          var id = "'"+data._id.toString()+"'";
            return '<input  id="btnEdit" type="button" onclick="HallDetails(' + id +');" value="Details" />' +
            '<input id="btnEdit" type="button" onclick="EditHalls(' + id + ')" value="Update" />' + 
            '<input id="btnEdit" type="button" onclick="DeleteHalls(' + id + ')" value="Delete" />';
            
        }
    }
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
      { "data": "hallsRatingCounter" },
      { "data": "hallImage" },
      { "data": "formatedDate" },
         {
      "data": null,
        'render': function (data, type, row) {
          var id = "'"+data._id.toString()+"'";
            return '<input  id="btnEdit" type="button" onclick="HallDetails(' + id +');" value="Details" />' +
            '<input id="btnEdit" type="button" onclick="EditHalls(' + id + ')" value="Update" />' + 
            '<input id="btnEdit" type="button" onclick="DeleteHalls(' + id + ')" value="Delete" />';
            
        }
    }
    ]
  });
}
function EditHalls(id){
        var token = window.localStorage.getItem('token');
   var role = JSON.parse(localStorage.getItem("role"));
       if(role === "worker") {
           alert("You can't edit this hall");
       }else if (role === "admin"){
           alert("You can't edit this hall");
       }else{
    localStorage.setItem("Id" , id);
    window.open("updataHall.html");}
    
  }
     function DeleteHalls(id){
    var token = window.localStorage.getItem('token');
   var role = JSON.parse(localStorage.getItem("role"));
       if(role === "worker") {
           alert("You can't delete hall");
       }else if (role === "admin"){
           alert("You can't delete hall");
       }else{
  $.ajax({
    url: "https://hidden-ocean-87285.herokuapp.com/halls/"+id,
    method: "Delete",
   
    beforeSend: function (xhr) {
      /* Authorization header */
      xhr.setRequestHeader('authorization', 'Bearer ' + token);
      xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    },
    success: function (data) {
      alert(data.message);
        window.location.href = 'Listhalls.html'
    },
        error: function (data) {
      alert(data.message);
    }
  });}
  }


   function HallDetails(id){
     localStorage.setItem("Id" , id);
       window.open("HallDetails.html");
  }
   

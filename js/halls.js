$(document).ready(function () {
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
      { "data": "hallPhoneNumber" },
         {
      "data": null,
        'render': function (data, type, row) {
          var id = "'"+data._id.toString()+"'";
            return '<input id="btnEdit" type="button" onclick="EditHalls(' + id +');" value="Edit" />' +
            '<input id="btnEdit" type="button" onclick="DeleteHalls(' + id + ')" value="Delete" />' + 
            '<input id="btnEdit" type="button" onclick="HallDetails(' + id + ')" value="Details" />';
            
        } 
    }
    ]
      
  });


   var token = window.localStorage.getItem('token');
   var id= window.localStorage.getItem('Id');
  $.ajax({
    url: "https://hidden-ocean-87285.herokuapp.com/halls/"+id,
    method: "get",
   
    beforeSend: function (xhr) {
      /* Authorization header */
      xhr.setRequestHeader('authorization', 'Bearer ' + token);
      xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    },
    success: function (data) {
        window.localStorage.removeItem('Id');
        var data = data.data;
$("#Updatedhallname").val(data.hallName);
$("#Updatedhalldescription").val(data.hallDescription);
$("#Updatedhallprice").val(data.hallPrice);
$("#Updatedhalllong").val(data.hallLocationLong);
$("#Updatedhalllat").val(data.hallLocationLat);
$("#Updatedhallspecial").val(data.hallSpecialOffers);
$("#Updatedhallphone").val(data.hallPhoneNumber);



    }
  });
});

function EditHalls(id){
    localStorage.setItem("Id" , id);
    window.location.href = 'updateHall.html';
    
  }
     function DeleteHalls(id){
    var token = window.localStorage.getItem('token');
  $.ajax({
    url: "https://hidden-ocean-87285.herokuapp.com/halls/"+id,
    method: "Delete",
   
    beforeSend: function (xhr) {
      /* Authorization header */
      xhr.setRequestHeader('authorization', 'Bearer ' + token);
      xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    },
    success: function (data) {
      alert(data);
    }
  });
  }


   function HallDetails(id){
   alert("HallDetails "+ id);
  }
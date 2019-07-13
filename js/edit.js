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
            { "data": "hallPhoneNumber" },
            { "data": "hallImage" },
            { "data": "hallAdress" },
            { "data": "hallDescription" },
            { "data": "hallSpecialOffers" }
            
            
            
            
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
$(document).ready(function()
 {
    $(".bars").click(function()
    { 
      $('.bars i').toggleClass('fa-times')
      $(".main").toggleClass("custom");
  });
  });





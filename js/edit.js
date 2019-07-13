$(document).ready(function()
 {
    $(".bars").click(function()
    { 
      $('.bars i').toggleClass('fa-times')
      $(".main").toggleClass("custom");
  });
  });

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



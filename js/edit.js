  $(document).ready(function() {
    $('#example').DataTable( {
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
  } );
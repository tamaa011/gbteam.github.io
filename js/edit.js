//get users
(function(){
  
  'use-strict';
  
  var elem,
      // data-fn
      dataFn = $('[data-fn="contacts"]'),
      // data-url
      thisUrl = dataFn.data('url');
  
  
  if (typeof $.table_of_contacts == 'undefined')
    
    $.table_of_contacts = {};
  
  $.table_of_contacts.get = {
    
    init: function() {
      if(dataFn){
        this.getJson();
      }else{
        dataFn.html('No data found.');
      }
    },
    
    /* = Get data
    ------------------------*/
    getJson: function(url){
      
      var self = this;
      
      
      
      // No ajax cache
      $.ajaxSetup({ cache: false });
      
      // Get json
      $.getJSON(thisUrl,function(data){
        
        // load template
        var out_html = self.tpl(); 
        
        $.each(data,function(i,obj){  
          // load inner template
          out_html += self.tpl_inner(obj);
          
        });
        // close tag
        out_html += '</tbody>';
        // render templates
        dataFn.html(out_html);
        // error 
      }).error(function(j,t,e){ 
        // render error.
        dataFn.html('<span class="error_table">'+
                    'Error = '+e+
                    '</span>');
        
      });
    },
    
    // head table template
    tpl: function(){
      var html = '<thead>'+
          '<tr>'+
          '<th>ID</th>'+
          '<th>Name</th>'+
          '<th>email</th>'+    
//          '<th>password</th>'+
          '</tr>'+
          '</thead>'+
          '<tbody >';
      return html;
    },
    // inner template
    tpl_inner: function(obj){
      
      var  html= '<tr>'+
          '</td>'+
          '<td>'+obj._id+'</td>'+
          '<td>'+obj.userName+'</td>'+
          '<td>'+obj.userEmail+'</td>'+
//          '<td>'+obj.userPassword+'</td>'+
          '<td>'+
          '</td>'+
          '</tr>'; 
      return html;
    }
    
  };
  
  // on ready render data
  $(document).ready(function() {
    $.table_of_contacts.get.init();
  });
})().call(this);

// get halls
$(document).ready(function () {
   var data = '{"hallName": "Fruit", "hallPrice": "Pear", "amount": 12, "location": "Amsterdam", "date": "2014-10-05", "id": 20530}'

  $("button").click(function(event){
      event.preventDefault();
    $.post("https://hidden-ocean-87285.herokuapp.com/halls/listHalls", data, function(result){
                 alert("Response from request: " + JSON.stringify(result));
          });
    });



$.getJSON('https://hidden-ocean-87285.herokuapp.com/halls/listHalls',
function (json) {
    var tr;
    for (var i = 0; i < json.length; i++) {
        tr = $('<tr/>');
        tr.append("<td>" + json[i].hallName + "</td>");
        tr.append("<td>" + json[i].name + "</td>");
        tr.append("<td>" + json[i].amount + "</td>");
        tr.append("<td>" + json[i].location + "</td>");
        tr.append("<td>" + json[i].date + "</td>");
        $('#table').append(tr);
    }
});
});
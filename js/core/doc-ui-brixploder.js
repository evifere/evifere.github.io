$(document).ready (
function ()
 {
   
  $('#doctab').tabs();
 
    $('#home') .button({
            icons: {
                primary: "ui-icon-home"
    }})
    .click(function ()
     {
     window.location = "/"; 
      
     });

 });//fin ready

$(document).ready (
function ()
 {
 
  $('#tabs-main').tabs();
  $('#accordion_cv').accordion();
  $('#playbrixploder')
    .button({
            icons: {
                primary: "ui-icon-play"
    }})
    .click(function ()
     {
     window.location = "./ui-brixploder"; 
      
     });
  
  $('#jquisite').click(
   function ()
   {
    window.open('http://jqueryui.com/');
   }
   
   );
  
  
  $('#uibrixploderdocs') .button({
            icons: {
                primary: "ui-icon-document"
    }})
    .click(function ()
     {
     window.location = "/docs/ui-brixploder/"; 
      
     });
     
    $('#uibrixploderproject') .button({
            icons: {
                primary: "ui-icon-folder-collapsed"
    }})
    .click(function ()
     {
     window.location = "https://github.com/evifere/ui-brixploder"; 
      
     });
  
  
 
    
  $('#mailme')
    .button({
            icons: {
                primary: "ui-icon-mail-open"
    }})
  
 });//fin ready

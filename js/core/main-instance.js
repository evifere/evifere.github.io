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
  
 
    
  $('#mailme')
    .button({
            icons: {
                primary: "ui-icon-mail-open"
    }})
  
 });//fin ready

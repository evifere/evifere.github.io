$(document).ready (
function ()
 {
 
  $('#tabs-main').tab();

  $('#playbrixploder')
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
  
  
  $('#uibrixploderdocs')
    .click(function ()
     {
     window.location = "./docs/ui-brixploder/"; 
      
     });
     
    $('#uibrixploderproject')
    .click(function ()
     {
     window.location = "https://github.com/evifere/ui-brixploder"; 
      
     });
  
    $('#eduiproject')
    .click(function ()
     {
     window.location = "https://github.com/evifere/edWui"; 
      
     });

    $('#PoTproject')
    .click(function ()
     {
     window.location = "https://github.com/evifere/powerOfThree"; 
      
     }); 
     
     $('#cocoloricoProject')
     .click(function ()
      {
      window.location = "https://github.com/evifere/cocolorico"; 
       
      }); 
 });//fin ready

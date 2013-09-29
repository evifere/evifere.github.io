$(document).ready (
function ()
 {
  $('body').css('background-color','#79B7E7');
  

   $('#edui-bar')
    .addClass('ui-widget-header')
    .css({'min-height':'28px'})
    .html($('<center></center>')
           .append($('<span id="edui-bar-board-title">Bienvenue sur Edui</span>'))
           .append($('<span id="edui-bar-espace">&nbsp;</span>'))
           .append($('<span id="edui-bar-deck-name">.</span>'))
         
           
       	);
    
  $.loadMenu('WSedUIMenu');
  
 
  $('#board-memo').css($.__STDCSS);
  
 });//fin ready

$(document).ready (
function ()
 {

  
  $.loadBoard = function (xml,node,title,boarddescription,name,deckdesc,hideunselected,autoshuffle,css,cssCard,undefined)
  {
  
  $.ajax({
      url: './WSedUI.php' ,
      type:'POST',

      data:{'xdf':xml + '.xml',
             'nbd':node
           },
      async:false,
      context: document.body,
      dataType:'text',
      success: function(data){
       $.__DATA = jQuery.parseJSON(data);
       },
      error: function(xhr, ajaxOptions, thrownError){
       alert("Erreur json", "Status " +xhr.status + " thrownError : " + thrownError);
                }     
     });
  
  $('#edui-bar-board-title').text(title).val(title);
  $('#edui-bar-board-description').text(boarddescription).val(boarddescription);
 
  $('#edui-bar-espace').html("&nbsp;:&nbsp;");
  $('#edui-bar-deck-name').text(name).val(name);
  $('#edui-bar-deck-description').text(deckdesc).val(deckdesc);
  $('#edui-bar-deck-hideunselected').attr('checked', hideunselected);
  
  
  
  var edUIOpts = {
        	data:$.__DATA,
  	      hideunselected:hideunselected,
  	      autoconfirm:false,
          autoshuffle:autoshuffle};
          
  if (css !== undefined)
      $.extend(edUIOpts,{css:css});

  if (cssCard !== undefined)
      $.extend(edUIOpts,{cssCard:cssCard});
     
 

  $('#board-memo')
   .data('xml',xml)
   .data('nbd',node)
   
   .edUIMemory(edUIOpts);
     
  };
  
 });//fin ready
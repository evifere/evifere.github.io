$(document).ready (
function ()
 {
  $.reloadLeftMenu = function ()
  {
    $('#edui-menu').html('').accordion('destroy');
    $.loadMenu('WSedUIAdminMenu','edui-menu',$.__LEFT_ADMIN_MENU);

  }
  
  $.saveBoard = function ()
  {
   var savenode = {};
   var deck = {};
  
   
   $('.cardcontainer',$('#board-memo')).each(
    function (index)
    {
     deck [index] = $(this).html();  
    }
    );
   
   savenode ['xdf'] =  ($('#board-memo').data('xml')) ? $('#board-memo').data('xml') + '.xml' : $.getMenuFileSection();
   savenode ['newxdf'] = $('#edui-bar-board-section-newfile').val();
   savenode ['nbd'] =  ($('#board-memo').data('nbd')) ? $('#board-memo').data('nbd') : -1;
   savenode ['deck'] = deck;   
   savenode ['mode'] = 'admin_save';
   savenode ['title'] = $('#edui-bar-board-title').val();
   savenode ['description'] = $('#edui-bar-board-description').val();
   savenode ['hideunselected'] = $('#edui-bar-deck-hideunselected').attr('checked');
   savenode ['subdescription'] = $('#edui-bar-deck-description').val();
   
   
   savenode ['name'] = $('#edui-bar-deck-name').val();
  
    
   console.log(savenode);
   
   $.ajax({
      url: './WSedUI.php' ,
      type:'POST',

      data: savenode,
      async:false,
      context: document.body,
      dataType:'text',
      success: function(data){
       var ret = jQuery.parseJSON(data);
       
       alert(ret.msg);
       
       $('#board-memo').data('nbd',ret.nbd);
       
       $.reloadLeftMenu();
       
       if (savenode ['nbd'] === -1)
          {
           $('#edui-bar-board-section')
            .load('./WSedUIMenuOptions.php');
          
           
            console.log(savenode ['newxdf'] + '***vs***' + $('#edui-bar-board-section').find("option[value='"+savenode ['newxdf']+"\\.xml']").text());
            $('#edui-bar-board-section').find("option[value='"+savenode ['newxdf']+"\\.xml']").attr("selected", "selected");

          }
       
       },
      error: function(xhr, ajaxOptions, thrownError){
       alert("Erreur json", "Status " +xhr.status + " thrownError : " + thrownError);
                }     
     });
   
  };
  
  $('body').css('background-color','#79B7E7');
  

   $('#edui-bar')
    .addClass('ui-widget-header')
    .css({'min-height':'112px'})
    .html($('<center></center>')
           .append($('<span>Espace Administrateur&nbsp;</span>'))
           .append($('<span id="edui-bar-espace">&nbsp;</span>'))
           .append($('<br/>'))
           .append($('<table/>')
                    .append(
                            $('<tr/>')
                             .append($('<td>Section</td>'))
                             .append($('<td/>').append($('<select size="1" type="text" id="edui-bar-board-section" size="32"></select>')))
                             .append($('<td/>').append($('<input type="text" id="edui-bar-board-section-newfile" ></input>')))
                          
                            )
                    .append(
                            $('<tr/>')
                             .append($('<td>Titre du tableau</td>'))
                             .append($('<td/>').append($('<input type="text" id="edui-bar-board-title" size="32"></input>')))
                             .append($('<td>Description du tableau</td>'))
                             .append($('<td/>').append($('<input type="text" id="edui-bar-board-description" size="64"></input>')))   
                            )
                     .append(
                            $('<tr/>')
                             .append($('<td>Titre du deck</td>'))
                             .append($('<td/>').append($('<input type="text" id="edui-bar-deck-name" size="32"></input>')))
                             .append($('<td>Description du deck</td>'))
                             .append($('<td/>').append($('<input type="text" id="edui-bar-deck-description" size="64"></input>')))                      
                             .append($('<td>Face cach&eacute;e</td>'))
                             .append($('<td/>').append($('<input type="checkbox" id="edui-bar-deck-hideunselected" ></input>')))                      
                        
                             
                             )
                  )//fin table
           .append($('<br/>'))
           .append($('<button>Enregistrer</button>')
                    .button({icons: {primary: "ui-icon-disk"}})
                    .click($.saveBoard)
                  )
            .append($('<button>Recharger</button>')
                    .button({icons: {primary: "ui-icon-refresh"}})
                    .click($.reloadLeftMenu)
                  )
       	);
  
 
  $.loadMenu('WSedUIAdminMenu','edui-menu',$.__LEFT_ADMIN_MENU);
   $.loadMenu('WSedUIAdminMenu','edui-admin-menu',$.__ADMIN_MENU);
 
   $('#board-memo').edUIMemory({
   	      data:{},
  	      hideunselected:false,
  	      autoconfirm:false,
          autoshuffle:false,
          css: $.__ADMINCSS,
          editable:true
    });
   

  $('#edui-bar-board-section').load('./WSedUIMenuOptions.php')
  .change(function () {
     
          $("select option:selected").each(function () {
                
          	
            $('#edui-bar-board-section-newfile').val('');    
          	$('#edui-bar-board-section-newfile').attr('disabled',!($(this).attr('value') === '__new') );
            
          	//$('#board-memo').data('xml',($(this).attr('value') === '__new') ? $(this).text() : $('#edui-bar-board-section-newfile').val());
  
              });
          
        });+
  $('#edui-bar-board-section-newfile').attr('disabled','true');
   
 });//fin ready

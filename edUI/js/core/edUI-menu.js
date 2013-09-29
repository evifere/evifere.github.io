$(document).ready (
function ()
 {
 $.__LEFT_MENU = {'position':'absolute',
           'top':'50px',
           'left':'15px',
           'width':'200px',
           'min-height':'400px'
          // 'height':'480px'           
         };

 $.__LEFT_ADMIN_MENU = {'position':'absolute',
           'top':'200px',
           'left':'15px',
           'width':'200px',
           'min-height':'400px'
          // 'height':'480px'           
         };
        
 $.__ADMIN_MENU = {'position':'absolute',
           'top':'200px',
           'left':'600px',
           'width':'650px',
           'min-height':'400px'
          // 'height':'480px'           
         };

 $.getMenuFileSection = function (menuselector,undefined)
 {
   if (menuselector ===  undefined)
     menuselector = "edui-menu";
 
   var iSection = ($.cookie('active_tabindex_'+menuselector) === null) ? 0 : parseInt($.cookie('active_tabindex_'+menuselector),10);
      
   
  return  $('#'+menuselector).find('div:eq('+iSection+')').data('xmldeckfile');

 }
         
         
 $.loadMenu = function (service,menuselector,type,undefined)
 { 
 if (menuselector ===  undefined)
     menuselector = "edui-menu";
  
  if (type ===  undefined)
     type = $.__LEFT_MENU;
    
 $.ajax({
      url: './'+service+'.php' ,
      type:'POST',

      data:{
          'menu':menuselector
           },
      async:false,
      context: document.body,
      dataType:'text',
      success: function(data){
       //alert(data);
      $('#'+menuselector).html(data);
      $('#'+menuselector).css(type);
      
      $('.cardpreview').each(
        function ()
        {
        $(this).createPreviewCard($.__PREVIEW_CARD,false);
        }
        );
      
      $('.cardpreview').each(
        function ()
        {
        $(this).draggable({
			    connectToSortable: "#board-memo",
			    helper: "clone",
			    revert: "invalid",
			    zindex:9999,
			    stop: function(event, ui) {
			    
			     //console.log($('#board-memo').data('options'));
			     
			     $('.ui-draggable:first',$('#board-memo')).transformPreviewCard($('#board-memo').data('options'));
			    }
		      });
        }
        );
      
      var active_tabindex = ($.cookie('active_tabindex_'+menuselector) === null) ? 0 : parseInt($.cookie('active_tabindex_'+menuselector),10);
      
      $('#'+menuselector).accordion({'autoHeight':false,
      	        'icons':false,
      	        'active':active_tabindex,
      	        animated: "bounceslide",
      	        change: function (e, ui) {
      	        var iSection = $(this).find('h3').index(ui.newHeader[0]);
      	        
                $.cookie('active_tabindex_'+menuselector, iSection);
                
                console.log($(this).find('div:eq('+iSection+')').data('xmldeckfile'));
      }}); 
       
       //console.log($.__DATA);
      
       },
      error: function(xhr, ajaxOptions, thrownError){
       alert("Erreur edUI-Menu load", "Status " +xhr.status + " thrownError : " + thrownError);
       
       
                }     
     }); 
  
 }
  
 });//fin ready
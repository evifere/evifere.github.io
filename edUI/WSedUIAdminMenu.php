<?php 
define ("__ACCMODE", "\$.__ADMINCSS");
define ("__SHUFFLE", "false");
include_once('./include/main.inc');


switch($_POST['menu'])
{
case "edui-admin-menu":
 echo (getAdminAccordeon ());

break; 
default:
 echo (getAccordeon ());
break;
}
?>
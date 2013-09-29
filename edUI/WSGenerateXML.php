<?php 
$dirimg = "fruits";
$hideunselect="false";
$modulo = 8;



if (isset($_GET['dirimg']))
    $dirimg = $_GET['dirimg'];

if (isset($_GET['h']))
    $hideunselect = $_GET['h'];
   
if (isset($_GET['m']))
    $modulo = $_GET['m'];
  
   
$xmlout =  "<?xml version=\"1.0\" encoding=\"ISO-8859-1\" ?>\n";

$xmlout .= "<board>\n";

$xmlout .= " <title>".ucfirst($dirimg)."</title>\n";
$xmlout .= " <description>$dirimg</description>\n";
$xmlout .= " <decks>\n";

$dirimg = trim($dirimg);



if ($handle = opendir("./img/$dirimg/")) {
 
 
 $filenames = array();

 while ($filename = readdir($handle) ) 
 {
  if(!($filename === '.' || $filename === '..'))
    $filenames[] = $filename;
 }
 
 sort($filenames);

 
 addDeck($filenames,true,$hideunselect,$modulo,"I"); 
 addDeck($filenames,false,$hideunselect,$modulo,"II"); 
}

$xmlout .= " </decks>\n";
$xmlout .= "</board>\n";


closedir($handle);


function addDeck ($filenames,$b,$hideunselect,$modulo,$indice)
{
global $xmlout,$dirimg;
 
 $iFiles = count($filenames);
 
 $i = 0;
 $iGroup = 0;
 //echo "i= ".$i;
 
 foreach($filenames as $file) {
 
// echo "$i % $modulo= ".($i % $modulo)."\n";
 
 if (($i % $modulo) === 0) 
    {
    if ($i > 0)
       $xmlout .= "  </deck>\n";

    $iGroup ++;
    
    if ($i < $iFiles)  
       $xmlout .= "  <deck hideunselected=\"$hideunselect\" name=\"".ucfirst($dirimg)." $indice-$iGroup\">\n";
    
      
    }
    
 if($file === '.' || $file === '..')
    continue;

 $filename = str_replace('.png','',$file);

 addCouple($file,$filename,$b);

 //if (($i % $modulo) === 0) 
   //  $xmlout .= "  </deck>\n";
 
   
 $i++;
 
 if ($i == $iFiles)
      $xmlout .= "  </deck>\n";

 }

 
}


function addCouple ($xmldeckfile,$filename,$b)
{
global $xmlout,$dirimg;

$xmlout .= "   <couple>\n";

if ($b === true)
   $xmlout .= "    <card><![CDATA[<img src='./img/$dirimg/$filename.png'></img>]]></card>\n";
else
   $xmlout .= "    <card>".ucfirst($filename)."</card>\n";

$xmlout .= "    <card><![CDATA[<img src='./img/$dirimg/$filename.png'></img>]]></card>\n";     
$xmlout .= "   </couple>\n";
}

header('Content-type: text/plain');

echo $xmlout;

?>
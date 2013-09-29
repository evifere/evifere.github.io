<?php

function getArrayDir(&$handledir)
{
 $filenames = array();

 while ($filename = readdir($handledir)) 
  { 
   if(!($file === '.' || $file === '..'))
     $filenames[] = $filename;
  }
 sort($filenames);

 return $filenames;
}

function getMenuOptions ()
{
global $html;

$html = "";	

  
if ($handle = opendir('./xml/')) 
  {loopFiles(getArrayDir($handle),".xml","menuoptions");

  $html .= "<option value=\"__new\">Nouveau Fichier</option>";
 
  }
else
  $html = "erreur ".getcwd();

closedir($handle);

return $html; 
}


function getAdminAccordeon ()
{
global $html;

$html = "";	

if ($handle = opendir('./img/')) 
   loopFiles(getArrayDir($handle),".png","adminimg");
else
  $html = "erreur ".getcwd();

closedir($handle);

return $html; 
}

function loopFiles (&$filenames,$ext,$mode = "normal",$parent_path = "./")
{
global $html;

 $i = 0;
 
 foreach($filenames as $file) {
       
 if($file === '.' || $file === '..')
    continue;

 $filename = str_replace($ext,'',$file);

 
 switch($mode)
  {
   case "menuoptions":
   
    $html .= "<option value=\"$file\">$filename</option>";
    
   break;
   
   case "adminsubimg":
   
    $html .= "<div class=\"cardpreview\" data-url=\"$parent_path/$file\" ></div>";
    
   break;
   
   case "adminimg":
   addHeader($filename);

   $html .=  "<div class=\"cardsection\" title=\"Contenu de $filename\">";
   
   $handlesubdir = opendir("./img/$filename/");
   
   loopFiles(getArrayDir($handlesubdir),".png","adminsubimg","./img/$filename");
   
   closedir($handlesubdir);
   
   $html .= "</div>";
    
   break;
   
   default: 
    addLinks($file,$filename);
   break;
  }
 $i++;
 }
}

function getAccordeon ()
{
global $html;

$html = "";	

if ($handle = opendir('./xml/')) 
   loopFiles(getArrayDir($handle),".xml");
else
  $html = "erreur ".getcwd();

closedir($handle);

return $html; 
}

function addHeader ($val)
{
global $html;

$html .=  "<h3><a href=\"#\">$val</a></h3>";
}

function addLinks ($xmldeckfile,$filename)
{
global $html;

$xmlDoc = new DOMDocument();

if ($xmlDoc->load('./xml/'.$xmldeckfile,LIBXML_NOBLANKS))
 {
 $board = $xmlDoc->getElementsByTagName('board')->item(0);

 if (isset($board))
  {
  $board_title = $board->getElementsByTagName('title')->item(0)->childNodes->item(0)->nodeValue;
  $board_desc = $board->getElementsByTagName('description')->item(0)->childNodes->item(0)->nodeValue;
  }
 
 addHeader($board_title);

 $html .=  "<div title=\"$board_desc\" data-xmldeckfile=\"$xmldeckfile\">";

 $decks = $xmlDoc->getElementsByTagName('decks')->item(0)->getElementsByTagName('deck');

 if (isset($decks))
  { 
  
  if ($decks->length) 
   {
   $iMax = $decks->length;

  
   for($i = 0;$i < $iMax;$i++ )
      {
      $deck = $decks->item($i);
   
      $deckname = $i;
      $deckhideunselected = "true"; 
      $deckdescription = $board_desc;
      
      if ($deck->attributes->length)
         {
         if (!($deck->attributes->getNamedItem ("name") === NULL))
            $deckname = $deck->attributes->getNamedItem ("name")->nodeValue;
         
         if (!($deck->attributes->getNamedItem ("hideunselected") === NULL))
            $deckhideunselected = $deck->attributes->getNamedItem ("hideunselected")->nodeValue;
         
         if (!($deck->attributes->getNamedItem ("description") === NULL))
            $deckdescription = $deck->attributes->getNamedItem ("description")->nodeValue;
         
         }
         
      $html .= "<a title=\"".addslashes($deckdescription)."\" style=\"color:#1d5987;text-decoration:none;\" href=\"#\" onClick=\"$.loadBoard ('$filename','$i','".addslashes($board_title)."','".addslashes($board_desc)."','".addslashes($deckname)."','".addslashes($deckdescription)."',$deckhideunselected,".__SHUFFLE.",".__ACCMODE.");\">$deckname</a><br/>";

      }
   }
  }
 $html .= "</div>";
 }
}



?>
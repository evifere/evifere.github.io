<?php 
ini_set('memory_limit','1000M');

$xmldeckfile= "decouverte.xml";
$nbdeck = 0;
$mode = "load";



if(isset($_GET["xdf"]))
  $xmldeckfile= $_GET["xdf"];
 
if(isset($_POST["xdf"]))
  $xmldeckfile= $_POST["xdf"];

if(isset($_GET["newxdf"]))
  $newxmldeckfile= $_GET["newxdf"];
 
if(isset($_POST["newxdf"]))
  $newxmldeckfile= $_POST["newxdf"];
 
 
if(isset($_GET["nbd"]))
  $nbdeck= $_GET["nbd"];
 
if(isset($_POST["nbd"]))
  $nbdeck= $_POST["nbd"];
 
if(isset($_GET["mode"]))
  $mode= $_GET["mode"];
 
if(isset($_POST["mode"]))
  $mode= $_POST["mode"];


 
header("cache-control: no-cache");
header('Content-Type: text/html; charset=UTF-8'); 

$jsonout = "{}";
    
$xmlDoc = new DOMDocument('1.0', 'iso-8859-1');

$bLoaded = true;

if ( !file_exists ('./xml/'.$newxmldeckfile) && strlen($newxmldeckfile) > 0)
{
 $newxmldeckfile .= '.xml';
 
// $xmlDoc = new DOMDocument('1.0', 'iso-8859-1');

 
 $board = $xmlDoc->createElement ('board');
 
 $title = $xmlDoc->createElement ('title');
 $description  = $xmlDoc->createElement ('description');
 $decks  = $xmlDoc->createElement ('decks');
  
 
 
 $board->appendChild($title);
 $board->appendChild($description);
 $board->appendChild($decks);

 
 $xmlDoc->appendChild($board);

 
  
 //$xmlDoc->loadXml('<board><title/><description></decks></board>');
 
 /*$xmlDoc->formatOutput = true;
 
 if ($xmlDoc->save(__DIR__.'/xml/'.$newxmldeckfile) === false)
     {
     displayUIError("Création échouée". $newxmldeckfile);

     exit(0); 
     }*/

 $xmldeckfile = $newxmldeckfile;    

}
else
{ $bLoaded = $xmlDoc->load('./xml/'.$xmldeckfile,LIBXML_NOBLANKS);}


 
 
if ($bLoaded )
{
if (!isset($board))
   $board = $xmlDoc->getElementsByTagName('board')->item(0);

  

if ($mode === "admin_save")
{
if (!isset($_REQUEST["title"]) || trim($_REQUEST["title"]) === "")
    {
    displayUIError("Titre du tableau vide ". $xmldeckfile);

    exit(0);
    } 
    
 if (!isset($_REQUEST["name"]) || trim($_REQUEST["name"]) === "")
    {
    displayUIError("Nom du deck vide". $xmldeckfile);

    exit(0);
    }     
}

 
if (isset($board))
 {
 if (!isset($title))
    $title =  $board->getElementsByTagName('title');
 
   
   // 
 //$board_title = $title->item(0)->childNodes->item(0)->nodeValue;
 
 $board_title = $title->nodeValue;
 

 if (isset($_REQUEST['title']) && $board_title !== $_REQUEST['title'])
    {
    // $title->item(0)->childNodes->item(0)->nodeValue = $_REQUEST['title']; 
     
     $title->nodeValue = $_REQUEST['title'];
    }

    
 if (!isset( $description))
    $description = $board->getElementsByTagName('description');
 
 
 //$board_desc = $description->item(0)->childNodes->item(0)->nodeValue;

 $board_desc = $description->nodeValue;

 
  
 if (isset($_REQUEST['description']) && $board_desc !== $_REQUEST['description'])
    {
     //$description->item(0)->childNodes->item(0)->nodeValue = $_REQUEST['description']; 
     
     $description->nodeValue = $_REQUEST['description']; 
    }

 }



 
$decks = $xmlDoc->getElementsByTagName('decks')->item(0)->getElementsByTagName('deck');



if (isset($decks))
{ 
if ($_REQUEST['nbd'] == -1 && $mode === "admin_save")
   {$deck = $xmlDoc->createElement ('deck');
    
    
   $nbdeck = 0;
   $xmlDoc->getElementsByTagName('decks')->item(0)->appendChild($deck);
//die('OK'.__LINE__);
   }
else 
    $deck = $decks->item($nbdeck);
 
if ($mode === "load")
    deckToJson ();
  
if ($mode === "admin_save")
{

 
 saveDeck ();

 
}  
  
}
else
 {
 displayUIError("erreur 2 lecture  ". $xmldeckfile);
 }
}
else
 {
 displayUIError("erreur  3 chargement  ". $xmldeckfile);
 }
 
 
 function displayUIError ($msg)
 {
 global $_REQUEST;
 
 //echo "$msg";

  //echo "\n";

 
 $jsonout = "{\"msg\":\"$msg\"}";
 
 echo $jsonout; 
 }

 function displayUIOK ($msg,$nbdeck)
 {
 global $_REQUEST;
 
 //echo "$msg";

  //echo "\n";

 
 $jsonout = "{\"msg\":\"$msg\",\"nbd\":\"$nbdeck\"}";
 
 echo $jsonout; 
 }
 
 
if ($mode === "load")
{ 
header('Content-type: text/json');

echo $jsonout;
}

if ($mode === "admin_save")
{ 
 header('Content-type: text/plain');

 //echo print_r($_REQUEST);

 //echo $saveout;

 displayUIOK($saveout,$nbdeck);
}

function remove_children(&$node) {
  while ($node->firstChild) {
    while ($node->firstChild->firstChild) {
      remove_children($node->firstChild);
    }
    $node->removeChild($node->firstChild);
  }
}



function saveDeck ()
{
global $deck,$saveout,$_REQUEST,$xmlDoc,$xmldeckfile,$board_desc;


/* if(!($deck->attributes->getNamedItem ("name") === NULL))
 {*/
 $deckname = $deck->attributes->getNamedItem ("name")->nodeValue;
 
 if (isset($_REQUEST["name"]) && $_REQUEST["name"] !== $deckname)
      $deck->setAttribute("name",$_REQUEST["name"]);
 //}      

 if (isset($_REQUEST["subdescription"]) && $_REQUEST["subdescription"] !== $board_desc)
    $deck->setAttribute("description",$_REQUEST["subdescription"]);  
 else 
    $deck->setAttribute("description",$board_desc);
 
 if (isset($_REQUEST["hideunselected"]) && $_REQUEST["hideunselected"] !== "")
    $deck->setAttribute("hideunselected",$_REQUEST["hideunselected"]);  
 else 
    $deck->setAttribute("hideunselected","false");
    
    
 
remove_children($deck);

$cardsarray = $_REQUEST ['deck'];

$iCards = count($cardsarray);

for ($i = 0;$i < $iCards;++$i)
{
 
 
  $new_couple = $xmlDoc->createElement ('couple');
    //createCDataSection
  $new_card = $xmlDoc->createElement ('card');
  $new_card->appendChild($xmlDoc->createCDataSection($cardsarray[$i]));
  
  $new_card2 = $xmlDoc->createElement ('card');
 
 $new_card2->appendChild($xmlDoc->createCDataSection($cardsarray[($i + 1)]));

 
  
  $new_couple->appendChild($new_card);
  $new_couple->appendChild($new_card2);
  
  
  $deck->appendChild($new_couple);
//  $new_couple->createElement ('card', $cardsarray[$i]);
 // $new_couple->createElement ('card', $cardsarray[$i+1]);
    
    
 
 
  $i++;
}


$xmlDoc->formatOutput = true;

 if ($xmlDoc->save(__DIR__.'/xml/'.$xmldeckfile) === false)
     $saveout = "KO ".$xmldeckfile;
 else
     $saveout = "OK ".$xmldeckfile;

}

function deckToJson ()
{
 global $deck,$jsonout;
 
 
 if ($deck->childNodes->length) 
   { 
   $jsonout = '{'; 
   $cp = 1;
   
   foreach($deck->childNodes as $couple) 
     {
     if ($couple->childNodes->length)
        {
         $jsonout .= "\"couple".$cp."\":";
   
          $jsonout .= "[";

        $cd = 1;
          
        foreach($couple->childNodes as $card) 
          {
            
          if (strlen(trim($card->nodeValue)) > 0)
             {
             $jsonout .= '"'.addslashes(str_replace("'","\"",$card->nodeValue)).'"';
             
             
             if ($cd < $couple->childNodes->length)
                 $jsonout .= ",";
             
             $cd++;
             }
          }
          
          $jsonout .= "]";
  
          if ($cp < $deck->childNodes->length)
             $jsonout .= ",";
     
        $cp ++;  
        }
     }//couple->childNodes
     $jsonout .= "}";
  }
}

?>
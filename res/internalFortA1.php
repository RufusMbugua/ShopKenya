<?php

$con = mysql_connect("localhost","root","");
if (!$con)
  {
  die('Could not connect: ' . mysql_error());
  }

mysql_select_db("fortification", $con);

$productType = $_POST['productType'];
$purchaseOrder = $_POST['purchaseOrder'];
$manufacturer =$_POST['manufacturer'];
$inspectedBy =$_POST['inspectedBy'];
$date =$_POST['date'];
$quantity =$_POST['quantity'];
$integrityObservation =$_POST['integrityObservation'];
if(!$_POST['lotNumber']){
$lotNumber ='';
}else{
	$lotNumber=$_POST['lotNumber'];
}


$lotObservation =$_POST['lotObservation'];

if($_POST['productionDate']==''){
$productionDate ='';
}else{
	$productionDate=$_POST['productionDate'];
}

$productObservation =$_POST['productObservation'];

if(!$_POST['expirationDate']){
$expirationDate ='';
}else{
	$expirationDate=$_POST['expirationDate'];
}

$expirationObservation =$_POST['expirationObservation'];


if(!$_POST['contentClaimed']){
$contentClaimed ='';
}else{
	$contentClaimed=$_POST['contentClaimed'];
}

$contentObservation =$_POST['contentObservation'];
$certOfanalysis =$_POST['certOfanalysis'];
$certificateObservation =$_POST['certificateObservation'];
$other =$_POST['other'];
$otherObservation =$_POST['otherObservation'];
$accepted =$_POST['accepted'];

$actionsTaken =$_POST['actionsTaken'];
$receivedBy =$_POST['receivedBy'];
$inputDate  =$_POST['inputDate'];

//revert checkbox values
if($lotNumber=='on'){
	$lotNumber=1;
}else{
	$lotNumber=0;
}

if($productionDate=='on'){
	$productionDate=1;
}else{
	$productionDate=0;
}

if($expirationDate=='on'){
	$expirationDate=1;
}else{
	$expirationDate=0;
}

if($contentClaimed=='on'){
	$contentClaimed=1;
}else{
	$contentClaimed=0;
}

if($certOfanalysis=='on'){
	$certOfanalysis=1;
}else{
	$certOfanalysis=0;
}



$query="INSERT INTO internalfortifieda1 (productType,manufacturerID , inspectorID , internalFortifiedA1date , purchaseOrdernumber , quantity , lotNumber , productionDate , expirationDate , contentClaimedinLabel , certificateOfanalysis , quantityObservation , lotNumberObservation , productiondateObservation , expirationDateObservation , contentClaimedinLab , certificateofAnalysisobservation , other , status , reasonsForrejection , receivedBy , dateReceived , checksID ) VALUES($productType, $purchaseOrder,$manufacturer,$inspectedBy,'$date',$quantity,'$integrityObservation','$lotNumber','$lotObservation','$productionDate','$productObservation','$expirationDate','$expirationObservation','$contentClaimed','$contentObservation','$certOfanalysis','$certificateObservation','$other','$otherObservation','$accepted','$actionsTaken','$receivedBy','$inputDate' )";

//echo $query;

//exit;

if (!mysql_query($query,$con))
  {
  die('Error: ' . mysql_error());
  }
echo "1 record added";

mysql_close($con);

?>
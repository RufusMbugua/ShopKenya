<?php
$con = mysql_connect("localhost","root","");
if (!$con)
  {
  die('Could not connect: ' . mysql_error());
  }

mysql_select_db("fortification", $con);
$saltFactory=$_POST['saltFactory'];
$year=$_POST['year'];
$fortifiedDate=$_POST['fortifiedDate'];
$fortifiedWeight=$_POST['fortifiedWeight'];
$compoundWeight=$_POST['compoundWeight'];
$finalWeight=$_POST['finalWeight'];
$startTime=$_POST['startTime'];

$iodineWeight=$_POST['iodineWeight'];
$qcReview=$_POST['qcReview'];


$querr="INSERT INTO internalfortifiedb1 (factoryID,year,internalFortifiedB1date,weightofFiller,weightofTheIodinecompound,finalWeight,premixPreparationend,fianlPremixweight,qcReview) VALUES ($saltFactory,$year,$fortifiedDate,$fortifiedWeight,$compoundWeight,$finalWeight,$startTime,$iodineWeight,'$qcReview')";
if (!mysql_query($querr,$con))
  {
  die('Error: ' . mysql_error());
  }
echo "1 record added";

mysql_close($con);

?>

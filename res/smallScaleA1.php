<?php
$con = mysql_connect("localhost","root","");
if (!$con)
  {
  die('Could not connect: ' . mysql_error());
  }

mysql_select_db("fortification", $con);

$harvestYear=$_POST['harvestYear'];
$controlDate=$_POST['controlDate'];
$supplierName=$_POST['supplierName'];
$controlKg=$_POST['controlKg'];
$controlLot=$_POST['controlLot'];
$iodineContent=$_POST['iodineContent'];
$amountUsed=$_POST['amountUsed'];

$premixAmount=$_POST['premixAmount'];


$querr= "INSERT INTO smallscalea1 (harvestYear,smallScaleA1date,supplierName,smallScaleA1kg,lotNumber,contentofIodine,amountUsed,premixProduced) VALUES($harvestYear,$controlDate,'$supplierName',$controlKg,'$controlLot','$iodineContent','$amountUsed',$premixAmount)";
if (!mysql_query($querr,$con))
  {
  die('Error: ' . mysql_error());
  }
echo "1 record added";

mysql_close($con);

?>

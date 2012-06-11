<?php
$con = mysql_connect("localhost","root","");
if (!$con)
  {
  die('Could not connect: ' . mysql_error());
  }

mysql_select_db("fortification", $con);


$iodineDate1=$_POST['iodineDate1'];
$iodineSupplier1=$_POST['iodineSupplier1'];
$iodineDrums=$_POST['iodineDrums'];
$iodineLot=$_POST['iodineLot'];
$iodineExpiration=$_POST['iodineExpiration'];
$iodineDispatched=$_POST['iodineDispatched'];
$iodineReceipt=$_POST['iodineReceipt'];
$identification=$_POST['identification'];
$iodineKgs=$_POST['iodineKgs'];
$iodineIdentification=$_POST['iodineIdentification'];
$iodineMgs=$_POST['iodineMgs'];
$reportingDate=$_POST['reportingDate'];
$reportersName=$_POST['reportersName'];
$reportersSignature=$_POST['reportersSignature'];

$querr="INSERT INTO internalfortifieda2 (internalFortifiedA2date,supplierCOAnumber,noOfdrums,receivedLotID,expirationDate,dispatchedLotID,receiptandQCreview,receivedIdentification,receivedIodine,dispatchedIdentification,dispatchedIodine,dateOfreporting,name,checksID) VALUES($iodineDate1,'$iodineSupplier1',$iodineDrums,'$iodineLot',$iodineExpiration,'$iodineDispatched','$iodineReceipt','$identification',$iodineKgs,'$iodineIdentification',$iodineMgs,$reportingDate,'$reportersName',$reportersSignature)";
if (!mysql_query($querr,$con))
  {
  die('Error: ' . mysql_error());
  }
echo "1 record added";

mysql_close($con);

?>

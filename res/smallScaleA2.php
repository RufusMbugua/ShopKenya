<?php
$con = mysql_connect("localhost","root","");
if (!$con)
  {
  die('Could not connect: ' . mysql_error());
  }

mysql_select_db("fortification", $con);

$premixharvestYear=$_POST['premixharvestYear'];
$premixDate=$_POST['premixDate'];
$premixSupplier=$_POST['premixSupplier'];
$premixKg=$_POST['premixKg'];
$premixLot=$_POST['premixLot'];
$premixContent=$_POST['premixContent'];
$premixAmount=$_POST['premixAmount'];

$premixSalt=$_POST['premixSalt'];


$querr= "INSERT INTO smallscalea2 (harvestYear,smallScaleA2date,supplierName,smallScaleA2kg,lotNumber,contentOfIodine,amountUsed,saltProduced) VALUES($premixharvestYear,$premixDate,'$premixSupplier',$premixKg,$premixLot,$premixContent,$premixAmount,$premixSalt)";
if (!mysql_query($querr,$con))
  {
  die('Error: ' . mysql_error());
  }
echo "1 record added";

mysql_close($con);

?>

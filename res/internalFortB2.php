<?php
$con = mysql_connect("localhost","root","");
if (!$con)
  {
  die('Could not connect: ' . mysql_error());
  }

mysql_select_db("fortification", $con);


$checkupDate=$_POST['checkupDate'];
$device=$_POST['device'];
$condition=$_POST['condition'];
$observations=$_POST['observations'];
$checkupName=$_POST['checkupName'];

$querr= "INSERT INTO internalfortifiedb2 (checkDate,equipmentID,condition,observations,nameSignature) VALUES('$checkupDate',$device,$condition,'$observations','$checkupName')";
if (!mysql_query($querr,$con))
  {
  die('Error: ' . mysql_error());
  }
echo "1 record added";

mysql_close($con);

?>

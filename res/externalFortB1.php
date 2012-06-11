<?php
$con = mysql_connect("localhost","root","");
if (!$con)
  {
  die('Could not connect: ' . mysql_error());
  }

mysql_select_db("fortification", $con);

$visitDate=$_POST['visitDate'];
$visitTime=$_POST['visitTime'];
$oilFactory=$_POST['oilFactory'];

$phealthOfficer=$_POST['phealthOfficer'];
$auditorName=$_POST['auditorName'];
$auditorPosition=$_POST['auditorPosition'];
$auditorSignature=$_POST['auditorSignature'];
$auditorOpening=$_POST['auditorOpening'];
$auditorClosing=$_POST['auditorClosing'];


$querr= "INSERT INTO externalfortifiedb1 (externalFortifiedB1date,factoryID,inspectorID, time, name, position, signature, opening,closing) VALUES($visitDate,$visitTime,$oilFactory,$phealthOfficer,'$auditorName','$auditorPosition','$auditorSignature','$auditorOpening','$auditorClosing')";
if (!mysql_query($querr,$con))
  {
  die('Error: ' . mysql_error());
  }
echo "1 record added";

mysql_close($con);

?>

<?php
$con = mysql_connect("localhost","root","");
if (!$con)
  {
  die('Could not connect: ' . mysql_error());
  }

mysql_select_db("fortification", $con);


$productionTime=$_POST['productionTime'];
$saltProduced=$_POST['saltProduced'];
$premixUsed=$_POST['premixUsed'];
$saltFortified=$_POST['saltFortified'];
$notes=$_POST['notes'];
$comments=$_POST['comments'];
$logDate=$_POST['logDate'];
$logDate1=$_POST['logDate1'];
$responsible=$_POST['responsible'];
$sigNature=$_POST['sigNature'];


$querr= "INSERT INTO internalfortifiedc1 (shift,saltProduced,premixUsed,saltFortified,notes,comments,internalFortifiedC1date,iodineResults,personResponsible,signature) VALUES($productionTime,$saltProduced,$premixUsed,$saltFortified,'$notes','$comments','$logDate',$logDate1,$responsible','$sigNature')";
if (!mysql_query($querr,$con))
  {
  die('Error: ' . mysql_error());
  }
echo "1 record added";

mysql_close($con);

?>

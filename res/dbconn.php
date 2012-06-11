<?php
$dbHost="localhost";
$dbName="fortification";
$dbUser="root";
$dbPass="";
@$con= new MySQLi($dbHost,$dbUser,$dbPass,$dbName);//establish a database connection

$GLOBALS=array($con);
if(mysqli_connect_errno()) //check if connection is established
{
	echo 'Error:could not contact the database';
	exit;
}

?>
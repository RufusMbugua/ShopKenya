<?php
$con = mysql_connect("localhost","root","");
if (!$con)
  {
  die('Could not connect: ' . mysql_error());
  }

mysql_select_db("fortification", $con);

$inspectionRegistry=$_POST['inspectionRegistry'];
$inspectionsDate=$_POST['inspectionsDate'];
$inspecTor=$_POST['inspecTor'];
$iodizationCenter=$_POST['iodizationCenter'];
$inventory=$_POST['inventory'];
$proportion=$_POST['proportion'];
$sufficient=$_POST['sufficient'];
$records=$_POST['records'];
$premix=$_POST['premix'];
$storage=$_POST['storage'];
$packaging=$_POST['packaging'];
$potassium=$_POST['potassium'];
$precords=$_POST['precords'];
$fifo=$_POST['fifo'];
$sampleNumber=$_POST['sampleNumber'];
$iodineContent=$_POST['iodineContent'];
$processedSamples=$_POST['processedSamples'];
$iodineContents=$_POST['iodineContents'];
$averageSample=$_POST['averageSample'];
$averageSamples=$_POST['averageSamples'];
$nonCompliances=$_POST['nonCompliances'];
$improvementSuggestions=$_POST['improvementSuggestions'];
$insPector=$_POST['insPector'];
$factoryRepresentative=$_POST['factoryRepresentative'];
$daTe=$_POST['daTe'];
$inspectorSignature=$_POST['inspectorSignature'];
$signaturefRepresentative=$_POST['signaturefRepresentative'];
$signatureDate=$_POST['signatureDate'];
$supervisorName=$_POST['supervisorName'];
$signatureSupervisor=$_POST['signatureSupervisor'];
$supervisorDate=$_POST['supervisorDate'];


$querr= "INSERT INTO externaliodizationb1 (inspectionRegistry,inspectionDate,inspectorID,iodizationCenterID,inventoryUptoDate,sufficientIodate,storageAdequate,potassiumIodateAmount,recordsofPremix,fifoSystem,saltpremixProportion,recordsofIodizationsalt,saltpackagedAdequately,saltSamplesID,saltReprocessedsamplesID,nonCompliances,suggestionsForimprovement,inspectorSignature,factoryRepresentativeID,factoryRepdate,factoryRepsignature,inspectorDate,supervisorID,) VALUES('$inspectionRegistry',$inspectionsDate,$inspecTor,$iodizationCenter,$inventory,$proportion,$sufficient,$records,$premix,$storage,$packaging,$potassium,$precords,$fifo,$sampleNumber,$iodineContent,$processedSamples,$iodineContents,$averageSample,$averageSamples,$nonCompliances,$improvementSuggestions,$insPector,$factoryRepresentative,$signatureDate,$supervisorName,$signatureSupervisor,$supervisorDate)";
if (!mysql_query($querr,$con))
  {
  die('Error: ' . mysql_error());
  }
echo "1 record added";

mysql_close($con);

?>

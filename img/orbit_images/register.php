<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Registration Form</title>

<link rel="stylesheet" href="../css/layout.css" type="text/css">
<link rel="stylesheet" href="../css/inline.css" type="text/css">
<link rel="stylesheet" href="../css/orbit.css" type="text/css">
<link rel="stylesheet" href="../css/awesomebuttons.css" type="text/css">
<link rel="stylesheet" href="css/form.css" type="text/css">

<!-- Attach necessary JS -->
        <script type="text/javascript" src="../js/inline.js"></script>
        <script type="text/javascript" src="../js/form.js"></script>
		<script type="text/javascript" src="../js/jquery-1.5.1.min.js"></script>
        <script type="text/javascript" src="../js/jquery.orbit.js"></script>
    	<script language="JavaScript" src="../js/gen_validatorv31.js" type="text/javascript"></script>
    
    
<style type="text/css">
body {
	font-family:"Lucida Grande", "Lucida Sans Unicode", Verdana, Arial, Helvetica, sans-serif;
	font-size:12px;
}
.registration_form {
	margin:0 auto;
	width:500px;
	padding:14px;
}
label {
	width: 10em;
	float: left;
	margin-right: 0.5em;
	display: block
}
.submit {
	float:right;
}
fieldset {
	background:#EBF4FB none repeat scroll 0 0;
	border:2px solid #B7DDF2;
	width: 500px;
}
legend {
	color: #fff;
	background: #80D3E2;
	border: 1px solid #781351;
	padding: 2px 6px
}
.elements {
	padding:10px;
}
p {
	border-bottom:1px solid #B7DDF2;
	color:#666666;
	font-size:11px;
	margin-bottom:20px;
	padding-bottom:10px;
}
a{
    color:#0099FF;
font-weight:bold;
}

/* Box Style */


 .success, .warning, .errormsgbox, .validation {
	border: 1px solid;
	margin: 0 auto;
	padding:10px 5px 10px 50px;
	background-repeat: no-repeat;
	background-position: 10px center;
     font-weight:bold;
     width:450px;
     
}

.success {
   
	color: #4F8A10;
	background-color: #DFF2BF;
	background-image:url('../img/success.png');
}
.warning {

	color: #9F6000;
	background-color: #FEEFB3;
	background-image: url('../img/warning.png');
}
.errormsgbox {
 
	color: #D8000C;
	background-color: #FFBABA;
	background-image: url('../img/error.png');
	
}
.validation {
 
	color: #D63301;
	background-color: #FFCCBA;
	background-image: url('../img/error.png');
}



</style>

</head>
<body>
<header id="pageheader">

<nav id="pagenavigation" style=><!-- Page Navigation -->
<ul>
<li><a href="../index.php" class="awesome large blue" >Home</a></li>
<li><a href="routes.php" class="awesome large blue" >Routes</a></li>
<li><a href="profile.php" class="awesome large blue" >Profile</a></li>
</ul>
</nav>

<div class="baseline">
</div>

<image src="../img/tusafiri_logo.png" id="logo">
</image>
<p></p>


</header>

<?php



include ('database_connection.php');
if (isset($_POST['formsubmitted'])) {
    $error = array();//Declare An Array to store any error message  
    if (empty($_POST['fname'])) {//if no name has been supplied 
        $error[] = 'Please Enter a Firstname ';//add to array "error"
    } else {
        $fname = $_POST['fname'];//else assign it a variable
		
    }
	if (empty($_POST['sname'])) {//if no name has been supplied 
        $error[] = 'Please Enter a Surname ';//add to array "error"
    } else {
        $sname = $_POST['sname'];//else assign it a variable
		
    }

    if (empty($_POST['e-mail'])) {
        $error[] = 'Please Enter your Email ';
    } else {


        if (preg_match("/^([a-zA-Z0-9])+([a-zA-Z0-9\._-])*@([a-zA-Z0-9_-])+([a-zA-Z0-9\._-]+)+$/", $_POST['e-mail'])) {
           //regular expression for email validation
            $Email = $_POST['e-mail'];
        } else {
             $error[] = 'Your EMail Address is invalid  ';
        }


    }


    if (empty($_POST['Password'])) {
        $error[] = 'Please Enter Your Password ';
    } else {
        $Password = $_POST['Password'];
    }
	if (empty($_POST['nationalID'])) {
        $error[] = 'Please Enter your Natinal ID ';
    } else {
        $nationalID = $_POST['nationalID'];//else assign it a variable
	}
	
	if (empty($_POST['phone'])) {
        $error[] = 'Please Enter your Phone Number ';
    } else {
        $phone = $_POST['phone'];//else assign it a variable
	}
	//if(empty($_SESSION['6_letters_code'] ) ||
	 // strcasecmp($_SESSION['6_letters_code'], $_POST['6_letters_code']) != 0)
	//{
	//Note: the captcha code is compared case insensitively.
	//if you want case sensitive match, update the check above to
	// strcmp()
		//$error[]= "The captcha code does not match!";
	//}
	
    if (empty($error)) //send to Database if there's no error '

    { // If everything's OK...

        // Make sure the email address is available:
        $query_verify_email = "SELECT emailAddress FROM users  WHERE emailAddress ='$Email'";
        $result_verify_email = mysqli_query($dbc, $query_verify_email);
        if (!$result_verify_email) {//if the Query Failed ,similar to if($result_verify_email==false)
            echo ' User exists';
        }
		

        if (mysqli_num_rows($result_verify_email) == 0) { // IF no previous user is using this email .


            // Create a unique  activation code:
            $activation = md5(uniqid(rand(), true));


            $query_insert_user = "INSERT INTO `db55436`.`users` (`userID`, `titleID`, `userTypeID`, `userSname`, `userOthername`, `userphoneNo`,`emailAddress`,`passWord`,`Activation`)
										 VALUES('$nationalID', '1', '1','$fname','$sname' ,'$phone' ,'$Email', '$Password','$activation')";


            $result_insert_user = mysqli_query($dbc, $query_insert_user);
            if (!$result_insert_user) {
                echo 'Query Failed ';
            }

            if (mysqli_affected_rows($dbc) == 1) { //If the Insert Query was successfull.


                // Send the email:
                $message = " To activate your account, please click on this link:\n\n";
                $message .= "http://192.168.170.15/54571/pages/activate.php?email='.urlencode($Email).'&key=$activation";
                mail($Email, 'Registration Confirmation', $message, 'From: tusafiri@gmail.com');

                // Flush the buffered output.


                // Finish the page:
                echo '<div class="success">Thank you for
registering! A confirmation email
has been sent to '.$Email.' Please click on the Activation Link to Activate your account </div>';


            } else { // If it did not run OK.
                echo '<div class="errormsgbox">You could not be registered due to a system
error. We apologize for any
inconvenience.</div>';
            }

        } else { // The email address is not available.
            echo '<div class="errormsgbox" >That email
address has already been registered.
</div>';
        }

    } else {//If the "error" array contains error msg , display them
        
        

echo '<div class="errormsgbox"> <ol>';
        foreach ($error as $key => $values) {
            
            echo '	<li>'.$values.'</li>';


       
        }
        echo '</ol></div>';

    }
  
    mysqli_close($dbc);//Close the DB Connection

} // End of the main Submit conditional.



?>


<form action="register.php" method="post" class="registration_form">
  <fieldset>
    <legend>Member Details</legend>

    <p>Create A new Account <span style="background:#EAEAEA none repeat scroll 0 0;line-height:1;margin-left:210px;;padding:5px 7px;">Already a member? <a href="login.php">Log in</a></span> </p>
    <div class="elements">
     <label for="name">Select Title</label>
                            <?php
                                mysql_connect("localhost", "54571", "54571") or die("Connection Failed");
                                mysql_select_db("db54571")or die("Connection Failed");
                                $query = "SELECT titleType FROM title";
                                $result = mysql_query($query);
                             ?>
    
    <select id="txttitle" name="txttitle" value=''>
                              <?php
                                 while ($line = mysql_fetch_array($result, MYSQL_ASSOC)) {
                             ?>
                              <option><?php echo $line['titleType'];?></option>
                              <?php
                               }
                              ?>
      </select>
    </div>
    <div class="elements">
      <label for="name">Firstname :</label>
      <input type="text" id="fname" name="fname" size="25" value='<?php echo htmlentities($fname)?>' />
    </div>
    <div class="elements">
      <label for="name">Surname :</label>
      <input type="text" id="sname" name="sname" size="25" value='<?php echo htmlentities($sname)?>' />
    </div>
  </fieldset>
  <fieldset>
    <legend>Account Details </legend>
    <div class="elements">
      <label for="Telephone">Phone:</label>
      <input type="text" id="phone" name="phone" size="8" value='<?php echo htmlentities($phone)?>' />
    </div>
    <div class="elements">
      <label for="e-mail">E-mail :</label>
      <input type="text" id="e-mail" name="e-mail" size="25" value='<?php echo htmlentities($Email)?>'/>
    </div>
    <div class="elements">
      <label for="Password">Password:</label>
      <input type="password" id="Password" name="Password" size="25" value='<?php echo htmlentities($Password)?>' />
    </div>
    <div class="elements">
      <label for="National ID">National ID:</label>
      <input type="text" id="nationalID" name="nationalID" size="8" value='<?php echo htmlentities($nationalID)?>' />
    </div>
    <div>
    <p>
<img src="captcha_code_file.php?rand=<?php echo rand(); ?>" id='captchaimg' ><br>
<label for='message'>Enter the code above here :</label><br>
<input id="6_letters_code" name="6_letters_code" type="text"><br>
<small>Can't read the image? click <a href='javascript: refreshCaptcha();'>here</a> to refresh</small>
</p>
    </div>
    <div class="submit">
     <input type="hidden" name="formsubmitted" value="TRUE" />
      <input type="submit" value="Register" />
    </div>
  </fieldset>
</form>

<script language='JavaScript' type='text/javascript'>
function refreshCaptcha()
{
	var img = document.images['captchaimg'];
	img.src = img.src.substring(0,img.src.lastIndexOf("?"))+"?rand="+Math.random()*1000;
}
</script>
<script type="text/javascript" src="../js/form.js"></script>
Go Back to <a href="#">Account Verification on sign up</a>
</body>
</html>

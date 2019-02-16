<?php
// Load configuration as an array. Use the actual location of your configuration file
// $config = parse_ini_file('config.ini'); 

// // Try and connect to the database
// $connection = mysqli_connect('localhost',$config['username'],$config['password'],$config['dbname']);

// // If connection was not successful, handle the error
// if($connection === false) {
//     // Handle error - notify administrator, log to a file, show an error screen, etc.
//       die('Could not connect: ' . mysql_error());
// }else
// {
//       // $result = db_query("INSERT INTO `users` (`name`,`email`) VALUES ('John Doe','john.doe@gmail.com')");
//       mysql_select_db($config['dbname'], $con);

//   $users_name = $_POST['name'];
//   $users_email = $_POST['email'];
//   $users_website = $_POST['website'];
//   $users_comment = $_POST['comment'];

//   $users_name = mysql_real_escape_string($users_name);
//   $users_email = mysql_real_escape_string($users_email);
//   $users_website = mysql_real_escape_string($users_website);
//   $users_comment = mysql_real_escape_string($users_comment);

  

//   $query = "
//   INSERT INTO $config['dbname'].`signup` (`id`, `name`, `email`, `website`,
//         `comment`, `timestamp`, `articleid`) VALUES (NULL, '$users_name',
//         '$users_email', '$users_website', '$users_comment',
//         CURRENT_TIMESTAMP, '$articleid');";

//   mysql_query($query);


//   mysql_close($con);
// }

// check if fields passed are empty
if(empty($_POST['FirstName'])  		||
   empty($_POST['Email']))
   {
	echo "No arguments Provided!";
	return false;
   }

$title = $_POST['Title'];	
$first_name = $_POST['FirstName'];
$family_name = $_POST['FamilyName'];
$organisation = $_POST['Organisation'];
$position = $_POST['Position'];
$postal_address = $_POST['Postaladdress'];
$post_code = $_POST['PostalCode'];
$city = $_POST['City'];
$country = $_POST['Country'];
$phone = $_POST['Phone'];
$mobile = $_POST['Mobile'];
$fax = $_POST['Fax'];

$email_address = $_POST['Email'];


if(isset($_POST['Abstract'])){$Abstract = $_POST['Abstract'];}else{$Abstract = '';}


if(isset($_POST['RegularRate'])){$FullConferenceRate = $_POST['RegularRate'];}else{$FullConferenceRate = '';}

if(isset($_POST['DailyRate'])){$DailyConferenceRate = $_POST['DailyRate'];}else{$DailyConferenceRate = '';}

if(isset($_POST['StudentRate'])){$StudentRate = $_POST['StudentRate'];}else{$StudentRate = '';}


// $AbstractYes = $_POST['AbstractYes'];
// $AbstractNo  = $_POST['AbstractNo'];
// $RegularRateEarly = $_POST['RegularRateEarly'];
// $RegularRateEarly = $_POST['RegularRateEarly'];
// $DailyRateMon = $_POST['DailyRateMon'];
// $DailyRateTues = $_POST['DailyRateTues'];
// $StudentRate = $_POST['StudentRate'];
$AdditionalMessage = $_POST['AdditionalMessage'];

$registrationNo = rand(1, 1000000);
	
// create email body and send it	
// $to = 'ICAAMailbox@aol.com, '.$email_address; // put your email
// $email_subject = "FOCUS ON WOMEN IN ADDICTION IN THE 2020'S conference registration";
$imgSrc   = 'http://www.womeninaddiction.com/images/logo.png'; // Change image src to your site specific settings 
$imgDesc  = 'ICAA'; // Change Alt tag/image Description to your site specific settings 
$imgTitle = 'ICAA'; // Change Alt Title tag/image title to your site specific settings 

$imgSrc2   = 'http://www.womeninaddiction.com/images/wocad-logo.png'; // Change image src to your site specific settings 
$imgDesc2  = 'WOCAD'; // Change Alt tag/image Description to your site specific settings 
$imgTitle2 = 'WOCAD'; // Change Alt Title tag/image title to your site specific settings 

$message = '<!DOCTYPE HTML>'. 
'<head>'. 
'<meta http-equiv="content-type" content="text/html">'. 
'<title>Email notification</title>'. 
'</head>'. 
'<body>'. 
'<div id="header" style="width: 80%;height: 160px;margin: 0 auto;padding: 10px;color: #fff;text-align: center;background-color: #E0E0E0;font-family: Open Sans,Arial,sans-serif;">'. 
   '<img height="160" width="177" style="border-width:0" src="'.$imgSrc.'" alt="'.$imgDesc.'" title="'.$imgTitle.'">'. 
   '<img height="160" width="177" style="border-width:0" src="'.$imgSrc2.'" alt="'.$imgDesc2.'" title="'.$imgTitle2.'">'. 
'</div>'. 

'<div id="outer" style="width: 80%;margin: 0 auto;margin-top: 10px;">'.  
   '<div id="inner" style="width: 78%;margin: 0 auto;background-color: #fff;font-family: Open Sans,Arial,sans-serif;font-size: 13px;font-weight: normal;line-height: 1.4em;color: #444;margin-top: 10px;">'. 
       '<h1>Thank you for registering for the conference.</h1>'. 
       '<p><strong>Payment should be made by bank transfer and can be made in <br />Euros, GB Pounds, US Dollars or Swiss Francs.</strong></p>'.
        '<p>Please use the account on the payment page appropriate to you and use the reference number in your email when paying for your conference place.</p>'.
        
       '<p>Payment information can be found at the <a href="http://www.womeninaddiction.com/payment.html">Conference Payment Page</a>.</p>'. 

       '<table>'.
       '<tr>'.
       '<td><p><strong>Registration Number: </strong></p></td>'.
       '<td><p>REG-'.$registrationNo.
       '</p></td>'.
       '</tr>'.

       '<tr>'.
       '<td><p><strong>Title: </strong></p></td>'.
       '<td><p>'.$title.
       '</p></td>'.
       '</tr>'.

       '<tr>'.
       '<td><p><strong>First Name: </strong></p></td>'.
       '<td><p>'.$first_name.
       '</p></td>'.
       '</tr>'.

       '<tr>'.
       '<td><p><strong>Family Name: </strong></p></td>'.
       '<td><p>'.$family_name.
       '</p></td>'.
       '</tr>'.

       '<tr>'.
       '<td><p><strong>Organisation: </strong></p></td>'.
       '<td><p>'.$organisation.
       '</p></td>'.
       '</tr>'.

       '<tr>'.
       '<td><p><strong>Position: </strong></p></td>'.
       '<td><p>'.$position.
       '</p></td>'.
       '</tr>'.

       '<tr>'.
       '<td><p><strong>Postal Address: </strong></p></td>'.
       '<td><p>'.$postal_address.
       '</p></td>'.
       '</tr>'.

       '<tr>'.
       '<td><p><strong>Post Code: </strong></p></td>'.
       '<td><p>'.$post_code.
       '</p></td>'.
       '</tr>'.

       '<tr>'.
       '<td><p><strong>City: </strong></p></td>'.
       '<td><p>'.$city.
       '</p></td>'.
       '</tr>'.

       '<tr>'.
       '<td><p><strong>Country: </strong></p></td>'.
       '<td><p>'.$country.
       '</p></td>'.
       '</tr>'.

       '<tr>'.
       '<td><p><strong>Phone: </strong></p></td>'.
       '<td><p>'.$phone.
       '</p></td>'.
       '</tr>'.

       '<tr>'.
       '<td><p><strong>Fax: </strong></p></td>'.
       '<td><p>'.$fax.
       '</p></td>'.
       '</tr>'.

       '<tr>'.
       '<td><p><strong>Email: </strong></p></td>'.
       '<td><p>'.$email_address.
       '</p></td>'.
       '</tr>'.

       '<tr>'.
       '<td><p><strong>Mobile: </strong></p></td>'.
       '<td><p>'.$mobile.
       '</p></td>'.
       '</tr>'.

       '<tr>'.
       '<td><p><strong>Desire to submit abstract for oral or poster presentation: </strong></p></td>'.
       '<td><p>'.$Abstract.
       '</p></td>'.
       '</tr>'.

       '<tr>'.
       '<td><p><strong>Registration fee Full Conference Rate: </strong></p></td>'.
       '<td><p>'.$FullConferenceRate.
       '</p></td>'.
       '</tr>'.

       '<tr>'.
       '<td><p><strong>Registration fee Daily Rate: </strong></p></td>'.
       '<td><p>'.$DailyConferenceRate.
       '</p></td>'.
       '</tr>'.

       '<tr>'.
       '<td><p><strong>Registration fee Student Rate: </strong></p></td>'.
       '<td><p>'.$StudentRate.
       '</p></td>'.
       '</tr>'.

       '<tr>'.
       '<td><p><strong>Additional Message: </strong></p></td>'.
       '<td><p>'.$AdditionalMessage.
       '</p></td>'.
       '</tr>'.
       '</table>'.
   '</div>'.   
'</div>'. 

'<div id="footer" style="width: 80%;height: 40px;margin: 0 auto;text-align: center;padding: 10px;font-family: Verdena;background-color: #E2E2E2;">'. 
   'All rights reserved ICAA.ch 2016'. 
'</div>'. 
'</body>'; 

/*EMAIL TEMPLATE ENDS*/ 


$to      = 'womeninaddiction@gmail.com, '.$email_address;             // give to email address 
$subject = 'FOCUS ON WOMEN IN ADDICTION IN THE 2020\'S conference registration';  //change subject of email 
$from    = 'conference-registration@womeninaddiction.com';                           // give from email address 

// mandatory headers for email message, change if you need something different in your setting. 
$headers  = "From: " . $from . "\r\n"; 
$headers .= "Reply-To: ". $from . "\r\n"; 
$headers .= 'Bcc: aandy28@googlemail.com' . "\r\n";
$headers .= "MIME-Version: 1.0\r\n"; 
$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n"; 

// $email_body = "You have received a new message. \n\n".
// 				  "Registration Number: REG - $registrationNo\n\n".
// 				  "Title: $title\n".
// 				  "First Name: $first_name\n".
// 				  "Family Name: $family_name\n".
// 				  "Organisation: $organisation\n".
// 				  "Position: $position\n".
// 				  "Postal Address: $postal_address\n".
// 				  "Post Code: $post_code\n".
// 				  "City: $city\n".
// 				  "Country: $country\n".
// 				  "Phone: $phone\n".
// 				  "Fax: $fax\n".
// 				  "Email: $email_address\n".
// 				  "Mobile: $mobile\n".
// 				  "Desire to submit abstract for oral or poster presentation: $Abstract\n".
// 				  "Registration fee Regular Rate: $FullConferenceRate\n".
// 				  "Registration fee Daily Rate: $DailyConferenceRate\n".
// 				  "Registration feeStudent Rate: $StudentRate\n".
// 				  "Additional Message: $AdditionalMessage\n";


mail($to,$subject,$message,$headers);
header('Location: thank-you.html');

return true;			
?>
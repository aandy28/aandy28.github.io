<?php
// check if fields passed are empty
if(empty($_POST['FirstName'])  		||
   empty($_POST['Email']))
   {
	echo "No arguments Provided!";
	return false;
   }

if(isset($_POST['Gender'])){$Gender = $_POST['Gender'];}else{$Gender = '';}
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
$dor = $_POST['DateOfRegistration'];
$dop = $_POST['DateOfPayment'];;
$pres_title = $_POST['PresentationTitle'];;
$pref_type = $_POST['PreferedType'];;
$req_equp = $_POST['EquipmentRequired'];;
$main_auth = $_POST['MainAuthor'];;
$auth_inst = $_POST['AuthorInst'];;
$auth_email = $_POST['AuthEmail'];;
$co_auth = $_POST['CoAuth'];;
$co_auth_inst = $_POST['CoAuthInst'];;

$AdditionalMessage = $_POST['Abstract'];

	
// create email body and send it	
// $to = 'ICAAMailbox@aol.com, '.$email_address; // put your email
// $email_subject = "FOCUS ON WOMEN IN ADDICTION IN THE 2020'S Article Submission";
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
       '<h1>Thank you for submitting an article for the conference.</h1>'. 
       
       '<table>'.
       '<tr>'.
       '<td><p><strong>Gender: </strong></p></td>'.
       '<td><p>'.$Gender.
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
       '<td><p><strong>Date of Registration: </strong></p></td>'.
       '<td><p>'.$dor.
       '</p></td>'.
       '</tr>'.

       '<tr>'.
       '<td><p><strong>Date of Payment: </strong></p></td>'.
       '<td><p>'.$dop.
       '</p></td>'.
       '</tr>'.

       '<tr>'.
       '<td><p><strong>Presentation Title: </strong></p></td>'.
       '<td><p>'.$pres_title.
       '</p></td>'.
       '</tr>'.

       '<tr>'.
       '<td><p><strong>Preferred Type : </strong></p></td>'.
       '<td><p>'.$pref_type.
       '</p></td>'.
       '</tr>'.

       '<tr>'.
       '<td><p><strong>Required Technical Equipment: </strong></p></td>'.
       '<td><p>'.$req_equp.
       '</p></td>'.
       '</tr>'.

       '<tr>'.
       '<td><p><strong>Main Author: </strong></p></td>'.
       '<td><p>'.$main_auth.
       '</p></td>'.
       '</tr>'.

              '<tr>'.
       '<td><p><strong>Main Author\'s Institute: </strong></p></td>'.
       '<td><p>'.$auth_inst.
       '</p></td>'.
       '</tr>'.

              '<tr>'.
       '<td><p><strong>Main Author\'s Email Address: </strong></p></td>'.
       '<td><p>'.$auth_email.
       '</p></td>'.
       '</tr>'.

              '<tr>'.
       '<td><p><strong>Co-Author: </strong></p></td>'.
       '<td><p>'.$co_auth.
       '</p></td>'.
       '</tr>'.

              '<tr>'.
       '<td><p><strong>Co-Author\' Institute: </strong></p></td>'.
       '<td><p>'.$co_auth_inst.
       '</p></td>'.
       '</tr>'.

       '<tr>'.
       '<td><p><strong>Abstract: </strong></p></td>'.
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
$subject = 'FOCUS ON WOMEN IN ADDICTION IN THE 2020\'S conference Abstract Submission';  //change subject of email 
$from    = 'abstract-submission@womeninaddiction.com';                           // give from email address 

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
header('Location: abstract-thank-you.html');

return true;			
?>
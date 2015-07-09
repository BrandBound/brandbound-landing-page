<?php
// Set to "mailchimp" to store contacts in MailChimp or "file" to store in a file.
$STORE_MODE = "mailchimp";

// Your MailChimp API Key
$API_KEY =  "bb500de9185a168829bdbf53faf35879-us3";

// Your MailChimp List ID
$LIST_ID =  "882f267f9a";

// Include MailChimp API
require('MailChimp.php');

// Allow only post method
if($_SERVER["REQUEST_METHOD"] == "POST" && !empty($_POST["email"])) {

	$email = $_POST["email"];
	
	// Send headers
	header('HTTP/1.1 200 OK');
	header('Status: 200 OK');
	
	// Check if email is valid
	if(filter_var($email, FILTER_VALIDATE_EMAIL)) {
		
		if ($STORE_MODE == "mailchimp") { // Store with MailChimp
			// Use MailChimp API to store
			$MailChimp = new \Drewm\MailChimp($API_KEY);
			
			$result = $MailChimp->call('lists/subscribe', array(
		                'id'                => $LIST_ID,
		                'email'             => array('email'=>$email),
		                'double_optin'      => false,
		                'update_existing'   => true,
		                'replace_interests' => false,
		                'send_welcome'      => false,
		            ));
	
		    // Create a response     
	
			// Success
			if($result["email"] == $email) {     	
				echo 'Alright ! You will be notified on <b>  '.$email.'</b> :)';
			// Error
			} else {
				echo 'There was a problem with your e-mail ('.$email.')';
			}
		// Error
		} else {
			echo 'There was a problem with your e-mail ('.$email.')';
		}
	// Error 
	} else {
		echo 'There was a problem with your e-mail ('.$email.')';	
	}
} else {
	header('HTTP/1.1 403 Forbidden');
	header('Status: 403 Forbidden');
}




exit();
// OLD STUFF

$to = "example@mail.com";
$from = "mail@example.com";

$headers = "From: " . $from . "\r\n";

$subject = "New subscription";
$body = "New user subscription: " . $_POST['email'];


if( filter_var($_POST['email'], FILTER_VALIDATE_EMAIL) )
{ 
	if (mail($to, $subject, $body, $headers, "-f " . $from))
	{
		echo 'Alright ! You will be notified on <b>  ' . $_POST['email'] . '</b> :)';
	}
	else
	{
	   echo 'There was a problem with your e-mail (' . $_POST['email'] . ')';	
	}
}
else
{
   echo 'There was a problem with your e-mail (' . $_POST['email'] . ')';	
}
<?php
require "database.php";
header("Access-Control-Allow-Methods: GET, POST"); 
header("Access-Control-Allow-Origin: *"); 
header("Access-Control-Allow-Headers: Content-Type, accept");

//Receive the GET-parameters from Book.js
$mailData = json_decode($_GET["mailData"], false);
//Who to send the mail to.
$to = $mailData->email; 
//Subject of the email.
$subject = 'Booking confirmation';
//Message to be sent to confirm the booking with the customer.
$message = "
<html>
<h1>Your booking information</h1>
<p>Name: $mailData->name</p>
<p>Email: $mailData->email</p>
<p>Phone: $mailData->phone</p>
<p>Date of booking: $mailData->date</p>
</html>
";
//Headers
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$headers = 'From: webbooking';
//What to sent to who.
echo json_encode($message);
mail($to, $subject, $message, $headers);
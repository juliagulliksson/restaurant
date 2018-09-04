<?php
require "database.php";
header("Access-Control-Allow-Methods: GET, POST"); 
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Accept");
//Receive the GET-parameters from Book.js
$mailData = json_decode($_GET["mailData"], false);
//Who to send the mail to.
$to = $mailData->email; 
//Subject of the email.
$subject = 'Booking confirmation';

if($mailData->chosenSeating == "firstSeating"){
  $seatingTime = "18:00";
} else {
  $seatingTime = "21:00";
}

$message = "Dear " . $mailData->name . ", you have a reservation for " . $mailData->date . " at " . $seatingTime;
//Headers
$headers = "MIME-Version: 1.0" . "\r\n";
$headers = "Content-type:text/html;charset=UTF-8" . "\r\n";
$headers = 'From: admin@finedinne.com' . "\r\n";
//What to sent to who.
echo json_encode($message);
mail($to, $subject, $message, $headers);
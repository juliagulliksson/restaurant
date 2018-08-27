<?php
require "database.php";
//Who to send the mail to
$to = :email;
//Subject of the email
$subject = 'Booking confirmation';
//Message to be sent to confirm the booking with the customer.
$message = :name, :email, :phone, "This is the booking you have"
//Headers
$headers = 'From: webbooking' . "\r\n" .
//What to sent to who
mail($to, $subject, $message, $headers)
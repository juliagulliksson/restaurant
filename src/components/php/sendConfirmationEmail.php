<?php
require "database.php";

header("Access-Control-Allow-Methods: GET, POST"); 
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Accept");


$data = json_decode($_GET["data"], false);

// Query returns bookings for current date and future dates.
// No past dates will be returned. Do we want to look at old bookings?

$subject = "Reservation for ". $data->date ." has been cancelled";
$message = "Dear " . $data->name . ", Your reservation for " . $data->date . 
" at " . $data->seatingTime . " has been cancelled. Visit www.finnedinne.com to book again.";

mail($data->email, $subject, $message);

echo json_encode($data, JSON_PRETTY_PRINT);

?>
<?php
require "database.php";

header("Access-Control-Allow-Methods: GET, POST"); 
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Accept");


$data = json_decode($_GET["data"], false);

// Query returns bookings for current date and future dates.
// No past dates will be returned. Do we want to look at old bookings?



echo json_encode($data, JSON_PRETTY_PRINT);

?>
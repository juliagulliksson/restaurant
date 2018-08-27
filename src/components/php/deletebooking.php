<?php
require "database.php";

header("Access-Control-Allow-Methods: GET, POST, DELETE"); 
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Accept");


$booking_data = JSON_decode($_GET['data']);

$phone = $booking_data->phone;
$booking_id = $booking_data->bookingId;

$statement2 = $pdo->prepare("DELETE FROM users WHERE phone = '$phone'");
$statement2->execute();

$statement = $pdo->prepare("DELETE FROM booking WHERE bookingId = '$booking_id'");
$statement->execute();


?>
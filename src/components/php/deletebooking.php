<?php
require "database.php";

header("Access-Control-Allow-Methods: GET, POST, DELETE"); 
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Accept");


$bookingData = JSON_decode($_GET['data']);

//The bookingId from booking table is the id that's sent through with this object.

$phone = $bookingData->phone;
$bookingId = $bookingData->bookingId;

$statement2 = $pdo->prepare("DELETE FROM users WHERE phone = '$phone'");
$statement2->execute();

$statement = $pdo->prepare("DELETE FROM booking WHERE bookingId = '$bookingId'");

$statement->execute();


?>
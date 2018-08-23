<?php
header("Access-Control-Allow-Methods: GET, POST"); 
//header("Access-Control-Allow-Origin: http://localhost:3000"); 
header("Access-Control-Allow-Headers: Content-Type, accept");

require 'database.php';

$formData = json_decode($_GET["formData"], false);

$statement = $pdo->prepare(
  "SELECT * FROM booking WHERE date = $formData AND seatingOne = 0");
$statement->execute(); 
$seatingOneBookings = $statement->fetchAll(PDO::FETCH_ASSOC);

$statement = $pdo->prepare(
  "SELECT * FROM booking WHERE date = $formData AND seatingTwo = 0");
$statement->execute(); 
$seatingTwoBookings = $statement->fetchAll(PDO::FETCH_ASSOC);

$bookings = array(
  "seatingOne" => count($seatingOneBookings), 
  "seatingTwo" => count($seatingTwoBookings));

echo json_encode($bookings, JSON_PRETTY_PRINT);


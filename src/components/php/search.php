<?php
header("Access-Control-Allow-Methods: GET, POST, OPTIONS"); 
header("Content-Type: application/json; charset=UTF-8");

require 'database.php';

//Receive the GET-parameters from main.js
$formData = json_decode($_GET["formData"], false);

$statement = $pdo->prepare(
  "SELECT * FROM booking WHERE date = $formData AND seatingOne = 0");
$statement->execute(); 
$seatingOneBookings = $statement->fetchAll(PDO::FETCH_ASSOC);

$statement = $pdo->prepare(
  "SELECT * FROM booking WHERE date = $formData AND seatingTwo = 0");
$statement->execute(); 
$seatingTwoBookings = $statement->fetchAll(PDO::FETCH_ASSOC);

$message;

if(count($seatingTwoBookings) < 15 && count($seatingOneBookings) < 15){
  $message = "Both";
 
} elseif(count($seatingTwoBookings) < 15) {

  $message = "21:00";
} elseif(count($seatingOneBookings) < 15){
 $message = "18:00";
} else{
  $message = "None";
}
echo json_encode($message, JSON_PRETTY_PRINT);


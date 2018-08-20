<?php
require "database.php";

header("Access-Control-Allow-Methods: GET, POST"); 
header("Access-Control-Allow-Origin: http://localhost:3000"); 
header("Access-Control-Allow-Headers: Content-Type, accept");

//Receive the GET-parameters from main.js
$formData = json_decode($_GET["formData"], false);

//Insert user into database
$statement = $pdo->prepare(
  "INSERT INTO users (name, email, phone) 
  VALUES (:name, :email, :phone)");
  
$statement->execute(array(
  ":name" => $formData->name,
  ":email" => $formData->email, 
  ":phone" => $formData->phone
));

$seatingOne;
$seatingTwo;
$seating;
if($formData->chosenSeating == "firstSeating"){
  $seatingOne = 1;
  $seatingTwo = 0;
  $seating = "18:00";
} else {
  $seatingOne = 0;
  $seatingTwo = 1;
  $seating = "21:00";
}

//Insert booking into database
$statement = $pdo->prepare(
  "INSERT INTO booking (userPhone, date, seatingOne, seatingTwo) 
  VALUES (:userPhone, :date, :seatingOne, :seatingTwo)");
  
$statement->execute(array(
  ":userPhone" => $formData->phone,
  ":date" => $formData->date, 
  ":seatingOne" => $seatingOne,
  ":seatingTwo" => $seatingTwo
));

$message = "Congratulations! You have booked a table at $formData->date $seating";

echo json_encode($message, JSON_PRETTY_PRINT);
<?php
require "database.php";
require "functions/checkIfUserExists.php";
require "functions/determineSeatings.php";

header("Access-Control-Allow-Methods: GET, POST"); 
header("Access-Control-Allow-Origin: http://localhost:3000"); 
header("Access-Control-Allow-Headers: Content-Type, accept");

//Receive the GET-parameters from Book.js
$formData = json_decode($_GET["formData"], false);

if(!checkIfUserExists($formData->phone)){
  //User doesn't exist, insert user into database
  $statement = $pdo->prepare(
    "INSERT INTO users (name, email, phone) 
    VALUES (:name, :email, :phone)");
    
  $statement->execute(array(
    ":name" => $formData->name,
    ":email" => $formData->email, 
    ":phone" => $formData->phone
  ));
}

//Returns an array. If 18:00/"firstSeating", the output is 1, 0.
// If 21:00/"secondSeating", the output is 0, 1
$seatings = determineSeatings($formData->chosenSeating);

//Insert booking into database
$statement = $pdo->prepare(
  "INSERT INTO booking (userPhone, date, seatingOne, seatingTwo) 
  VALUES (:userPhone, :date, :seatingOne, :seatingTwo)");
  
$statement->execute(array(
  ":userPhone" => $formData->phone,
  ":date" => $formData->date, 
  ":seatingOne" => $seatings[0],
  ":seatingTwo" => $seatings[1]
));


echo json_encode($formData, JSON_PRETTY_PRINT);
<?php
require "database.php";

header("Access-Control-Allow-Methods: GET, POST, DELETE"); 
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Accept");


$user_phone = JSON_decode($_GET['formData']);

$statement2 = $pdo->prepare("DELETE FROM users WHERE phone = '$user_phone'");
$statement2->execute();

$statement = $pdo->prepare("DELETE FROM booking WHERE userPhone = '$user_phone'");
$statement->execute();


?>
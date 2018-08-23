<?php
require "database.php";

$user_phone = JSON_decode($_GET['formData']);

$statement = $pdo->prepare("DELETE FROM booking WHERE userPhone = '$user_phone'");
$statement->execute();

$statement = $pdo->prepare("DELETE FROM user WHERE phone = '$user_phone");
    $statement->execute();


?>
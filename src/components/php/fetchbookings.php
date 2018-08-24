<?php
require "database.php";

header("Access-Control-Allow-Methods: GET, POST"); 
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Accept");


//$formData = json_decode($_GET["formData"], false);

// Query returns bookings for current date and future dates.
// No past dates will be returned. Do we want to look at old bookings?

$statement = $pdo->prepare(
"SELECT * FROM booking
JOIN users 
ON booking.userPhone = users.phone
WHERE DATE(booking.date) >= CURDATE()
ORDER BY booking.date, booking.seatingTwo");



$statement->execute();

$bookings = $statement->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($bookings, JSON_PRETTY_PRINT);

?>
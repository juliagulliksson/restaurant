<?php
require "database.php";
require "functions/determineSeatings.php";

header("Access-Control-Allow-Methods: GET, POST, DELETE"); 
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Accept");

$editData = JSON_decode($_GET['formData']);

//Get the user id and match it to the booking row
$statement = $pdo->prepare(
  "SELECT id FROM users
  JOIN booking
  ON booking.userPhone = users.phone
  WHERE bookingId = $editData->bookingId");
$statement->execute();
$userId = $statement->fetch(PDO::FETCH_ASSOC);
$userId = $userId['id'];

/*If the new phonenumber and original phonenumber doesn't match, 
**it has to be updated in all corresponding rows*/
if($editData->phone != $editData->originalPhoneNumber){
  //Get all previous bookings from the user
  $statement = $pdo->prepare(
    "SELECT * FROM booking
    WHERE userPhone = $editData->originalPhoneNumber");
  $statement->execute();
  $booking = $statement->fetchAll(PDO::FETCH_ASSOC);

  //Update all previous bookings to the new user phone
  for($i = 0; $i < count($booking); $i++){
    $bookingPhone = $booking[$i]['userPhone'];

    //Update booking table
    $statement = $pdo->prepare(
      "UPDATE booking SET 
      userPhone = :phone
      WHERE userPhone = $bookingPhone ");
    $statement->execute(array(
      ":phone" => $editData->phone, 
    )); 
  } 
}

/* Returns an array. If 18:00/"firstSeating", the output is 1, 0.
** If 21:00/"secondSeating", the output is 0, 1 */
$seatings = determineSeatings($editData->chosenSeating);

//Update booking table
$statement = $pdo->prepare(
    "UPDATE booking SET 
    userPhone = :phone, 
    date = :date, 
    seatingOne = :seatingOne,
    seatingTwo = :seatingTwo
    WHERE bookingId = :bookingId");
$statement->execute(array(
    ":phone" => $editData->phone, 
    ":date" => $editData->date, 
    ":seatingOne" => $seatings[0],
    ":seatingTwo" => $seatings[1],
    ":bookingId" => $editData->bookingId
)); 

//Update user table
$statement = $pdo->prepare(
    "UPDATE users SET 
   phone = :phone,
    email = :email,
    name = :name
    WHERE id = :id");
$statement->execute(array(
    ":phone" => $editData->phone, 
    ":email" => $editData->email,
    ":name" => $editData->name,
    ":id" => $userId
)); 

//echo json_encode($userId, JSON_PRETTY_PRINT);
?>
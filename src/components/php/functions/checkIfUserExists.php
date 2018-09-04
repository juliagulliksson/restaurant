<?php

function checkIfUserExists($value){
  require 'database.php';
  $statement = $pdo->prepare("SELECT COUNT(phone) FROM users
  WHERE phone = '$value'"); 
  $statement->execute();
  $existing = $statement->fetch(PDO::FETCH_NUM);
  
  if ($existing[0] > 0){
      $user_exists = true;
  } else {
      $user_exists = false;
  } 
  return $user_exists;
}

<?php

function checkIfUserExists($value){
  require 'database.php';
  $statement = $pdo->prepare("SELECT COUNT(email) FROM users
  WHERE email = '$value'"); 
  $statement->execute();
  $existing = $statement->fetch(PDO::FETCH_NUM);
  
  if ($existing[0] > 0){
      $user_exists = true;
  } else {
      $user_exists = false;
  } 
  return $user_exists;
  
}

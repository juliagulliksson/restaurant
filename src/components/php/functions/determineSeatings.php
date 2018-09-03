<?php

function determineSeatings($value){
  if($value == "firstSeating"){
    $seatingOne = 1;
    $seatingTwo = 0;
  } else {
    $seatingOne = 0;
    $seatingTwo = 1;
  }

  $seatings = [$seatingOne, $seatingTwo];
  return $seatings;
}
<?php
$host = "localhost";
$user = "root";
$pass = "";
$db = "register";

$con = new mysqli($host, $user, $pass, $db);

// get the post records
$name = $_POST['name'];
$email = $_POST['email'];
$password = $_POST['password'];
$gender=$_POST['gender'];
$date=$_POST['date'];
$address=$_POST['address'];
$interest=$_POST['interest'];


// database insert SQL code
$qry = "INSERT INTO `register` (`Id`, `Name`, `Email`, `Password`, `Gender`,`Date`,`Address`,`Interest`) VALUES ('0', '$name', '$email', '$password', '$gender','$date','$address','$interest')";

// insert in database 
$insert = mysqli_query($con, $qry);
if(!$insert){
echo"There are some problem while inserting data";
}
else{
echo"Registered Successfully";
}
?>
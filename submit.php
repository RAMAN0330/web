<?php
$con = mysqli_connect("localhost", "root", "");
if (!$con) {
    die("Connection Failed;)" . mysqli_connect_error());
} else {
    $name = $_POST['NAME'];
    $age = $_POST['AGE'];
    $phone = $_POST['PHONE'];
    $gender = $_POST['GENDER'];
    $password = $_POST['PASSWORD'];
    $sql = "INSERT INTO `ques11`.`data` ( `Name`, `age`, `phone`, `gender`, `password`, `time`) VALUES ( '$name', '$age', '$phone', '$gender', '$password', current_timestamp());";
    $con->query($sql);

    // alert("Success");
    echo '<script>alert("Success"); window.open("index.html");</script>';
}
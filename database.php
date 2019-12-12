<?php

    session_start();

    $host = 'localhost';
    $username = 'root';
    $password = '';
    $db = 'alumnos';

     $con = mysqli_connect($host,$username,$password,$db);

?>
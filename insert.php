<?php

 require 'database.php';

$nombre = $_POST['user'];
$contra = $_POST['pass'];
$carrera = $_POST['carrera'];

if (isset($nombre) && !empty($nombre) && isset($contra) && !empty($contra))
{

 
    $insertar = "INSERT INTO alumnos (nombre,carrera,pass) VALUES ('$nombre','$carrera','$contra') ";
   $query = mysqli_query($con, $insertar);

  if(!$query) {
      die("Fallo Petición");
  }

  $_SESSION['message'] = "Usuario registrado con éxito.";
  $_SESSION['alert-color'] = "success";

  header("Location: index.php");
}
?>
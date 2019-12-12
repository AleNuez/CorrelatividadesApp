<?php

include("database.php");

if(isset($_GET['id']))
{
    $id = $_GET['id'];
$query = "DELETE FROM alumnos WHERE id = $id";
$result = mysqli_query($con, $query);
 if (!$result)
 {
   die("No se pudo borrar");
 }


 header("Location: perfiles.php");
}


?>
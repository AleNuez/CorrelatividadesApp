<?php

include("database.php");

if(isset($_GET['id']))
{
    $id = $_GET['id'];
$query = "SELECT * FROM alumnos WHERE id = $id";
$result = mysqli_query($con, $query);
 if (mysqli_num_rows($result) == 1)
 {
   $row = mysqli_fetch_array($result);
   $nombre = $row['nombre'];
   $carrera = $row['carrera'];
   $pass = $row['pass'];
 }
}

    if(isset($_POST['editar']))
    {
        $id = $_GET['id'];
        $nombre = $_POST['user'];
        $carrera = $_POST['carrera'];
        $pass = $_POST['pass'];

        $solicitud = "UPDATE alumnos SET nombre = '$nombre', carrera = '$carrera', pass = '$pass' WHERE id = $id ";
        mysqli_query($con, $solicitud); 
        header("location: perfiles.php");
    }
 ?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="css/styles.css">
    <link rel="stylesheet" href="css/all.css">
    <script src="js/all.js"></script>
    <script src="js/script.js"></script>
    <icon src="icon.png" />
    <title>Perfiles</title>
</head>

<body>

<nav class="navbar navbar-expand-md bg-dark navbar-dark">
                <!-- Brand -->
                <a class="navbar-brand" href="#">Planificador de Carrera</a>
              
                <!-- Toggler/collapsibe Button -->
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                  <span class="navbar-toggler-icon"></span>
                </button>
              
                <!-- Navbar links -->
                <div class="collapse navbar-collapse" id="collapsibleNavbar">
                  <ul class="navbar-nav">
                    <li class="nav-item">
                        <button type="button" onclick="window.location.reload()" class="btn btn-default" style="color: white"><span href="#" class="fas fa-redo"></span> Recargar</button>
                    </li>
                    <li class="nav-item">
                        <a href="./index.php"><button type="button" class="btn btn-default" style="color: white"><span href="./index.html" class="fas fa-home"></span> Home</button></a>
                         
                    </li>
                  </ul>
                </div>
              </nav>
 
<div class="container">
    <div class="jumbotron">
        <h3 class="display-4">Perfiles</h3>
        <div class="col-md-8">
            <table class="table table-bordered">
                <thead class="thead-dark">
                    <tr>
                        <th>Nombre</th>
                        <th>Carrera</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                        <?php
                        $ver = "SELECT * FROM alumnos";
                        $peti = mysqli_query($con, $ver);
                        
                        while($fila = mysqli_fetch_array($peti))   {  ?>
                            <tr>
                                <td><?php echo $fila['nombre'] ?></td>
                                <td><?php echo $fila['carrera'] ?></td>
                                <td>
                                    <a href="edit.php?id=<?php echo $fila['id']?>" class="btn btn-primary" data-toggle="modal" data-target="#ModalEdit">
                                    <i class="fas fa-pen"></i></a>
                                    <a href="delete.php?id=<?php echo $fila['id']?>" class="btn btn-danger">
                                    <i class="fas fa-trash"></i></a>
                                </td>
                            </tr>

                        <?php } ?>

                </tbody>
            </table>
        </div>



        <div class="modal" id="ModalEdit">
  <div class="modal-dialog">
    <div class="modal-content">

      <!-- Modal Header -->
      <div class="modal-header">
        <h4 class="modal-title">Editar</h4>
        <button type="button" class="close" data-dismiss="modal">&times;</button>
       
      </div>

      <!-- Modal body -->
         <div class="modal-body">
              <div class="container">
                
              <h2>Editar Usuario</h2>
<form action="edit.php?id=<?php echo $_GET['id']; ?>" method="POST">
<div class="form-group">
<label for="form-name" >Nombre:</label>
<input type="text" class="form-control" value="<?php echo $nombre; ?>" id="form-name" placeholder="Ingrese nombre:" name="user">
</div>
<div class="form-group">
<label for="form-carrera">Carrera:</label>
<select name="carrera" class="form-control" id="form-carrera">
<option value="Analisis de Sistemas">Analisis de Sistemas</option>
<option value="Analisis Clinicos">Analisis Clinicos</option>
<option value="Gestion Ambiental">Gestion Ambiental</option>
<option value="Contable">Contable</option>
</select>
</div>
<div class="form-group">
<label for="pwd">Password:</label>
<input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pass">
</div>
<button type="submit"  name="editar" class="btn btn-primary">Enviar</button>
</form>
</div>
      </div>

      <!-- Modal footer -->
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-dismiss="modal">Cancelar</button>
      </div>

    </div>
  </div>
</div>

        <a href="./perfiles.php"><button type="button" class="btn btn-outline-success btn-lg">Volver</button></a> 
    </div>  
             

</div>




    <script src="js/jquery.js"></script>
    <script src="js/bootstrap.min.js"></script>


</body>
</html>
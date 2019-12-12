<?php require "database.php"; ?>
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
                                    <a href="edit.php?id=<?php echo $fila['id']?>"  class="btn btn-primary">
                                    <i class="fas fa-pen"></i></a>
                                    <a href="delete.php?id=<?php echo $fila['id']?>" class="btn btn-danger">
                                    <i class="fas fa-trash"></i></a>
                                </td>
                            </tr>

                        <?php } ?>

                </tbody>
            </table>
        </div>
        <a href="./index.php"><button type="button" class="btn btn-outline-success btn-lg">Volver</button></a> 
    </div>  
             

</div>




    <script src="js/jquery.js"></script>
    <script src="js/bootstrap.min.js"></script>
</body>
</html>

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
    <title>ISFT</title>
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
                    <li class="nav-item">
                        <a href="./perfiles.php"><button type="button" class="btn btn-default" style="color: white"><span href="./perfiles.php" class="fas fa-address-card"></span> Perfiles</button></a>
                         
                    </li>
                  </ul>
                </div>
              </nav>
    <header>
            <h2>Analisis de Sistemas</h2>
    </header>
    <div class="container">
        <div class="jumbotron">
                <h3 class="display-4">¿En cuánto me recibo?</h3>
                 <p class="lead"> Esta herramienta te ayuda a prestar especial atención a esas materias que si se recursan
              , pueden llegar a ser un gran dolor de cabeza arrastrando muchas correlativas hacia años posteriores 
                  </p>
          <div class="d-flex justify-content-center">
                <div class="card-columns text-center">
                        <div class="card">
                                <div class="card-header"><span class="fas fa-arrow-alt-circle-right fa-5x"></span></div>
                                <div class="card-body"><p class="lead"> Visualiza tu plan de carrera</p></div>
                                <div class="card-footer"><a href="app.php" class="btn btn-outline-dark btn-lg stretched-link">Comenzar</a></div>
                              </div>
                              <div class="card">
                                <div class="card-header"><span class="fas fa-address-card fa-5x"></span></div>
                                <div class="card-body"><p class="lead">Crea tu cuenta y guarda tus planes</p></div>
                                <div class="card-footer">    <!-- Button to Open the Modal -->
                                  <button type="button" class="btn btn-outline-dark btn-lg stretched-link" data-toggle="modal" data-target="#ModalReg">
                                    Registro
                                  </button>
                                </div>
                              </div>
                              <div class="card">
                                    <div class="card-header "><span class="fas fa-info-circle fa-5x"></span></div>
                                    <div class="card-body"><p class="lead">Informacion acerca de la App</p></div>
                                    <div class="card-footer"> <a href="about.php" class="btn btn-outline-dark btn-lg stretched-link">Acerca De</a></div>
                              </div>
                                 
                      
                </div> 
          </div>
                
        
        </div>
    </div>


<!-- The Modal -->
<div class="modal" id="ModalReg">
  <div class="modal-dialog">
    <div class="modal-content">

      <!-- Modal Header -->
      <div class="modal-header">
        <h4 class="modal-title">Registro</h4>
        <button type="button" class="close" data-dismiss="modal">&times;</button>
       
      </div>

      <!-- Modal body -->
         <div class="modal-body">
              <div class="container">
              <?php if(isset($_SESSION['message'])) { ?>
              <div class="alert alert-warning alert-dismissible fade show" role="alert">
                <?= $_SESSION['message'] ?>
                 <button type="button" class="close" data-dismiss="alert" aria-label="Close">
               <span aria-hidden="true">&times;</span>
              </button>
          </div>
                <?php session_unset();  }  ?> 
              <h2>Nuevo Usuario</h2>
              <form action="insert.php" method="POST">
                <div class="form-group">
                  <label for="form-name" >Nombre:</label>
                  <input type="text" class="form-control" id="form-name" placeholder="Ingrese nombre:" name="user">
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
                <button type="submit" value="send" class="btn btn-primary">Enviar</button>
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




    <script src="js/jquery.js"></script>
    <script src="js/bootstrap.min.js"></script>
</body>
</html>
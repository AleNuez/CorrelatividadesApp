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
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <icon src="icon.png" />
    <title>CorrelativApp</title>
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
              <header class="d-flex align-content-center justify-content-between">
                    <h2>Analisis de Sistemas</h2>
                    <div class="container" style="align-self: center">
                    <label id="label-progress">Progreso de la carrera: </label>
                    
                    <div class="progress" >
                          <div id="progress-bar" class="progress-bar" role="progressbar" style="width:0%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                          <p id="demo" style="margin-bottom:initial"></p>
                          </div>
                    </div>
                    </div>
              </header>
<div class="container" >
    
            <div class="card-deck">
                      <div class="col-sm-12 col-md-6 col-lg-4">
                      <div class="card" data-toggle="tooltip" title="Marcar solo las aprobadas">
                       <div class="card-header d-flex justify-content-between"><h3>Primer Año</h3><button data-toggle="tooltip" title="Click para pasar al siguiente año" id="chckprimero" onclick="chckprimero()" type="button" class="btn btn-default"><span class="fas fa-check-circle fa-3x"></span></button></div>
                        <div>
                            <div class="primero"  name="botonete" id="anmati" ><button  value="off"  onclick="prender(this)" class="btn btn-secondary" >Analisis Matematico <span class="badge badge-dark"> 2</span></button></div>
                            <div class="primero" name="botonete" id="isis"><button  value="off"  onclick="prender(this)" class="btn btn-secondary" >Intro a Sistemas de Informacion <span class="badge badge-dark"> 1</span></button></div>
                            <div class="primero" name="botonete"  id="meto"><button  value="off"  onclick="prender(this)" class="btn btn-secondary" >Metodología de Investigacion <span class="badge badge-dark"> 0</span></button></div>
                            <div class="primero" name="botonete" id="admo"><button  value="off"  onclick="prender(this)" class="btn btn-secondary" >Administracion de las Organizaciones <span class="badge badge-dark"> 1</span></button></div>
                            <div class="primero" name="botonete" id="arq"><button  value="off"  onclick="prender(this)" class="btn btn-secondary" >Arquitectura de las Computadoras <span class="badge badge-dark"> 1</span></button></div>
                            <div class="primero" name="botonete" id="prgi"><button value="off"   onclick="prender(this)" class="btn btn-secondary" >Programacion I <span class="badge badge-dark"> 2</span></button></div>
                            <div class="primero" name="botonete" id="algi"><button  value="off"  onclick="prender(this)" class="btn btn-secondary" >Algebra <span class="badge badge-dark"> 1</span></button></div>
                            <div class="primero" name="botonete" id="edi" ><button value="off"   onclick="prender(this)" class="btn btn-secondary" >Espacio de Definicion I <span class="badge badge-dark"> 0</span></button></div>
                            <div class="primero" name="botonete"  id="ingi"><button  value="off"  onclick="prender(this)" class="btn btn-secondary" >Ingles I <span class="badge badge-dark"> 1</span></button></div>
                        </div>
                      </div>
                      </div>  
                        <div class="col-sm-12 col-md-6 col-lg-4">
                        <div class="card">
                         <div class="card-header d-flex justify-content-between"><h3>Segundo Año</h3><button id="chcksegundo" onclick="chcksegundo()" type="button" class="btn btn-default"><span class="fas fa-check-circle fa-3x"></span></button></div>

                          <div id="secondyear" >
                          <div class="segundo" id="prob"><button value="off" onclick="prender(this)" class="btn btn-secondary">Probabilidad y Estadistica <span class="badge badge-dark">1</span></button></div>
                          <div class="segundo" id="sisi"><button value="off" onclick="prender(this)" class="btn btn-secondary">Sistemas de Informacion I <span class="badge badge-dark"> 3</span></button></div>
                          <div class="segundo" id="edii"><button value="off" onclick="prender(this)" class="btn btn-secondary">Espacio de Definicion II <span class="badge badge-dark"> 0</span></button></div>
                          <div class="segundo" id="os"><button value="off" onclick="prender(this)" class="btn btn-secondary">Sistemas Operativos <span class="badge badge-dark"> 1</span></button></div>
                          <div class="segundo" id="db"><button value="off" onclick="prender(this)" class="btn btn-secondary">Bases de Datos <span class="badge badge-dark"> 1</span></button></div>
                          <div class="segundo" id="anmatii"><button value="off" onclick="prender(this)" class="btn btn-secondary">Analisis Matematico II <span class="badge badge-dark"> 1</span></button></div>
                          <div class="segundo" id="ingii"><button value="off" onclick="prender(this)" class="btn btn-secondary">Ingles II <span class="badge badge-dark"> 0</span></button></div>
                          <div class="segundo" id="prgii"><button value="off" onclick="prender(this)" class="btn btn-secondary">Programacion II <span class="badge badge-dark"> 2</span></button></div>
                          </div>
                        </div>
                        </div>
                      <div class="col-sm-12 col-md-6 col-lg-4">  
                      <div class="card">
                      <div class="card-header d-flex justify-content-between"><h3>Tercer Año</h3><button id="chcktercero" onclick="chcktercero()" type="button" class="btn btn-default"><span class="fas fa-check-circle fa-3x"></span></button></div>                      

                      <div id="thirdyear" >
                      <div class="tercero" id="sisii"><button value="off" onclick="prender(this)" class="btn btn-secondary">Sistemas de Informacion II</button></div>
                      <div class="tercero" id="tele"><button value="off" onclick="prender(this)" class="btn btn-secondary">Teleinformatica</button></div>
                      <div class="tercero" id="prac"><button value="off" onclick="prender(this)" class="btn btn-secondary">Practica Profesional</button></div>
                      <div class="tercero" id="invop"><button value="off" onclick="prender(this)" class="btn btn-secondary">Investigacion Operativa</button></div>
                      <div class="tercero" id="eco"><button value="off" onclick="prender(this)" class="btn btn-secondary">Economia Empresarial</button></div>
                      <div class="tercero" id="ediii"><button value="off" onclick="prender(this)" class="btn btn-secondary">Espacio de Definicion III</button></div>
                      </div>
                      </div>  
                      </div>
                         
                 
    
   
          
                  <div class="col-sm-12 col-md-6 col-lg-4">
                  <div class="card" > 
                         <div id="fourthyear" >
                   <div class="card-header d-flex justify-content-between"><h3>Cuarto Año</h3><button id="chckcuarto"  onclick="chckcuarto()" type="button" class="btn btn-default"><span class="fas fa-check-circle fa-3x"></span></button></div>

                         </div>
                  </div>
                  </div>
                  <div class="col-sm-12 col-md-6 col-lg-4">
                  <div class="card">   
                        <div id="fifthyear">
                        <div class="card-header d-flex justify-content-between"><h3>Quinto Año</h3><button id="chckquinto" onclick="chckquinto()" type="button" class="btn btn-default"><span class="fas fa-check-circle fa-3x"></span></button></div>   
                        </div>
                  </div>
                  </div>
                  <div class="col-sm-12 col-md-6 col-lg-4">
                  <div class="card">     
                        <div id="sixthyear">
                        <div class="card-header d-flex justify-content-between"><h3>Sexto Año</h3><button id="chcksexto" onclick="chcksexto()" type="button" class="btn btn-default"><span class="fas fa-check-circle fa-3x"></span></button></div>  
                        </div>      
                  </div>    
                  </div>   
                
                </div>   

</div>

      
      <!-- El Modal -->
      <div class="modal" id="Modal">
        <div class="modal-dialog">
          <div class="modal-content">
      
            <!-- Modal Header -->
            <div class="modal-header">
              <h4 class="modal-title">Felicitaciones</h4>
              <button type="button" class="close" data-dismiss="modal">&times;</button>
            </div>
      
            <!-- Modal body -->
            <div class="modal-body" id="terminaEn">
              Segun los calculos, vas a terminar la carrera en 
            </div>
      
            <!-- Modal footer -->
            <div class="modal-footer">
              <button type="button" class="btn btn-danger" data-dismiss="modal">Cerrar</button>
            </div>
      
          </div>
        </div>
      </div>



    <script src="js/jquery.js"></script>
    <script src="js/bootstrap.min.js"></script>
</body>
</html>
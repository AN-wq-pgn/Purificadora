<?php
$usuario = "root"; //el usuario
$password = "";  //contraseña
$servidor = "localhost";//servidor local
$basededatos = "pedidos"; //nombre d la base de datos

$conexion = mysqli_connect ($servidor, $usuario, "") or die ("Error en el servidor en la Base de Datos");

$db = mysqli_select_db($conexion, $basededatos) or die ("Error al conectarse a la base de Datos");

$nombres=$_POST['nombres'];
$zona_entrega=$_POST['zona_entrega'];
$direccion=$_POST['direccion'];
$pedido=$_POST['pedido'];
$hora_entrega=$_POST['hora_entrega'];

$sql="INSERT INTO pedidos VALUES('$nombres', '$zona_entrega', '$direccion','$pedido','$hora_entrega')";
$ejecutar=mysqli_query($conexion, $sql); //se manda llamar la conexion y sql donde se encuentran los parametros

if(!$ejecutar){
echo"Huvo un error";
}else{
echo"Datos Guardados Correctamente<br><a href='formulariop.html'> volver</a>";
}
?>


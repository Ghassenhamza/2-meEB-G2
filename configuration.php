<?php
 
$conn =  mysqli_connect('localhost','root','','ds2');

if($conn === false){
}
else
{die("ERREUR: Impossible de se connecter." .mysqli_connect_error());}
?>


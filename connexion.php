<?php
require('configuration.php');
session_start();
$email =$_POST['email'];
$_SESSION['email'] = $email;
$pass = $_POST['pass'];
$req =" SELECT FROM ds WHERE email_utilisateur='$email_utilisatur' and pass='$pass'";
$res = mysqli_query($conn, $req);
    if(mysqli_num_rows($res)==1){
    header('location: menu.html');}
    else{
    $msg = "Le nom d'utilisateur ou le mot de passe est incorrect."; echo $msg;
    }
    
    
?>
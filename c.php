<?php
require('configuration.php');
$req="INSERT into ds (id ,nom_utilisateur ,email_utilisatur,pass,pass2) VALUES ('', '$nom_utilisateur', '$email_utilisatur', '$pass','$pass2') ";
$res = mysqli_query($conn, $req);
if($res){
echo "<div>
<h3>Vous êtes inscrit avec succès.</h3>
<p>Cliquez ici pour vous <a href='connexion.html'>connecter</a></p>
</div>";
} else echo 'requete non executée';
?>
<?php (include_once("landing-page.html")) ?>

<?php

if(isset($_POST['submitForm'])){
    $name = $_POST['name'];
    $subject = $_POST['subject'];
    $emailFrom = $_POST['email'];
    $message = $_POST['message'];

    $mailTo = "onyibalusomto@outlook.com";
    $header = "From: ".$emailFrom;
    $txt = "You have received a message from ".$name.".\n\n".$message;


    mail($mailTo, $subject, $txt, $header);
    
    header("Location: landing-page.html?message-sent");  
}
?>
<?php
    $name = filter_var($_POST['name'],FILTER_SANITIZE_STRING);
    $email = filter_var($_POST['email'],FILTER_SANITIZE_STRING);
    $phone = filter_var($_POST['phone'],FILTER_SANITIZE_STRING);
    $topic = filter_var($_POST['topic'],FILTER_SANITIZE_STRING);
    
        // code...
        if (isset($_POST['submit'])) {
            // code...
        $header = 'From : '.$email.'\r\n';
        mail('amrragab28090@gmail.com','user',$topic,$header);
        
        }
?>
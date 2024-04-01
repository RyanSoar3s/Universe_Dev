<?php 
    require "validate-data.php";

    $email = $_POST["email"];
    $pass = $_POST["password"];

    $is_valid = validateData($email, $pass);

    if (!$is_valid)
        header("Location: ../../../app/pages/login.html?erro=1");

    else
        header("Location: ../../../app/pages/main-page.html");

?>  
<?php 
    $email = $_POST["email"];
    $hash = password_hash($_POST["password"], PASSWORD_DEFAULT);

    $file = "user-data.json";

    $user_data = file_get_contents($file);
    $json = json_decode($user_data, true);

    if (isset($json["Users"][$email]))
        header("Location: ../../../app/pages/sign-in.html?erro=1");

    else {
        $json["Users"][$email] = $hash;

        $encode_json_file = json_encode($json, JSON_PRETTY_PRINT);

        file_put_contents($file, $encode_json_file);

        header("Location: ../../../app/pages/main-page.html");
    };

?>
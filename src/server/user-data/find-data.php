<?php 
    function findData($_EMAIL, $_PASS) {
        $file = "user_data.json";

        if (file_exists($file)) {
            $content = file_get_contents($file);
            $data = json_decode($content, true); 

            if (isset($data["Users"][$_EMAIL]) && $data["User"][$_EMAIL] === $_PASS)
                return true;

            return false;

        }

        else {
            throw new Exception("Error: File Does Not Exist.");

        }

    }
/* 
    Lembrar de criptografar as senhas
*/
?>
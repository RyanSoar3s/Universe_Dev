<?php 
    function validateData($email, $pass) {
        $file = "user-data.json";

        if (file_exists($file)) {
            $content = file_get_contents($file);
            $data = json_decode($content, true); 

            if (isset($data["Users"][$email]) && password_verify($pass, $data["Users"][$email]))
                return true;

            return false;
            
        }

        else {
            throw new Exception("Error: File Does Not Exist.");

        }

    }

?>
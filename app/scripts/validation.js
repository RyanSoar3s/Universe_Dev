// PATTERNS
const EMAIL_PATTERN = /^(?!gmail|email|outlook)\w+(?:\.\w+)*@[a-z]+(?:-[a-z]+)*\.[a-z]{2,}(?:\.[a-z]{2,})?$/
const PASSWORD_PATTERN = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#\-&_.!\"'*]).{8,50}$/

// VALIDATION
document.querySelector("form").addEventListener("submit", (event) => {
    // DATAS
    let input_email = document.querySelector('[data-email="email"]')
    let input_password = document.querySelector('[data-password="password"]')
    let email = input_email.value
    let password = input_password.value 

    //Error Message
    let error_email = document.getElementsByClassName("invalid-data")[0]
    let error_password = document.getElementsByClassName("invalid-data")[1]

    if (email == "" || password == "") {
        if (email == "") {
            input_email.style.outline = "2px solid red"
            error_email.textContent = "Campo vazio"

        }

        else {
            input_email.style.outline = "none"
            error_email.textContent = ""

        }

        if (password == "") {
            input_password.style.outline = "2px solid red"
            error_password.style.fontSize = "16px"
            error_password.textContent = "Campo vazio"
        
        }

        else {
            input_password.style.outline = "none"
            error_password.textContent = ""

        }

        event.preventDefault()

    }

    else if (!email.match(EMAIL_PATTERN)) {
        input_email.style.outline = "2px solid red"
        error_email.textContent = "Por favor, digite um email válido."
        input_password.style.outline = "none"
        error_password.textContent = ""
        event.preventDefault()

    }

    else if (password.length < 8 || password.length > 50) {
        input_email.style.outline = "none"
        error_email.textContent = ""
        input_password.style.outline = "2px solid red"
        error_password.style.fontSize = "16px"
        error_password.textContent = "Por favor, a senha deve ter entre 8 e 50 caracteres."
        event.preventDefault()

    }

    else if (!password.match(PASSWORD_PATTERN)) {
        input_email.style.outline = "none"
        error_email.textContent = ""
        input_password.style.outline = "2px solid red"
        error_password.style.fontSize = "12px"
        error_password.textContent = "Por favor, digite pelo menos: uma letra minúscula, uma letra maiúscula, um número e um caractere especial (@#-&_.!\"'*)"
        event.preventDefault()

    }

})

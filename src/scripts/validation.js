// PATTERNS
const EMAIL_PATTERN = /^[\w\.]+@gmail\.com$/
const PASSWORD_PATTERN = /^[(A-Z)+(a-z)+(0-9)+(@\._)+]{8,}$/
///^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[@._])[\w\.]{8,}/

// VALIDATION
document.querySelector("form").addEventListener("submit", (event) => {
    // DATAS
    let email = document.querySelector('[data-email="email"]').value
    let password = document.querySelector('[data-password="password"]').value

    if (email == "" || password == "") {
        alert("Por favor, digite em todos o campos.")
        event.preventDefault()

    }

    else if (!email.match(EMAIL_PATTERN)) {
        alert("Por favor, digite um email(gmail) válido.")
        event.preventDefault()

    }

    else if (!password.match(PASSWORD_PATTERN)) {
        alert("Por favor, digite uma senha com no mínimo 8 caracteres.")
        event.preventDefault()

    }

})

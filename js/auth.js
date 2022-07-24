const buttonAuth = document.querySelector('.button-auth')
const buttonOut = document.querySelector('.button-out')
const userName = document.querySelector('.user-name')
const modalAuth = document.querySelector('.modal-auth')
const closeAuth = document.querySelector('.close-auth')
const logInForm = document.getElementById('logInForm')
const inputlogin = document.getElementById('login')
const inputPassword = document.getElementById('password')
const inputloginError = document.getElementById('login-error')
const inputPasswordError = document.getElementById('password-error')

const login = (user) => {
    buttonAuth.style.display = 'none'
    buttonOut.style.display = 'flex'
    userName.style.display = 'inline-flex'
    userName.textContent = user.login
    modalAuth.style.display = 'none'
}

const logout = () => {
    buttonAuth.style.display = 'flex'
    buttonOut.style.display = 'none'
    userName.style.display = 'none'
    userName.textContent = ''
    localStorage.removeItem('user')
}

buttonAuth.addEventListener('click', () => {
    modalAuth.style.display = 'flex'
})

buttonOut.addEventListener('click', () => {
    logout()
})

modalAuth.addEventListener('click', (e) => {
    if (e.target == closeAuth || e.target == modalAuth) {
        modalAuth.style.display = 'none'
    }
})

logInForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const user = {
        login: inputlogin.value,
        password: inputPassword.value,
    }

    if (user.login.length > 0 && user.password.length > 0) {
        localStorage.setItem('user', JSON.stringify(user))
        login(user)
        inputlogin.style.borderColor = 'black'
        inputloginError.style.display = 'none'
        inputPassword.style.borderColor = 'black'
        inputPasswordError.style.display = 'none'
    } else {
        if (user.login.length == ' ') {
            addError(inputlogin, inputloginError)
        } else {
            removeError(inputlogin, inputloginError)
        }
        if (user.password.length == ' ') {
            addError(inputPassword, inputPasswordError)
        } else {
            removeError(inputPassword, inputPasswordError)
        }
    }
})

if (localStorage.getItem('user')) {
    login(JSON.parse(localStorage.getItem('user')))
}

function addError(input, error) {
    input.style.borderColor = 'red'
    error.style.display = 'block'
}

function removeError(input, error) {
    input.style.borderColor = ''
    error.style.display = ''
}
class User {
    constructor () {
        
    }

    static getKey(){
        return 'username'
    }

    static save(user){
        localStorage.setItem(User.getKey(), user)
    }

    static get(){
        return localStorage.getItem(User.getKey())
    }

    static remove(){
        localStorage.removeItem(User.getKey())
    }
}

const showUsername = function(){
    const username = User.get()
    const inputUser = document.querySelector('.username')
    const logoutOpt = document.querySelector('#logout')
    if(username != '' && username != null){
        inputUser.innerHTML = ''
        inputUser.innerHTML = username + '<i class="fas fa-user"></i>'
        logoutOpt.style.display = 'block'
        inputUser.href = '#'
    }else{
        inputUser.innerHTML = 'Login<i class="fas fa-user"></i>'
        inputUser.href = 'login.html'
    }
}
const logOut = function(){
    const logoutOpt = document.querySelector('#logout')
    localStorage.clear()
    logoutOpt.style.display = 'none'
    window.location.href = 'index.html'
}
const init = function(){
    document.querySelector('.logout').addEventListener('click', logOut)
    showUsername()
}
const loadLogin = function (){
    const btnLogin = document.querySelector('#btnLogin')
    btnLogin.addEventListener('click', function(){
        if(document.querySelector('#username').value != ''){
            User.save(document.querySelector('#username').value)
            window.location.href = 'index.html'
        }else{
            alert('Ingrese un nombre de usuario')
        }
    })
}

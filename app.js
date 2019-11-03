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

const getProduct = function(index){
    const products = [
        {
          imgUrl: "https://guesseu.scene7.com/is/image/GuessEU/M63H24W7JF0-L302-ALTGHOST?wid=1500&fmt=jpeg&qlt=80&op_sharpen=0&op_usm=1.0,1.0,5,0&iccEmbed=0",
          name: "CHECK PRINT SHIRT",
          price: 2103
        },
        {
          imgUrl: "https://guesseu.scene7.com/is/image/GuessEU/FLGLO4FAL12-BEIBR?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0",
          name: "GLORIA HIGH LOGO SNEAKER",
          price: 1740
        },
        {
          imgUrl: "https://guesseu.scene7.com/is/image/GuessEU/HWVG6216060-TAN?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0",
          name: "CATE RIGID BAG",
          price: 94.5
        },
        {
          imgUrl: "http://guesseu.scene7.com/is/image/GuessEU/WC0001FMSWC-G5?wid=520&fmt=jpeg&qlt=80&op_sharpen=0&op_usm=1.0,1.0,5,0&iccEmbed=0",
          name: "GUESS CONNECT WATCH",
          price: 1810
        },
        {
          imgUrl: "https://guesseu.scene7.com/is/image/GuessEU/AW6308VIS03-SAP?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0",
          name: "'70s RETRO GLAM KEFIAH",
          price: 400
        },
        {
          imgUrl:"https://http2.mlstatic.com/laptop-gamer-dell-g3-3779-intel-core-i7-8750h-16gb-1tb-ssd-128gb-pantalla-17-full-hd-nvidia-geforce-gtx-1050ti-4gb-D_NQ_NP_630765-MLM32008749861_082019-F.webp",
          name:"LAPTOP GAMER DELL G3 3779 INTEL CORE I7 8750H 16GB 1TB SSD 128GB PANTALLA 17 FULL HD NVIDIA GEFORCE GTX 1050TI 4GB",
          price: 28799
        },
        {
          imgUrl:"https://http2.mlstatic.com/D_NQ_NP_2X_797508-MLA31274883489_062019-F.webp",
          name:"XIAOMI MI A2 LITE DUAL SIM 64 GB NEGRO",
          price: 3500
        },
        {
          imgUrl:"https://http2.mlstatic.com/consola-playstation-4-ps4-slim-1tb-control-dualshock-4-D_NQ_NP_740091-MLM31236354023_062019-F.webp",
          name:"CONSOLA PLAYSTATION 4 PS4 SLIM 1TB CONTROL DUALSHOCK 4",
          price: 9600
        },
        {
          imgUrl:"https://http2.mlstatic.com/vance-hines-twin-slash-harley-davidson-14-19-sportster-D_NQ_NP_894947-MLM31506376487_072019-F.webp",
          name:"VANCE & HINES TWIN SLASH HARLEY DAVIDSON '14-'19 SPORTSTER",
          price: 10120
        },
        {
          imgUrl:"https://http2.mlstatic.com/D_NQ_NP_2X_734459-MLA31275670525_062019-F.webp",
          name:"XIAOMI POCOPHONE F1 DUAL SIM 128 GB STEEL BLUE",
          price: 10000
        }
      ]
      return products[index]
}

const createImg = function(url) {
	const productImg = document.createElement('img')
	productImg.src = url
	productImg.classList.add('image')
	return productImg
}
const createName = function (name) {
	const productName = document.createElement('h1')
	const text = document.createTextNode(name)
	productName.appendChild(text)
	productName.classList.add('name')
	return productName
}
const createPrice = function(price){
    const productPrice = document.createElement('h2')
    const text = document.createTextNode('$'+price+' MXN')
    productPrice.appendChild(text)
    productPrice.classList.add('price')
    return productPrice
}

const renderProduct = function(product) {
    const screen = document.querySelector('#products')
    const btnAddCar = document.createElement('button')
    btnAddCar.innerHTML = '<i class="fas fa-cart-plus"></i>'
    btnAddCar.classList.add('btnAdd')
	screen.appendChild(createImg(product.imgUrl))
    screen.appendChild(createName(product.name))
    screen.appendChild(createPrice(product.price))
    screen.appendChild(btnAddCar)
}

const initProducts = function(cantidad){
    for(let i=0; i<cantidad; i++){
        renderProduct(getProduct(i))
    }
}
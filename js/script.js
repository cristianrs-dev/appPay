const valor = document.getElementById("valor")
const pix = document.getElementById("pix")
const cpf = document.getElementById("cpf")
const cartao = document.getElementById("cartao")
const bntDados = document.getElementById("informarDados")
const formPix = document.getElementById("formPix")
const formCartao = document.getElementById("formCartao")
const total = document.getElementById("total")
const pagar = document.getElementById("pagar")
const numero = document.getElementById("numero")
const titular = document.getElementById("titular")
const codigo = document.getElementById("codigo")
const vencimento = document.getElementById("vencimento")
const moneyCard = document.getElementById("moneyCard")
const parcela4= document.getElementById("parcela4")
const parcela5= document.getElementById("parcela5")
const parcelas = document.getElementById("parcelas")
function checarInputValor() {
    if (valor.value == "") {
        return true
    }
}
function checarInputCpf() {
    if (cpf.value == "") {
        return true
    }
}

function destacarConteudo() {
    valor.style.borderColor = "red"
}

function checarPix() {
    if (pix.checked) {
        return true
    }
}
function checaCartao() {
    if (cartao.checked) {
        return true
    }
}
function getValor() {
    let money = parseFloat(valor.value)
    return money
}
function desconto() {
    let desconto = parseFloat(valor.value) * 0.10
    return desconto
}

function informaDados() {
    if (checarInputValor() == true) {
        bntDados.addEventListener("focus", destacarConteudo)
        alert("campo valor vazio")

    } else {
        if (checarPix()) {
            formPix.style.display = "block"
            formCartao.style.display = "none"
            total.innerHTML = desconto() + getValor()
        } else if (checaCartao()) {
            formCartao.style.display = "block"
            formPix.style.display = "none"

        }
    }
}



function verificaCamposVazios() {
    if (numero.value == "") {
        alert("campo numero vazio")
        numero.style.borderColor="red"
        return true
    } else if (titular.value == "") {
        alert("campo titular vazio")
        titular.style.borderColor="red"
        return true
    } else if (codigo.value == "") {
        alert("campo codigo vazio")
        codigo.style.borderColor="red"
        return true
    } else if (vencimento.value == "") {
        alert("campo vencimento vazio")
        vencimento.style.borderColor="red"
        return true
    } else {
        return false
    }
}

function verificaDigito(){
    if(numero.value === "1234"){
        moneyCard.src='img/mastercard.png'
        
    }else if(numero.value === "4321" ){

        moneyCard.src='img/elocard.png'
        moneyCard.style.width="60px"
    }
    
}

function calcucaParcelamento(){
    let juros
    let money = parseFloat(valor.value)
    let parcela=parseInt(parcelas.value)
    if(parcela === 4){
        juros = (money * parcela * 0.05)/100  
        parcela4.innerHTML = (money + juros).toFixed(2)
        
        total.innerHTML= (money + juros).toFixed(2)
    }else if(parcela === 5){
        juros = (money * parcela * 0.10)/100
        parcela5.innerHTML = money + juros
        total.innerHTML= (money + juros).toFixed(2)
    }
   
}
parcelas.addEventListener("input",calcucaParcelamento)

function pagamento() {
    if(checarPix()){
        if(cpf.value == ""){
            alert("campo cpf vazio")
            cpf.style.borderColor="red"
        }
    }else if(checaCartao()){
        verificaCamposVazios()
    }
}




pix.addEventListener("click", checarPix)
cartao.addEventListener("click", checaCartao)
bntDados.addEventListener("click", informaDados)
bntDados.addEventListener("click", checarInputValor)
pagar.addEventListener("click",pagamento)
numero.addEventListener("input",verificaDigito)
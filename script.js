// função que chama mensagem na tela 
function ola(){
    alert('Olá.')
}
// função com parâmetro

function olaPessoa(nome){
    alert(nome + ' seja bem vindo!')
}

// função captura de elemto
function saudacao(){
    const nome = document.getElementById('nome').value
    alert('Olá ' + nome)
}

function mouseSobre(){
    alert('O mouse está em cima')
}

function mouseFora(){
    alert('O mouse saiu!')
}

function textoModificado(){
    alert('O texto foi alterado.')
}

function emFoco(){
    const user = document.getElementById('user')
    user.style.border = '3px solid green'
    user.style.backgroundColor = 'grey'
}

function semFoco(){
    user.style.border='1px solid black'
    user.style.background = 'white'
}

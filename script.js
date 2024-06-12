
function verificar(){
    let nome = document.querySelector('input#inome')
    let sob = document.querySelector('input#isob')
    let data = document.querySelector('input#idata')
    let res = document.querySelector('div#res')
    let div1 = document.querySelector('div#espaco1')
    let div2 = document.querySelector('div#espaco2')
    
    if (nome.value.toUpperCase() == 'CAMILA' && (sob.value.toUpperCase() == 'DOENHA' || sob.value.toUpperCase() == 'FERNANDES') && data.value == '2023-10-26'){
        div1.style.display = "block";
        div2.style.display = "block";
        div2.innerHTML += '<p><strong>Feliz dia dos namorados meu amor!</strong><br>Não tão feliz né, longe de você, nem sei se vou te ver hoje.<br>Eu quero e pretendo te dar o mundo, mesmo hoje não podendo te dar nem uma flor, mesmo sem te dar a aliança, que tanto quero te dar.<br>Te peço desculpa por isso e paciência com esse desastrado kkk, porque você é minha sunshine, é meu pensamento durante todo meu dia, e ainda invade meus sonhos a noite.<br>É quem eu escolhi no dia 26, quem escolho hoje e quem vou sempre escolher.<br><strong>TE AMO MUITO MINHA FEDIDA!</strong></p>'
    } else {
        alert('[ERRO], esse site não é para você.')
        res.innerHTML = ''
        }
}
        
function limpar(){
    let res = document.querySelector('div#res')
    res.innerHTML = ''

}
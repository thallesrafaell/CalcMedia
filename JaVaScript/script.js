const form = document.getElementById('form-atividade')
const emojiA = '<img src="images/aprovado.png" alt="Emoji festejando">'
const emojiR = '<img src="images/reprovado.png" alt="Emoji decepcionado">'
let linhas = ``
const nomeat = []
const notas = []
const spanA = '<span class="resultado aprovado">Aprovado</span>'
const spanR = '<span class="resultado reprovado">Reprovado</span>'
const mc = parseFloat(prompt("Digite a nota de corte:"))

form.addEventListener('submit', function(e){
    e.preventDefault()
    addlinha() 
    atttab()
    attmedia()
})

function addlinha() {
    const atividade = document.getElementById('atividade')
    const nota = document.getElementById('nota')

    if(nomeat.includes(atividade.value)){
        alert(`A atividade ${atividade.value} ja foi adcionada.`)
    } else{
    nomeat.push(atividade.value)
    notas.push(parseFloat(nota.value))

    let linha =`<tr>`
    linha += `<td>${atividade.value}</td>`
    linha += `<td>${nota.value}</td>`
    linha += `<td>${nota.value >= 7 ? emojiA : emojiR}</td>`
    linha += `</tr>`

    linhas += linha
    }

    atividade.value = ''
    nota.value = ''
}

function atttab() {
    const tab = document.querySelector('tbody')
    tab.innerHTML = linhas
}

function attmedia(){
    const mediafinal = calcmedia()

    document.getElementById('mfv').innerHTML = mediafinal.toFixed(2)
    document.getElementById('mfres').innerHTML = mediafinal >= mc ? spanA : spanR 
}

function calcmedia() {
    let somanotas = 0
    
    for(let i = 0; i < notas.length; i++){
        somanotas += notas[i]  
    }

    return somanotas / notas.length
    
}




const palavras = [
    palavra001 = {
        nome: 'ABECASIA',
        categoria: 'LUGARES'
    },
    palavra002 = {
        nome: 'AFEGANISTAO',
        categoria: 'LUGARES'
    },
    palavra003 = {
        nome: 'ANGOLA',
        categoria: 'LUGARES'
    },
    palavra004 = {
        nome: 'ALBANIA',
        categoria: 'LUGARES'
    },
    palavra005 = {
        nome: 'ALEMANHA',
        categoria: 'LUGARES'
    },
    palavra006 = {
        nome: 'ARGENTINA',
        categoria: 'LUGARES'
    },
    palavra007 = {
        nome: 'ALEMANHA',
        categoria: 'LUGARES'
    },
    palavra008 = {
        nome: 'ARMENIA',
        categoria: 'LUGARES'
    },
    palavra009 = {
        nome: 'AUSTRIA',
        categoria: 'LUGARES'
    },
    palavra0010 = {
        nome: 'AUSTRALIA',
        categoria: 'LUGARES'
    },
    palavra0011 = {
        nome: 'ARZEBAIJAO',
        categoria: 'LUGARES'
    },
    palavra0012 = {
        nome: 'ARZEBAIJAO',
        categoria: 'LUGARES'
    },
    palavra0013 = {
        nome: 'ARZEBAIJAO',
        categoria: 'LUGARES'
    },
    palavra0014 = {
        nome: 'BAHAMAS',
        categoria: 'LUGARES'
    },
    palavra0015 = {
        nome: 'BELGICA',
        categoria: 'LUGARES'
    },
    palavra0016 = {
        nome: 'BARBADOS',
        categoria: 'LUGARES'
    },
    palavra0017 = {
        nome: 'BOLIVIA',
        categoria: 'LUGARES'
    },
    palavra0018 = {
        nome: 'BELIZE',
        categoria: 'LUGARES'
    },
    palavra0019 = {
        nome: 'BENIM',
        categoria: 'LUGARES'
    },
    palavra0020 = {
        nome: 'BIELORUSSIA',
        categoria: 'LUGARES'
    },
    palavra0021 = {
        nome: 'BOSNIA',
        categoria: 'LUGARES'
    },
    palavra0022 = {
        nome: 'BRASIL',
        categoria: 'LUGARES'
    },
    palavra0023 = {
        nome: 'BULGARIA',
        categoria: 'LUGARES'
    },
    palavra0024 = {
        nome: 'CAMAROES',
        categoria: 'LUGARES'
    },
   
    palavra0025 = {
        nome: 'CATAR',
        categoria: 'LUGARES'
    },
   
    palavra0026 = {
        nome: 'CANADA',
        categoria: 'LUGARES'
    },
   
    palavra0027 = {
        nome: 'CAZAQUISTAO',
        categoria: 'LUGARES'
    },
   
    palavra0028 = {
        nome: 'CHADE',
        categoria: 'LUGARES'
    },
    palavra0029 = {
        nome: 'CHILE',
        categoria: 'LUGARES'
    },
    palavra0030 = {
        nome: 'CHINA',
        categoria: 'LUGARES'
    },
    palavra0031 = {
        nome: 'CHIPRE',
        categoria: 'LUGARES'
    },
    palavra0032 = {
        nome: 'CINGAPURA',
        categoria: 'LUGARES'
    },
    palavra0033 = {
        nome: 'COLOMBIA',
        categoria: 'LUGARES'
    },
    palavra0034 = {
        nome: 'COMORES',
        categoria: 'LUGARES'
    },
    palavra0035 = {
        nome: 'CROACIA',
        categoria: 'LUGARES'
    },
    palavra0036 = {
        nome: 'CUBA',
        categoria: 'LUGARES'
    },
    palavra0037 = {
        nome: 'DINAMARCA',
        categoria: 'LUGARES'
    },
    palavra0038 = {
        nome: 'DJIBOUTI',
        categoria: 'LUGARES'
    },
    palavra0039 = {
        nome: 'EGITO',
        categoria: 'LUGARES'
    },
    palavra0040 = {
        nome: 'EQUADOR',
        categoria: 'LUGARES'
    },
    palavra0041 = {
        nome: 'ESCOCIA',
        categoria: 'LUGARES'
    },
    palavra0042 = {
        nome: 'ESLOVAQUIA',
        categoria: 'LUGARES'
    },
    palavra0043 = {
        nome: 'ESLOVENIA',
        categoria: 'LUGARES'
    },
    palavra0044 = {
        nome: 'ESTONIA',
        categoria: 'LUGARES'
    },
    palavra0045 = {
        nome: 'ESTONIA',
        categoria: 'LUGARES'
    },
    palavra0046 = {
        nome: 'ETIOPIA',
        categoria: 'LUGARES'
    },
    palavra0047 = {
        nome: 'FIJI',
        categoria: 'LUGARES'
    },
    palavra0048 = {
        nome: 'FILIPINAS',
        categoria: 'LUGARES'
    },
    palavra0049 = {
        nome: 'FINLANDIA',
        categoria: 'LUGARES'
    },
    palavra0050 = {
        nome: 'FRANCA',
        categoria: 'LUGARES'
    },
    palavra0051 = {
        nome: 'GABAO',
        categoria: 'LUGARES'
    },
    palavra0052 = {
        nome: 'GAMBIA',
        categoria: 'LUGARES'
    },
    palavra0053 = {
        nome: 'GEORGIA',
        categoria: 'LUGARES'
    },
    palavra0054 = {
        nome: 'GRANADA',
        categoria: 'LUGARES'
    },
    palavra0055 = {
        nome: 'GANA',
        categoria: 'LUGARES'
    },
    palavra0056 = {
        nome: 'GRECIA',
        categoria: 'LUGARES'
    },
    palavra0057 = {
        nome: 'GUATEMALA',
        categoria: 'LUGARES'
    },
    palavra0058 = {
        nome: 'GUIANA',
        categoria: 'LUGARES'
    },
    palavra0059 = {
        nome: 'GUINE',
        categoria: 'LUGARES'
    },
    palavra0060 = {
        nome: 'HAITI',
        categoria: 'LUGARES'
    },
    
    
]


function escolhadepalavras(){
    let n = 0
    
    return palavras[ n = Math.round(Math.random() * (palavras.length - 1))]
}


const keyboard = [...document.querySelectorAll('.keys')]
const heart = [...document.querySelectorAll('#life')]
const score = document.querySelector('#score')

let tentativas = 6
let letra = ''

let pdavez = ''
let cdavez = ''


inicio()

let idexlife = 2
let vida = 33.4
let transformlife = vida

score.classList.toggle('disp')

document.querySelector('#categoria').innerHTML=cdavez

function inicio(){
    let escolha = escolhadepalavras()
    pdavez = escolha.nome 
    cdavez = escolha.categoria
    tamanhobox(pdavez)
}

function criarBox(p){
    const box = document.createElement('div')
    box.setAttribute('class','box')
    document.querySelector('#section').appendChild(box)
    box.innerHTML = ''
}

function tamanhobox([...rest]){
   for(let i = 0; i < rest.length; i++){
    criarBox(rest[i])
   }
}

function escrever(){
    keyboard.map((el)=>{

        el.addEventListener('click',(event)=>{
            if(event.target.classList.contains('active') != true){
            letra = event.target.innerHTML     
            analisar()  
          
            event.target.classList.toggle('active')
            }
        })
    
    })
                
}

function tela(i,letra){
    const tela = [...document.querySelectorAll('.box')]
    for(a = 0; a < pdavez.length; a++){
        if(pdavez[a] == letra){         
            tela[a].innerHTML = letra
        }
    }

}

function analisar(){
    let idex = pdavez.indexOf(letra)
        
    if(idex != -1){
        tela(idex,letra)
        gamewin()
    }else {
        tentativas--     
        tirarvida()
        gamerover()
        
    }
}


function tirarvida(){
    if(transformlife == (vida*3)){
        transformlife = vida
        idexlife--
    }
    
    heart[idexlife].style = `transform: translate(-${transformlife}px)`
    transformlife = transformlife + vida
    console.log(transformlife)
    console.log(tentativas)
}

function key_over(){
    keyboard.map((key)=>{
        key.classList.add('active')
    })
}

function key_reset(){
    keyboard.map((key)=>{
        key.classList.remove('active')
    })
}

function gamerover(){
    if(tentativas == 0){
        score.classList.toggle('disp')
        document.querySelector('.title_game').innerHTML = 'VOÇÊ PERDEU'
        document.querySelector('#answer').innerHTML = pdavez
        key_over()
        
    }

    }

function gamewin(){
    const palavra = [...document.querySelectorAll('.box')]
    const ps = []
    palavra.map((p)=>{
        ps.push(p.innerHTML)
    })
    if(ps.join('') == pdavez){
        score.classList.toggle('disp')
        document.querySelector('#answer').innerHTML = pdavez
        document.querySelector('.title_game').innerHTML = 'VOÇÊ VENCEU'
        key_over()
    }

}

document.querySelector('#reset').addEventListener('click',()=>{
    const box = document.querySelector('.section')
    
    score.classList.toggle('disp')
    key_reset()
    heart.map((el)=>{
        el.style.transform = `translateX(0)`
    })
    tentativas = 6
    idexlife = 2
    vida = 33.4
    transformlife = vida
    box.innerHTML = ''
    inicio()
})


    
escrever()


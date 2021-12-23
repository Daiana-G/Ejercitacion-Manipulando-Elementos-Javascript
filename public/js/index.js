function qs (element){
    return document.querySelector(element)
}

let $main = qs('.container')
let $subtitle = qs('.subtitulo')
let $a = qs('a')
let $paragraph = document.querySelectorAll('p')


let userName = prompt('ingrese su nombre') 
//prompt('ingrese su nombre') ?? 'invitad@'


userName.trim() !== ""
? ($subtitle.innerText+=`${userName}`)
: ($subtitle.innerText+= "invitad@")

$subtitle.style.textTransform = "uppercase"


$a.style.color = "#E51B3E"

let background = confirm("¿Desea colocar un fondo de pantalla") 

background && document.body.classList.add('fondo')


$paragraph.forEach((element, i)=>{
    if ((i + 1) % 2===0){
        element.classList.add("destacadoPar")
    }else{
        element.classList.add("destacadoImpar")
    }
}) 

/*$paragraph
for (let i = 0; i < $paragraph.length; i++) {
    if(i%2 ==1){ 
        $paragraph[i].classList.add("destacadoPar")
    }else{ 
        $paragraph[i].classList.add("destacadoImpar")
    }
}*/


$main.style.display="block"
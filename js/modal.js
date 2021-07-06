function iniciaModal(){
    const modal = document.getElementById('modal-container')
    modal.style.display = "block"
}

function fechaModal(){
    const modal = document.getElementById('modal-container')
    window.onclick = (evento) => { 
        if(evento.target == modal){ 
            modal.style.display = "none"
        }
    }
}


// DARK E LIGHT MODE

/* 
gente desculpa, eu tentei usar cookies só que não tava indo, 
ai eu fui pesquisar se tinha algum outro jeito de salvar e
encontrei o local storage...
*/ 
var checkbox = document.getElementById('checkbox')
if(localStorage.getItem("mode") == "dark"){
    darkmode()
}else{
    nodark()
}

checkbox.addEventListener('change', function(){
    if(checkbox.checked){
        darkmode()
    }else{
        nodark()
    }
})

function darkmode(){
    document.body.classList.toggle("dark")
    checkbox.checked = true
    localStorage.setItem("mode", "dark")
}

function nodark(){
    document.body.classList.remove("dark")
    checkbox.checked = false
    localStorage.setItem("mode", "light")
}





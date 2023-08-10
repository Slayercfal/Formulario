const form = document.getElementById('form')
const campos = document.querySelectorAll('.required')
const span = document.querySelectorAll('.span-required')

const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

form.addEventListener('submit' , (event) => {
    event.preventDefault()
    
    NameValidade()
    emailValidade()
    mainPasswordValidate()
    comparePassword()
})

function setError(index){
    campos[index].style.border = '2px solid #e63636'
    span[index].style.display = 'block'
}

function removeError(index){
    campos[index].style.border = ''
    span[index].style.display = 'none'
}

function NameValidade(){
    if(campos[0].value.length < 3){
        setError(0)
    }
    else{
        removeError(0)
    }
}


function emailValidade(){
    if(!validRegex.test(campos[1].value)){
        setError(1)
    }else{
        removeError(1)
    }
}

function mainPasswordValidate(){
    if(campos[2].value.length < 8){
        setError(2)

    }else{
        removeError(2)
        comparePassword()
    }
}

function comparePassword(){
    if(campos[2].value == campos[3].value && campos[3].value.length >= 8){
        removeError(3)
    }else{
        setError(3)
    }
}
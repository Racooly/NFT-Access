const email = document.getElementById('emailInp')
const pass = document.getElementById('passInp')
const delet = document.getElementById('delete')
const show = document.getElementById('show')
const hide = document.getElementById('hide')

delet.addEventListener('click', ()=>{
    email.value = ""
})
show.addEventListener('click', ()=>{
    pass.type = "text"
    hide.style.display = "inline"
    show.style.display = "none"
})
hide.addEventListener('click', ()=>{
    pass.type = "password"
    show.style.display = "inline"
    hide.style.display = "none"
})
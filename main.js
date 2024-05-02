function submit(){
    let username = document.getElementById("username").value
    let password = Number(document.getElementById("password").value)
    if(username === "admin"){
        if(password === 123){
            alert("success")
        }else{
            alert("password xato")
        }
    }else if(password === 123){
        alert("username xato")
    }else{
        alert("username va password xato")
    }
}


function getShow(){
    let password = document.getElementById("password")
    if(password.type === "password"){
        password.type = 'text'
    }
    else{
        password.type = 'password'
    }
}


function countWords() {
    let text = document.getElementById("text").value
    let words = text.trim().split(/\s+/)
    let wordCount = text.trim() === "" ? 0 : words.length
    alert(`So'zlar soni: ${wordCount}`)
}

function create(e){
    e.preventDefault();
    let result = document.getElementById("result")
    let width = e.target[0].value
    let height = e.target[1].value
    let bg_color = e.target[2].value
    let border_r = e.target[3].value
    console.log(result, width, height, bg_color, border_r);
    let newElement = document.createElement('div')
    newElement.style.width = `${width}px`
    newElement.style.height = `${height}px` 
    newElement.style.backgroundColor = `${bg_color}`
    newElement.style.borderRadius = `${border_r}px`
    result.appendChild(newElement)
}
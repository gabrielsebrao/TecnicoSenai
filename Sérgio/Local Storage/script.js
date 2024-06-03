function criarLogin()
{
    let user = document.getElementById("usuario").value 
    let password = document.getElementById("senha").value

    localStorage.setItem("usuario", user)
    localStorage.setItem("senha", password)

    alert("Login criado com sucesso!")
}

function fazerLogin()
{
    let user = document.getElementById("usuario").value 
    let password = document.getElementById("senha").value
    let userLocalStorage = localStorage.getItem("usuario")
    let passwordLocalStorage = localStorage.getItem("senha")

    if(user == userLocalStorage && password == passwordLocalStorage)
    {
        alert("Login efetuado com sucesso!")
        window.location.href = "site.html"
    } else
    {
        alert("Acesso negado ao site!")
    }
}
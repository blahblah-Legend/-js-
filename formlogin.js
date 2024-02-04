const form = document.querySelector("#MyForm")
const InputName = form.querySelector("#MyName")
const button = form.querySelector("#MyButton")
const hello = form.querySelector("#greeting")
const title = form.querySelector("#title")
const div = form.querySelector("#login")

const username = localStorage.getItem("name")


function FormLogin(event) {
    event.preventDefault();
    div.classList.add("hidden");
    const name = InputName.value;
    localStorage.setItem("name", name);
    Login(name);


}

Login = (username) => {
    title.innerText = `Hi! ${username}`
    hello.classList.remove("hidden")
        
}


if(username == null) {
    form.addEventListener("submit", FormLogin)
}
else{
    div.classList.add("hidden")
    Login(username)
}



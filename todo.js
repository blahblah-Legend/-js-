const todotext = document.querySelector("#todotext")
const todolist = document.querySelector("#list")
const todoform = document.getElementById("todoForm")


let todos = []

Todofunc = (event) => {

    event.preventDefault();
    const newtodo = todotext.value
    todotext.value = ""
    const todoobject = {
        text: newtodo,
        id: Date.now()
    }
    todos.push(todoobject)
    Maketodo(todoobject)
 
    savetodo()
}

savetodo = () => {
    localStorage.setItem("todos", JSON.stringify(todos))
}

deletetodo = (event) => {
    const myparent = event.target.parentElement;
    myparent.remove()
    todos = todos.filter((todo) => todo.id !== parseInt(myparent.id))
    savetodo()
}

Maketodo = (newtodo) => {
    const newli = document.createElement("li")
    newli.id = newtodo.id
    const newbutton = document.createElement("button")
    newbutton.innerText = "X"
    newbutton.addEventListener("click", deletetodo)

    newli.innerText = newtodo.text
    newli.appendChild(newbutton)
    todolist.appendChild(newli)

}

savedtodos = localStorage.getItem("todos")

todoform.addEventListener("submit", Todofunc)

if (todos !== null) {
    const parsedtodos = JSON.parse(savedtodos)
    todos = parsedtodos
    parsedtodos.forEach(Maketodo);
}





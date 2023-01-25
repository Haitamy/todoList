let input = document.querySelectorAll("input")[0];
value = input.value;
let ajouter = document.querySelectorAll("button")[0];
let task = document.querySelector("#task");
let todoBtn = document.querySelector('#todo')
let doneBtn = document.querySelector('#done')
let allBtn = document.querySelector('#all')

function createTask() {
  let addTask = document.createElement("div");
  let taskName = document.createElement("p");
  let check = document.createElement("i");
  let edit = document.createElement("i");
  let remove = document.createElement("i");
  let divAw = document.createElement("div");
  check.className = "fa-solid fa-circle-check";
  edit.className = "fa-solid fa-wrench";
  remove.className = "fa-solid fa-trash";
  addTask.className = "addTask todo";
  task.appendChild(addTask);
  taskName.innerText = value;
  addTask.appendChild(taskName);
  addTask.appendChild(divAw);
  divAw.appendChild(check);
  divAw.appendChild(edit);
  divAw.appendChild(remove);
  check.addEventListener("click", () => {
    addTask.classList.toggle("done");
    addTask.classList.toggle("todo");
  });
  remove.addEventListener('click',()=>{
    addTask.remove()
  })
  edit.addEventListener("click", function () {
    let input = document.createElement("input");
    input.className = "class-test";
    input.value = taskName.innerHTML;
    taskName.parentNode.replaceChild(input, taskName);

    input.addEventListener("keyup", function (event) {
      if (event.keyCode === 13) {
        let taskName = document.createElement("p");
        taskName.innerHTML = input.value;
        input.parentNode.replaceChild(taskName, input);
      }
    });
  });
  todoBtn.addEventListener('click',()=>{
    if (addTask.classList.contains('done')) {
        addTask.style.display='none'
    } else if (addTask.classList.contains('todo')) {
        addTask.style.display='flex';
  }})
  doneBtn.addEventListener('click',()=>{
    if (addTask.classList.contains('todo')) {
        addTask.style.display='none'
    } else if (addTask.classList.contains('done')) {
        addTask.style.display='flex'
    }
  })
  allBtn.addEventListener('click',()=>{
    addTask.style.display='flex'
  })
}


ajouter.addEventListener("click", createTask);


const inputfield = document.getElementById("inputfield");
const tasklist = document.getElementById("tasktable");
const addbtn = document.getElementById("addbtn");

addbtn.addEventListener("click", addtask);
let tasks = [];
let id = 0;
class Task {
  constructor(id, title, completed) {
    this.id = id;
    this.title = title;
    this.completed = completed;
  }
}

function addtask() {
  let task = inputfield.value;
  if (task == "") {
    alert("Empty task");
    return;
  }
  id = id + 1;
  const ntask = new Task(id, task, false);
  tasks.push(ntask);
  console.log(tasks);
  rendertask();
  inputfield.value = "";
}

function rendertask() {
  tasklist.innerHTML = "";
  for (let task1 of tasks) {
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    td1.innerText = task1.id;
    td2.innerText = task1.task;
    td3.innerText = task1.completed;
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tasklist.appendChild(tr);
  }
}

const inputfield = document.getElementById("inputfield");
const tasklist = document.getElementById("Tasktable");
const addbtn = document.getElementById("Addbtn");

addbtn.addEventListener("click",addtask);

function addtask() {
    let task = inputfield.value;
    let li = document.createElement("li");
    li.textContent = task;

    tasklist.appendChild(li);
    inputfield.value = "";
}
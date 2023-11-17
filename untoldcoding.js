const inputTodo = document.querySelector(".input");
const btnTodo = document.querySelector(".add");
const blockTodo = document.querySelector(".list");

btnTodo.addEventListener("click", (e) => {
  if (!inputTodo.value) {
    alert("INSERT");
  } else {
    createTask();
  }

  inputTodo.value = "";
  saveData();
});

function createTask() {
  let itemTodo = document.createElement("li");
  itemTodo.classList.add("item");
  itemTodo.innerHTML = `${inputTodo.value}`;
  blockTodo.appendChild(itemTodo);
  let checkTodo = document.createElement("span");
  checkTodo.classList.add("check");
  itemTodo.appendChild(checkTodo);
  let closeTodo = document.createElement("span");
  closeTodo.classList.add("done");
  itemTodo.appendChild(closeTodo);
}

blockTodo.addEventListener(
  "click",
  (e) => {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.classList.contains("check")) {
      e.target.parentElement.classList.toggle("checked");
      saveData();
    } else if (e.target.classList.contains("done")) {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", blockTodo.innerHTML);
}

function showData() {
  blockTodo.innerHTML = localStorage.getItem("data");
}

showData();

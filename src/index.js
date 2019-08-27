document.addEventListener("DOMContentLoaded", () => {
  // your code here
const taskForm = document.getElementById("create-task-form");
const ulEl = document.getElementById("tasks"); 

taskForm.addEventListener("submit", (e) => {
  e.preventDefault(); 
  const formInput = document.querySelector("#new-task-description");
  const newTask = new Task(formInput.value); 
  const newLi = newTask.element; 
  ulEl.append(newLi); 
  formInput.value = ""; 
  })

  ulEl.addEventListener("click", (e) => {
    if (e.target.className == "remove-btn") {
      e.target.parentNode.remove();
    }   
  })
});



class Task {
  constructor(value){
    this.inputValue = value; 
    this.element = this.constructTaskElement()
  }

  constructTaskElement(){
    const liEl = document.createElement("li");
    liEl.innerText = this.inputValue;
    const removeBtnEl = document.createElement("button");
    removeBtnEl.innerText = 'remove';
    removeBtnEl.className = 'remove-btn';
    liEl.append(removeBtnEl);
    return liEl; 
  }
};

//find the ul [id = "tasks"]
//create the li
//grab the text from the form 
//find the li
//append text to li
//append li to ul 

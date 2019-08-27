document.addEventListener("DOMContentLoaded", () => {
  const taskForm = document.getElementById("create-task-form");
  ulEl = document.getElementById("tasks");
//   liEl = document.getElementById("")
  
  taskForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const newTaskEl = document.querySelector('#new-task-description');
  })
}); //function to add li to ul
ulEl.addEventListener("click", (e) => {
    if (e.target.className == "remove-btn"){
        e.target.parentNode.remove();
    }
})
// class Task {
//     constructor(value){
//       this.inputValue = value;
//       this.element = this.constructTaskElement();
//     }

//     constructTaskElement(){
//         const liEl = document.createElement("li");
//         liEl.innerText = this.inputValue;
//         const removeBtnEl = document.createElement("button");
//         removeBtnEl.innerText = 'remove';
//         removeBtnEl.className = 'remove-btn';
//         liEl.append(removeBtnEl);
//         return liEl;
//       }
// };

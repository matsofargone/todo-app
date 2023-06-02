// serve as default load for todos




const displayController = (item) => {
 const todoDiv = document.getElementById('todo-list');
 const mainDiv = document.getElementById('main');
 const todoList = document.createElement('ul');

mainDiv.appendChild(todoDiv);
todoDiv.appendChild(todoList);









}



export default displayController;
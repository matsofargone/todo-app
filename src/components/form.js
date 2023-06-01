
const taskForm = () => {
    const div = document.getElementById('todo-list');
    const form = document.createElement('form');
    form.setAttribute('method', 'post');
    

    //create labels
    const taskLabel = document.createElement('label');
    const dateLabel = document.createElement('label');

    taskLabel.innerText = 'Task';
    dateLabel.innerText = 'Due Date';
    
    //create input
    const todoDescription = document.createElement("input");

    todoDescription.setAttribute("type", "text");
    todoDescription.setAttribute("name", 'description');
    todoDescription.setAttribute("placeholder", "Please enter a task");
    todoDescription.attributes.required = "required";

    //create  due date
    const dueDate = document.createElement('input');
    dueDate.setAttribute('type', 'text');
    dueDate.setAttribute('placeholder', 'Due Date?');

    //create button

    const submitTask = document.createElement("button");
    submitTask.setAttribute("type", "submit");
    submitTask.innerText = 'Submit';
    submitTask.setAttribute('id', 'submit');

    form.classList.add('form');
    form.setAttribute('id', 'todoForm');

    form.appendChild(taskLabel);
    form.appendChild(todoDescription);
    form.appendChild(dateLabel);
    form.appendChild(dueDate);
    form.appendChild(submitTask);
    div.appendChild(form);


}


export default taskForm;


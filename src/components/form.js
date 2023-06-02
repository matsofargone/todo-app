
const taskForm = () => {
    const div = document.getElementById('todo-list');
    const form = document.createElement('form');
    form.setAttribute('method', 'post');
    

    //create labels
    const taskLabel = document.createElement('label');
    const dateLabel = document.createElement('label');
    const projectNameLabel = document.createElement('label');

    taskLabel.innerText = 'Task';
    dateLabel.innerText = 'Due Date';
    projectNameLabel.innerText = 'Project Name';
    
    //create input
    const todoDescription = document.createElement("input");

    todoDescription.setAttribute("type", "text");
    todoDescription.setAttribute("name", 'description');
    todoDescription.setAttribute("placeholder", "Please enter a task");
    todoDescription.setAttribute("required", "");
    todoDescription.setAttribute('id', 'description');
    
    

    //create  due date
    const dueDate = document.createElement('input');
    dueDate.setAttribute('type', 'date');
    dueDate.setAttribute('id', 'duedate');

    //create project feild
    const projectName = document.createElement('input');
    projectName.setAttribute('type', 'text');
    projectName.setAttribute('id', 'name');

    

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
    form.appendChild(projectNameLabel);
    form.appendChild(projectName);
    form.appendChild(submitTask);
    div.appendChild(form);

    form.style.display = 'none';

    


}







export default taskForm;


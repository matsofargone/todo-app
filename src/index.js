import './style.css';
import {todo, projects } from './components/todo';
import createPage from './components/createPage';
import taskForm from './components/form';
import projectForm from './components/projectForm';
import {format, parseISO} from 'date-fns';



//!Utility Functions 
 const clearForm = (form) => form.reset();
 const showForm = (form) => form.style.display = 'flex';
 const hideForm = (form) => form.style.display = 'none';
 const disableButton = (button) => button.setAttribute('disabled', 'disabled');
 const enableButton = (button) => button.removeAttribute('disabled');

 //* adding submissions to list


 const addProjecttoUI = (name) => {
    const projectItems = ['Test'];
    const projectMenuList = document.getElementById('projects');
    console.log(projectMenuList);
    const li = document.createElement('li');
    li.innerText = name;
    projectItems.push(li);
    projectItems.forEach(item => {
        projectMenuList.appendChild(li);
    });


 }




createPage();
const addTask = document.getElementById('Task-button');
const addProject = document.getElementById('Project-button');
taskForm();
projectForm();


//!Views
const tasks = [];
//!Work on function ---Array returns extra blank submission after two entries 
const displayTasks = function(item) {
    const todoList = document.getElementById('todo-list');
    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    //TODO Add styles to checkbox
    // const taskName = document.getElementById('description').value;
    
    
   
    tasks.push(item);
    console.log(tasks);
    for (let i = 0; i < tasks.length; i++) {
        // const formattedDate = format(new Date(tasks[i].dueDate), 'MM-dd-yyyy' );
        const date = tasks[i].dueDate;
        const parseDate = format(parseISO(date), "MM/dd/yyyy");
        
        li.setAttribute('id', i);
       li.append(checkbox);
       li.innerHTML = `<span><input type='checkbox' class='checkbox'></span><span>${tasks[i].description}</span> <span class='dueheader'>${parseDate}</span>`
        
       
        todoList.appendChild(li);
        
        
    }
    return todoList;
}

// const testTodo = todo('Test', '10/10/2020', 'TESTING');
// displayTasks(testTodo);



//* Add Task button
addTask.addEventListener('click', function(e) {
  
    const form = document.getElementById('todoForm');
    showForm(form);
    disableButton(addTask);

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const description = document.getElementById('description');
        const dueDate = document.getElementById('duedate');
        const projectName = document.getElementById('name');
        const item = todo(description.value,dueDate.value, projectName.value);
        if (item.description != '') {
            displayTasks(item);
        }
       
     
        hideForm(form);
        clearForm(form);
        enableButton(addTask);
        // select description, due date, project name
        // display todo by appending the values to an array 
         
        
        
        
        
    })
    
    
    
});

//*Add Project button

addProject.addEventListener('click', function(e){
    e.preventDefault();
    const projectNameform = document.getElementById('projectform');
    showForm(projectNameform);
    disableButton(addProject);

    //*Submit 
    projectNameform.addEventListener('submit', function(e){
        e.preventDefault();
        const name = document.getElementById('projectName');
        const newProject = projects(name.value);
        console.log(newProject);
        addProjecttoUI(newProject.name);
        
        clearForm(projectNameform);
        hideForm(projectNameform);
        enableButton(addProject);
    })

    

  
});


//Projects can be displayed by using filters on array to match project name 















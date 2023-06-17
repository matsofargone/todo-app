// Import our custom CSS
import '../scss/styles.scss';
import displayForm from './components/form';
import format from 'date-fns/format';
// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap';
import {displayContent, displayLocalStorageTasks} from './components/displayController';
import { todo, project } from './components/todo';
import displayProjectForm from './components/projectForm';

//Display Content

displayContent();
displayLocalStorageTasks();

//!TODO Add projects to project List and have them populate in select
//!Event Listeners 

//*Add task
const taskButton = document.getElementById('button-task');

taskButton.addEventListener('click', function(e){
    e.preventDefault();
    displayForm();
    taskButton.setAttribute("disabled", "disabled");

    //!Add form eventlistener to handle submission
    const taskForm = document.getElementById('task-form');

    taskForm.addEventListener('submit', function(e) {
        e.preventDefault();
        //*Select inputs
        const description = document.getElementById('description');
        const dueDate = document.getElementById('due-date');
        const projectTitle = document.getElementById('select-list');
        //*Format date if it is not null 
        let date;
        if (dueDate.value != ''){
              date = format(new Date(dueDate.value), 'MM-dd-yyyy');
        } else {
             date = 'No due date';
        }
        //! Create todo and submit to local storage 
        const submission = todo(description.value, date , projectTitle.value);
        console.log(submission);
        localStorage.setItem(description.value, [submission.description, submission.dueDate, submission.project]);
        taskForm.reset();
        taskForm.innerHTML = " ";
        taskButton.removeAttribute('disabled');
        location.reload();
        
        
    })
});


//*Add Project 

const addProjectButton = document.getElementById('button-project');

addProjectButton.addEventListener('click', function(e){
    e.preventDefault();
    displayProjectForm();
    addProjectButton.setAttribute('disabled',"disabled");

    //TODO!Add Project submission to local storage

    const projectForm = document.getElementById('project-form');

    projectForm.addEventListener('submit', function(e){
        e.preventDefault();
        
        const input = document.getElementById('project-button');
        
        let submission = project(input.value);
        //!investigate how to create two local storages
        let entry = localStorage.setItem(submission.name, submission.name);
        console.log(localStorage.getItem(submission.name));
        
        addProjectButton.removeAttribute('disabled');
        projectForm.style.display = 'none';
        projectForm.reset();
        
        

    })
});
//Handle Home button - view all projects

const homeButton = document.getElementById('home-link');

homeButton.addEventListener('click', function(e) {
    const todoUL = document.getElementById('todo-ul');
    const projectList = document.getElementById('list-projects');
    const projectButton = document.getElementById('button-project');


    projectList.innerHTML = '';
    todoUL.innerHTML = '';
    projectList.appendChild(projectButton);
    displayLocalStorageTasks();
    
    
})



//TODO sort todos
//TODO reload only part of the page 
//* TODO OPTIONAL refactor code 

import './style.css';
import Todo from './components/todo';
import createPage from './components/createPage';
import addButton from './components/button';
import taskForm from './components/form';


createPage();
const addTask = document.getElementById('task-button');


addTask.addEventListener('click', function(e) {
    e.preventDefault();
    taskForm();
    addTask.setAttribute('disabled', 'disabled');
    
    
});

















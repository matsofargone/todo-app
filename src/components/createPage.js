// import './style.css';
import addButton from "./button";
import taskForm from "./form";

const createPage = () => {
    //code here for the home page 
    //*create elements
    const content = document.getElementById('content');
    const titleH3 = document.createElement('h4');
    const titleDiv = document.createElement('div');
    const sidebarDiv = document.createElement('div');
    const mainContentDiv = document.createElement('div');
    const inboxListUL = document.createElement('ul');
    const projectTitle = document.createElement('p');
    const projectUL = document.createElement('ul');
    const pageTitleDiv = document.createElement('div');
    const todoListtDiv = document.createElement('div');
    
    //add id
    mainContentDiv.setAttribute('id', 'main');
    
    

    //* add detail to elements 
    titleH3.innerHTML = 'Todo App';
    projectTitle.innerHTML = 'Projects';
   

    const inBoxItems = ['Home'];
    inBoxItems.forEach((item) => {
        let li = document.createElement('li');
        li.innerText = item;
        inboxListUL.appendChild(li);
    });

    // //*Handle adding projects 
    // const projectItems = ['Test'];
    // projectItems.forEach(item => {
    //     let li = document.createElement('li');
    //     li.innerHTML = item;
    //     projectUL.appendChild(li);
    // });

    

    

    //*add classes
    titleDiv.classList.add('headerTitle');
    pageTitleDiv.classList.add('pageTitleDiv');
    // introTitle.classList.add('pageTitle');
    // titleH3.classList.add('pageTitle');
    sidebarDiv.classList.add('sidebar');
    sidebarDiv.setAttribute('id', 'sidemenu');
    mainContentDiv.classList.add('mainContent');
    projectUL.classList.add('projectItems');
    projectUL.setAttribute('id', 'projects');
    todoListtDiv.setAttribute('id','todo-list');
   
    //*Append side bar and main content to content div
    // going to use a grid to create the menu I want
    
    content.appendChild(titleDiv);
    content.appendChild(sidebarDiv);
    content.appendChild(mainContentDiv);
    // title title title
    // sidebar main main
    //sidebar main main 
    titleDiv.appendChild(pageTitleDiv);
    pageTitleDiv.appendChild(titleH3);
    
    addButton('Task', sidebarDiv);
    sidebarDiv.appendChild(inboxListUL);
    sidebarDiv.appendChild(projectTitle);
    sidebarDiv.appendChild(projectUL);
    addButton('Project', sidebarDiv);
    mainContentDiv.appendChild(todoListtDiv);
    // console.log('contact');
    // console.log(content);

    // taskForm();
    // const form = document.getElementById('todoForm');
    // form.style.display = 'none';

}


export default createPage;
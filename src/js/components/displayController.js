

const displayContent = function() {
    //*Content Div

    const content = document.getElementById('content');

    //* Semantic HTML Elements 
    const nav = document.createElement('nav');
    const aside = document.createElement('aside');
    const main = document.createElement('main');
    const wrapper = document.createElement('div');

    //*Other created elements
    const navDiv = document.createElement('div');
    const titleLink = document.createElement('a');
    const addTaskbutton = document.createElement('button');

    //*Project menu items
    const Home = document.createElement('a');
    const ProjectHeader = document.createElement('h6');
    const ListofProjects = document.createElement('ul');
    const LoPDiv = document.createElement('div');
    const headerDiv = document.createElement('div');
    const projectButton = document.createElement('button');

    // let projectsArray = [];

    //*Todo List items 
    // const picture = { image: { imagePath: "../../assets/todo_paper.jpg", imageName: "sample"}};
    const mainDiv = document.createElement('div');
    const todoUl = document.createElement('ul');
    // const checkbox = document.createElement('button');
    // const background = document.createElement('img');
    // background.src = picture.image.imagePath;
    // background.alt = picture.imageName;
    let todoArray = [{'description': 'description 1', 'dueDate':'10/20/2023', 'project':'testing'}];
   

    //*Set Classes
    navDiv.classList.add("container-fluid");
    titleLink.classList.add("navbar-brand");
    

    //*Set attributes
    // content.setAttribute('class', '')
    addTaskbutton.setAttribute('type', 'button');
    addTaskbutton.setAttribute('id', 'button-task');
    addTaskbutton.setAttribute('class', 'btn btn-secondary mx-5');
    nav.setAttribute('class', 'navbar border-bottom border-2 border-primary-subtle');
    wrapper.setAttribute('class', 'row align-items-start  ')
    aside.setAttribute('class', 'height col-2 border-end border-black');
    main.setAttribute('class', 'col-10 blue mt-1 ');
    headerDiv.setAttribute('class', 'container-fluid text-center py-2 mt-5');
    Home.setAttribute('class', 'fs-4 text text-decoration-none text-black ');
    ProjectHeader.setAttribute('class', 'fs-2 text text-decoration-none display-6  pt-4 mt-4')
    ListofProjects.setAttribute('class', 'list-group-flush ps-3 ms-5');
    ListofProjects.setAttribute('id', 'list-projects');
    projectButton.setAttribute('class', 'btn btn-sm btn-outline-success mt-2 me-4 rounded-circle');
    projectButton.setAttribute('id', 'button-project');
    todoUl.setAttribute('id', 'todo-ul');
    todoUl.setAttribute('class', 'pt-2 px-2')
    
    
    //*Editing needed elements 
    titleLink.innerText = "Todo App";
    addTaskbutton.innerHTML = `<i class="bi bi-plus-lg"></i>`;
    Home.innerText = 'Home';
    ProjectHeader.innerText = 'Projects';
    projectButton.innerHTML = `<i class="bi bi-plus-lg"></i>`;


    // //*Loop and display list 
    // projectsArray.forEach(item => {
    //     const li = document.createElement('a');
    //     li. innerText = item;
    //     li.setAttribute('class', 'list-group-item mt-1 pt-1');
    //     ListofProjects.appendChild(li);
    // });




    //!Appending elements to page 
    content.appendChild(nav);
    content.appendChild(wrapper);
    wrapper.appendChild(aside);
    wrapper.appendChild(main);
    nav.appendChild(navDiv);

    //!Append content to page elements 
    navDiv.appendChild(titleLink);
    navDiv.appendChild(addTaskbutton);
    aside.appendChild(headerDiv);
    headerDiv.appendChild(Home);
    headerDiv.appendChild(ProjectHeader);
    aside.appendChild(LoPDiv);
    LoPDiv.appendChild(ListofProjects);
    ListofProjects.appendChild(projectButton);
    main.appendChild(mainDiv);
    mainDiv.appendChild(todoUl);
    

}

const displayProjectList = function(project) {
    let projectsArray = [];
    const listOfProjects = document.getElementById("list-projects");

     projectsArray.push(project);

     projectsArray.forEach(item => {
        const li = document.createElement('a');
        li. innerText = item;
        li.setAttribute('class', 'list-group-item mt-1 pt-1');
        ListofProjects.appendChild(li);
    });

}

//!Make function to display item using horizontal list 

const createTaskList = function(items){
    const todoUL = document.getElementById('todo-ul');
    const ul = document.createElement('ul');
    ul.setAttribute('class', 'list-group list-group-horizontal mt-2 ms-6 ps-4');
    if (items.length > 1) {
        for (let i = 0; i < items.length; i++) {
            const li = document.createElement('li');
            const content = items[i];
            li.setAttribute('class','list-group-item w-50 text-center ');
            li.setAttribute('id', items[0]);
            li.innerHTML = content;
            ul.append(li);
        }

        const button = document.createElement('button');
        ul.append(button);
        button.setAttribute('class', 'btn btn-danger btn-small h-25 ms-2 rounded-circle');
        button.innerText = 'X';
        button.setAttribute('id', 'remove-button');

        button.addEventListener('click', function(e){
        localStorage.removeItem(items[0]);
        setTimeout(location.reload(), 4000);

        })

        //!add listeners for filters 
    }

    todoUL.appendChild(ul);
} 

//!display projects


const displayLocalStorageTasks = function() {
    Object.keys(localStorage).forEach(function(key){
        let item =  localStorage.getItem(key);
          let taskArray = item.split(",");
         
            createTaskList(taskArray);
        //   taskArray.forEach(function(instance){
        //     console.log(instance);
        //   });
      });
      
}






export {displayContent, displayProjectList, displayLocalStorageTasks};
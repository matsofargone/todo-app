// import './style.css';

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
    const introTitle = document.createElement('h2');
    const pageTitleDiv = document.createElement('div');
    
    
    

    //* add detail to elements 
    titleH3.innerHTML = 'Todo App';
    projectTitle.innerHTML = 'Projects';
    introTitle.innerHTML = 'Get **IT Done';

    const inBoxItems = ['Inbox', 'Today', 'This Week'];
    inBoxItems.forEach((item) => {
        let li = document.createElement('li');
        li.innerText = item;
        inboxListUL.appendChild(li);
    });

    //*Handle adding projects 
    const projectItems = ['Placeholder', 'Home', 'Gym'];
    projectItems.forEach(item => {
        let li = document.createElement('li');
        li.innerHTML = item;
        projectUL.appendChild(li);
    });

    

    

    //*add classes
    titleDiv.classList.add('headerTitle');
    pageTitleDiv.classList.add('pageTitleDiv');
    // introTitle.classList.add('pageTitle');
    // titleH3.classList.add('pageTitle');
    sidebarDiv.classList.add('sidebar');
    mainContentDiv.classList.add('mainContent');
    projectUL.classList.add('projectItems');

    //*Append side bar and main content to content div
    // going to use a grid to create the menu I want
    
    content.appendChild(titleDiv);
    content.appendChild(sidebarDiv);
    content.appendChild(mainContentDiv);
    // title title title
    // sidebar main main
    //sidebar main main 
    titleDiv.appendChild(pageTitleDiv);
    pageTitleDiv.append(titleH3);
    pageTitleDiv.appendChild(introTitle);
    sidebarDiv.appendChild(inboxListUL);
    sidebarDiv.appendChild(projectTitle);
    sidebarDiv.appendChild(projectUL);
    // console.log('contact');
    // console.log(content);

}


export default createPage;
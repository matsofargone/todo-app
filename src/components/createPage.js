// import './style.css';

const createPage = () => {
    //code here for the home page 
    //*create elements
    const content = document.getElementById('content');
    const titleH3 = document.createElement('h3');
    const titleDiv = document.createElement('div');
    const sidebarDiv = document.createElement('div');
    const mainContentDiv = document.createElement('div');

    //* add detail to elements 
    titleH3.innerHTML = 'Todo App';

    //*add classes
    titleDiv.classList.add('headerTitle');
    sidebarDiv.classList.add('sidebar');
    mainContentDiv.classList.add('mainContent');

    //*Append side bar and main content to content div
    // going to use a grid to create the menu I want
    
    content.appendChild(titleDiv);
    content.appendChild(sidebarDiv);
    content.appendChild(mainContentDiv);
    // title title title
    // sidebar main main
    //sidebar main main 
    titleDiv.append(titleH3);
    console.log('contact');
    console.log(content);

}


export default createPage;
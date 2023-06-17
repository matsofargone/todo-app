const displayForm = function(){

    const todoUL = document.getElementById('todo-ul');

    //*Creating elements
    const form = document.createElement('form');
    const row = document.createElement('div');
    const col1 = document.createElement('div');
    const col2 = document.createElement('div');
    const col3 = document.createElement('div');
    const description = document.createElement('input');
    const dueDate = document.createElement('input');
    const projectTitle = document.createElement('select');
    const defaultOption = document.createElement('option');

    form.setAttribute('id', 'task-form');
    form.setAttribute('class', 'p-2 m-2');

    //*formatting fields
    row.setAttribute('class', 'row g-3');
    col1.setAttribute('class', 'col-sm-7');
    col2.setAttribute('class', 'col-sm');
    col3.setAttribute('class', 'col-sm');
    //*setting form fields
    //*Description
    description.setAttribute('class','form-control');
    description.setAttribute('type', 'text');
    description.setAttribute('placeholder', 'task');
    description.setAttribute('aria-label', 'Description');
    description.setAttribute('required', 'required');
    description.setAttribute('id', 'description');
    //*Due date
    dueDate.setAttribute('class','form-control');
    dueDate.setAttribute('type', 'date');
    dueDate.setAttribute('placeholder', 'date');
    dueDate.setAttribute('aria-label', 'date');
    dueDate.setAttribute('id', 'due-date');
    //*Project Title 
    projectTitle.setAttribute('class','form-select');
    projectTitle.setAttribute('id', 'select-list');
    defaultOption.innerHTML = " ";
    projectTitle.appendChild(defaultOption);
      //*add select options
      const projectArrayUL = document.getElementById('list-projects');
      const listTodisplay = projectArrayUL.innerText;
      let projectsArray = listTodisplay.split('\n');
  
      for (let i = 0; i < projectsArray.length; i++) {
          // let select = document.getElementById('select-list');
          let element = projectsArray[i];
          let option = document.createElement('option');
  
          option.value = element;
          option.innerHTML = element;
          projectTitle.appendChild(option);
  
          
      }
  
   
    
    
    row.appendChild(col1);
    row.appendChild(col2);
    row.appendChild(col3);

    col1.appendChild(description);
    col2.appendChild(dueDate);
    col3.appendChild(projectTitle);
    form.appendChild(row);

     
   


   
  
    //Append form to Todo list
    todoUL.appendChild(form);

    

    
}

export default displayForm;
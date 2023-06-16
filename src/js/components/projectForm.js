const displayProjectForm = function(){
    const form = document.createElement('form');
    const row = document.createElement('div');
    const col1 = document.createElement('div');
    const projectInput = document.createElement('input');
    const buttonDiv = document.getElementById('list-projects');

    form.setAttribute('method', 'post');
    form.setAttribute('id', 'project-form');
    row.setAttribute('class','row mb-3 pt-2');
    col1.setAttribute('class', 'col');
    projectInput.setAttribute('type','text');
    projectInput.setAttribute('class','form-control');
    projectInput.setAttribute('placeholder','project');
    projectInput.setAttribute('aria-label','project');
    projectInput.setAttribute('id','project-button');


    form.appendChild(row);
    row.appendChild(col1);
    col1.appendChild(projectInput);

    buttonDiv.appendChild(form);

}

export default displayProjectForm;
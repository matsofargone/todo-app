const projectForm = () => {

    const projectListDiv = document.getElementById('sidemenu');
    const projectNameForm = document.createElement('form');
    projectNameForm.setAttribute('method', 'post');
    projectNameForm.setAttribute('id', 'projectform');

    const projectNameInput = document.createElement('input');
    projectNameInput.setAttribute('type', 'text');
    projectNameInput.setAttribute('name', 'project-name');
    projectNameInput.setAttribute('placeholder', 'Project Name');
    projectNameInput.setAttribute('required', "");
    projectNameInput.setAttribute('id', "projectName");


    const submitProjectName = document.createElement("button");
    submitProjectName.setAttribute("type", "submit");
    submitProjectName.innerText = 'Submit';
    submitProjectName.setAttribute('id', 'submit-project');


    projectNameForm.appendChild(projectNameInput);
    projectNameForm.appendChild(submitProjectName);
    projectListDiv.appendChild(projectNameForm);

    projectNameForm.style.display = 'none';


}


export default projectForm;
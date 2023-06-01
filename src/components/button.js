

const addButton = () => {
    const button = document.createElement('button');
    const span = document.createElement('span');
    const menuDiv = document.getElementById('sidemenu');
    const buttonDiv = document.createElement('div');

    buttonDiv.classList.add('button-box');

    span.innerHTML = 'Add Task';

    button.classList.add('btn');
    button.setAttribute('id', 'task-button');
    button.appendChild(span);
    buttonDiv.appendChild(button);

    menuDiv.appendChild(buttonDiv)

}

export default addButton;
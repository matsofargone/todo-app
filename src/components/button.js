

const addButton = (name, div) => {
    const button = document.createElement('button');
    const span = document.createElement('span');
    // const menuDiv = document.getElementById('sidemenu');
    const buttonDiv = document.createElement('div');

    buttonDiv.classList.add('button-box');

    span.innerHTML = 'Add ' + name;

    button.classList.add('btn');
    button.setAttribute('id', name + '-button');
    button.appendChild(span);
    buttonDiv.appendChild(button);

    div.appendChild(buttonDiv)

}



export default addButton;
//Todos 

const todo = function(description, dueDate, project='Home') {

    return { description:description, dueDate:dueDate, project:project} 
}

//Project

const project = function(name) {
    let projectList = [];

    const addTodo = function(todo) {
        return projectList.push(todo);
    }

    return {name:name, projectList, addTodo }
}


// const todo1 = todo('Testing', '10/10/2023');

// const project1 = project("Home");

// console.log(project1.name);
// console.log(project1.projectList);

// project1.addTodo(todo1);

// console.log(project1.projectList);

export { todo, project }
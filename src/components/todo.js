//* TODO Object
const todo = (title, description, dueDate) => {
    

    return { title:title, description:description, dueDate:dueDate }
}

const todo1 = todo('Laundry','do laundry ', 'today');


//*Projects will act as list 
const projects = (name)=> {
    const projectList = [];
    
    //Adding task to project
    const addTask = (todo) => {
        projectList.push(todo);
    }

    // const deleteTask = () => {
    
    // }


    return {name:name, addTask, projectList }
}

// const project1 = projects('Home');

// project1.addTask(todo1);

// console.log(project1.projectList);





















export default { todo,  projects };













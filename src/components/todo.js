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





//* TODO Object
const todo = (description, dueDate, project) => {
    

    return { description:description, dueDate:dueDate, project:project }
}

const todo1 = todo('do laundry ', 'today');
























export  { todo,  projects };













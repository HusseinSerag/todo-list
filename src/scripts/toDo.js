
const getter = {
    getTitle: () => this.title,
    getDescription: () => this.description,
    getDueDate: () => this.dueDate,
    getPriority: () => this.priority,
    getCompleted:() => this.completed
}



export function createATodo(title,description,dueDate,priority,completed=0){
        
    let state =  {title,description,dueDate,priority,completed}

    return Object.assign(state , getter)
}



const getter = {
    getTitle: function() { 
       return this.title
    },
    getDescription: function()
    {
       return this.description
    },
    getDueDate: function() { return this.dueDate},
    getPriority: function() {return this.priority},
    getCompleted:function() {return this.completed}
}



export function createATodo(title,description,dueDate,priority,completed=0){
        
    let state =  {title,description,dueDate,priority,completed}

    return Object.assign(state , getter)
}


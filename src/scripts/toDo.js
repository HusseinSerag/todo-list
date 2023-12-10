
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
const setter = {
    setTitle: function(newTitle){
        this.title = newTitle
    }
    ,setDescription:function(newDescription){
        this.description = newDescription
    },
    setDueDate:function(newDueDate){
        this.dueDate = newDueDate
    },
    setPriority: function(newPriority){
        this.priority = newPriority
    },
    setCompleted:function(newCompleted){
        this.completed = newCompleted
    }
}

export let prot = Object.assign(getter,setter)
export function createATodo(title,description,dueDate,priority,completed=0){
        
    let state =  Object.create(prot)
    Object.assign(state,{title,description,dueDate,priority,completed})
    console.log(state)
    return state
}


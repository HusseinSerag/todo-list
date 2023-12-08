
const Getter= {
    getName : function(){
        return this.projectName
    }
} 
const Setter = {
    setName : function(newName){
        if(newName.length < 1){
            return 1
        }
        else{
            this.projectName = newName
        }
    }
}

const getList = {
    getAllToDo: function(){
        return this.toDoList
    }
}

const addToList = {
    addAToDo:function(toDo){
        this.toDoList.push(toDo)
    }
}

const remover = {
    removeAToDo:function(toDo){
        let index =  this.getAllToDo().indexOf(toDo)
        this.getAllToDo().splice(index,1)
    }
}
export function createProject(name){
    let state = {
        projectName:name,
        toDoList:[]
    }
    return Object.assign(state, Getter , Setter , getList , addToList,remover)
}
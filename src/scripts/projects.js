
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

const identifier = {
     numberOfObject:0,
     increase:function(){
        this.numberOfObject++;
        console.log(this.numberOfObject)
     },
     getIncrease:function(){
        return this.numberOfObject
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
        console.log(index)
        this.getAllToDo().splice(index,1)
    }
}
export let prot = Object.assign({},Getter , Setter , getList , addToList,remover,identifier)
export function createProject(name){
    let project = Object.create(prot)
    project.projectName = name
    project.toDoList = []
    
    prot.increase()
    
    project.number = prot.getIncrease()
    
   
    return project
}
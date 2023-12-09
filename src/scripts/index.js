import '../styles/styles.css'
import * as toDo from './toDo'
import * as Project from './projects'
import * as DOM from './DOM_Manipulator'
import deleteIcon from '../photos/delete-circle.png'
import CloseIcon from '../photos/close-box.png'
import pencilIcon from '../photos/pencil.png'
import infoIcon from '../photos/information-box-outline.png'
import { format , formatDistance } from 'date-fns'
const contentContainer = document.querySelector('#content.content');
const sidebar = document.querySelector('.sidebar')
const main = document.querySelector('.main')
const newProjectbtn = document.querySelector('button.add')
let projects = []


function loadDefault(){
   let cont =  createAProject('University');
   
    const todoContainer = cont.querySelector('.todoContainer')
    const addToDo = todoContainer.querySelector('.add-a-todo')
    
    toDoItemFunctionality(projects[0],todoContainer,addToDo,toDo.createATodo('Hassan','Call my brother hasoona',new Date('2023-12-23'),'high'))
    console.log(todoContainer)
    
       
    
}


newProjectbtn.addEventListener('click',()=>{
   let inputDiv = DOM.createNewProjectInSidebar();
   
   sidebar.removeChild(newProjectbtn)
   sidebar.appendChild(inputDiv)
   let confirm = inputDiv.querySelector('.confirm')
   let cancel = inputDiv.querySelector('.cancel')
   let inputValue = inputDiv.querySelector('.input-project-name')

   cancel.addEventListener('click',()=>{
    sidebar.removeChild(inputDiv)
    sidebar.appendChild(newProjectbtn)
   })

   confirm.addEventListener('click',()=>{

    let newName = inputValue.value
    createAProject(newName)




    sidebar.removeChild(inputDiv)
    sidebar.appendChild(newProjectbtn)
   })
  
})





function createAProject(name){

    let project = Project.createProject(name);
    projects.push(project)

    let projectContainer =DOM.createProjectContainer()

     projectContainerFunctionality(projectContainer,project)
    let sideBarItem = DOM.addToTheSidebar()
     sideBarFunctionality(sideBarItem,project,projectContainer)
    
    return projectContainer


}

function sideBarFunctionality(sideBarItem,project,projectContainer){

    let nameSpan = sideBarItem.querySelector('.item-name')
    let img = sideBarItem.querySelector('.delete')
    nameSpan.textContent = project.getName()
    img.src = deleteIcon
    if(sidebar.contains(newProjectbtn))
    sidebar.insertBefore(sideBarItem , newProjectbtn)
    else{
        sidebar.appendChild(sideBarItem)
    }
   
   nameSpan.addEventListener('click',()=>{
        Array.from(main.children).forEach(child =>{
            main.removeChild(child)
        })
        main.appendChild(projectContainer)
    })

    img.addEventListener('click',()=>{
       let index = projects.indexOf(project)
       projects.splice(index,1)
       sidebar.removeChild(sideBarItem)
       if(main.hasChildNodes())
            main.removeChild(projectContainer)
      
    })
}

function projectContainerFunctionality(projectContainer,project){
    let title = projectContainer.querySelector('h1')
    title.textContent = project.getName()
    let todoContainer = projectContainer.querySelector('.todoContainer')

    let addToDo = document.createElement('button')
    addToDo.classList.add('add-a-todo')
    addToDo.textContent = "Add"
    todoContainer.appendChild(addToDo)

    addToDo.addEventListener('click',()=>{
        let mainDiv = DOM.addToDoPopUp()
        mainDiv.classList.add('add-to-do-popup')
        let cover = document.createElement('div')
        cover.classList.add('cover')
        document.body.appendChild(mainDiv)
        document.body.appendChild(cover)
        handleMainDiv(mainDiv,cover,project,addToDo,todoContainer)
        cover.addEventListener('click',()=>{
            
            document.body.removeChild(cover)
            document.body.removeChild(mainDiv)
        })
    })
    
    return projectContainer
}

function toDoItemFunctionality(project,toDoContainer,addAToDo,todo){
   
    project.addAToDo(todo)
    
    let toDoItem = DOM.createToDoItem()
    toDoItem.classList.add(`${todo.getPriority()}-p`)
    let name = toDoItem.querySelector('.item-name-todo')

    let deleteDiv = toDoItem.querySelector('.delete')
    deleteDiv.src = deleteIcon
    let edit = toDoItem.querySelector('.edit')
    edit.src = pencilIcon
    let info = toDoItem.querySelector('.more-info')
    info.src = infoIcon
    
    let dueDate = toDoItem.querySelector('.dueDate')
    
    dueDate.textContent = `finish in ${formatDistance(todo.getDueDate(), new Date())}`
    name.textContent = todo.getTitle()

    
    toDoContainer.insertBefore(toDoItem,addAToDo)

   
    edit.addEventListener('click',()=>{
        let mainDiv = DOM.addToDoPopUp()
        mainDiv.classList.add('add-to-do-popup')
        let cover = document.createElement('div')
        cover.classList.add('cover')
        document.body.appendChild(mainDiv)
        document.body.appendChild(cover)
        handleEditDiv(todo,mainDiv,cover,toDoItem)
        cover.addEventListener('click',()=>{
            
            document.body.removeChild(cover)
            document.body.removeChild(mainDiv)
        })
    })

   
    info.addEventListener('click',()=>{
        let mainDiv = DOM.infoPopUp()
        mainDiv.classList.add('info-popup')
        let cover = document.createElement('div')
        cover.classList.add('cover')
        document.body.appendChild(mainDiv)
        document.body.appendChild(cover)
        handleInfoDiv(todo,mainDiv,cover)
        cover.addEventListener('click',()=>{
            
            document.body.removeChild(cover)
            document.body.removeChild(mainDiv)
        })
        
    })
    deleteDiv.addEventListener('click',()=>{
        project.removeAToDo(todo)
        toDoContainer.removeChild(toDoItem)
    })

    name.addEventListener('click',()=>{
        name.classList.toggle('finished')
        toDoItem.classList.toggle('finished-div')
        if(todo.getCompleted == 0)
        todo.setCompleted(1)
        else{
            todo.setCompleted(0)
        }
    })
}

function handleMainDiv(mainDiv,cover,project,addAToDo,toDoContainer){
    let title = mainDiv.querySelector('h1')
    let inputTitle = mainDiv.querySelector('#title')
    let description = mainDiv.querySelector('#description')
   
   
   
    title.classList.add('title')
    let closeImg = mainDiv.querySelector('img')
    closeImg.src = CloseIcon
    closeImg.addEventListener('click',()=>{

        document.body.removeChild(cover)
            document.body.removeChild(mainDiv)
    })

    let button = mainDiv.querySelector('button')
    button.classList.add('confirm')
    button.classList.add('add-to-do')

    let chosenDate = mainDiv.querySelector('input[type=date]')
    chosenDate.setAttribute('min',format(new Date(),'yyyy-MM-dd'))

    button.addEventListener('click',()=>{
        let chosenPriority = mainDiv.querySelector('.priorityDiv label input[type="radio"]:checked')


        //TODO add date
        console.log(chosenDate.value)
        let todo = toDo.createATodo(inputTitle.value , description.value, new Date(chosenDate.value) , chosenPriority.value)
        
        document.body.removeChild(cover)
        document.body.removeChild(mainDiv)
        toDoItemFunctionality(project,toDoContainer,addAToDo,todo)

    })
}

function handleEditDiv(todo,mainDiv,cover,toDoItem){
    let title = mainDiv.querySelector('h1')
    title.textContent = 'Setting new goals!'
    title.classList.add('title')

    let titleInput = mainDiv.querySelector('input#title')
    titleInput.value = todo.getTitle()

    let descriptionInput = mainDiv.querySelector('textarea')
    descriptionInput.value = todo.getDescription()

    let chosenPriority = todo.getPriority()
    
    let choosePriority = mainDiv.querySelectorAll('input[type="radio"]')
    
    let chosen = Array.from(choosePriority).find(child =>
        {
            console.log(child.value , chosenPriority)
            if(child.value == chosenPriority)
            return child
        
        })
    
        chosen.checked = true
    
    



    let closeImg = mainDiv.querySelector('img')
    closeImg.src = CloseIcon
    closeImg.addEventListener('click',()=>{

        document.body.removeChild(cover)
        document.body.removeChild(mainDiv)
    })

    let chosenDate = mainDiv.querySelector('input[type=date]')
    chosenDate.setAttribute('min',format(new Date(),'yyyy-MM-dd'))
    
    
    let editedName = toDoItem.querySelector('.item-name-todo')
    let dueDateDiv = toDoItem.querySelector('.dueDate')

    let editButton = mainDiv.querySelector('button')
    editButton.textContent = 'Edit'
    editButton.className='edit-btn btn'
    editButton.addEventListener('click',()=>{
        todo.setTitle(titleInput.value)
        todo.setDescription(descriptionInput.value)
        todo.setPriority(mainDiv.querySelector('input[type="radio"]:checked').value)
        todo.setDueDate(new Date(chosenDate.value))
        document.body.removeChild(cover)
        document.body.removeChild(mainDiv)

        editedName.textContent = titleInput.value
        toDoItem.className = `todo-item ${todo.getPriority()}-p`
        dueDateDiv.textContent = `finish in ${formatDistance(todo.getDueDate(), new Date())}`


    })

}



function handleInfoDiv(todo,mainDiv,cover){
    let closeImg = mainDiv.querySelector('img')
    closeImg.src = CloseIcon

    let container = mainDiv.querySelectorAll('.info-item')
    container.forEach(child =>{
        let key = child.querySelector('[class^=key]')
        let value = child.querySelector('[class^=value]')
        let keyTitle = key.getAttribute('class').split('-')[1]
       
        key.textContent = `${keyTitle}: `
        
        value.textContent = todo[`get${keyTitle}`]()

    })
    closeImg.addEventListener('click',()=>{

        document.body.removeChild(cover)
        document.body.removeChild(mainDiv)
    })

}

loadDefault()


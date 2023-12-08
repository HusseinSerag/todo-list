import '../styles/styles.css'
import * as toDo from './toDo'
import * as Project from './projects'
import * as DOM from './DOM_Manipulator'
import deleteIcon from '../photos/delete-circle.png'
import CloseIcon from '../photos/close-box.png'
import pencilIcon from '../photos/pencil.png'
import infoIcon from '../photos/information-box-outline.png'
const contentContainer = document.querySelector('#content.content');
const sidebar = document.querySelector('.sidebar')
const main = document.querySelector('.main')
const newProjectbtn = document.querySelector('button.add')
let projects = []
createAProject('University')


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

    let projectContainer = DOM.createProjectContainer()

    projectContainerFunctionality(projectContainer,project)
    let sideBarItem = DOM.addToTheSidebar()
    sideBarFunctionality(sideBarItem,project,projectContainer)
    


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
    addToDo.textContent = "Let's do that!"

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
    todoContainer.appendChild(addToDo)
    
}

function toDoItemFunctionality(project,toDoContainer,addAToDo,todo){
    project.addAToDo(todo)
    console.log(todo)
    let toDoItem = DOM.createToDoItem()
    let name = toDoItem.querySelector('.item-name')

    let deleteDiv = toDoItem.querySelector('.delete')
    deleteDiv.src = deleteIcon
    let edit = toDoItem.querySelector('.edit')
    edit.src = pencilIcon
    let info = toDoItem.querySelector('.more-info')
    info.src = infoIcon
    console.log(todo.getTitle())
    name.textContent = todo.getTitle()
    console.log(name)
    toDoContainer.insertBefore(toDoItem,addAToDo)
    deleteDiv.addEventListener('click',()=>{
        project.removeAToDo(todo)
        toDoContainer.removeChild(toDoItem)
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

    button.addEventListener('click',()=>{
        
        let todo = toDo.createATodo(inputTitle.value , description.value,'1/10/2023' , 'high')
        
        document.body.removeChild(cover)
        document.body.removeChild(mainDiv)
        toDoItemFunctionality(project,toDoContainer,addAToDo,todo)

    })
}



/*
let dd = document.querySelector('.todo')
let de = Project.createProject('Hssein')
let t = toDo.createATodo('Running','RUn 10 km' , 'kman shwta' , 'high' , 0)
let f = toDo.createATodo('Runnig','RUn 10 km' , 'kman shwta' , 'high' , 0)
let x = toDo.createATodo('Runng','RUn 10 km' , 'kman shwta' , 'high' , 0)
let z = toDo.createATodo('Rung','RUn 10 km' , 'kman shwta' , 'high' , 0)
console.log(de.getName())
de.addAToDo(t)
de.addAToDo(x)
de.addAToDo(f)
de.addAToDo(z)
console.log(de.getAllToDo())

function addthetodos(de){
    de.getAllToDo().forEach(element => {
        let div = document.createElement('div')
        div.textContent = element
        div.addEventListener('click' , e =>{
            console.log(de.removeAToDo(element))
            dd.removeChild(div)
            console.log(de.getAllToDo())
        })
        dd.appendChild(div)
    });
    
}
addthetodos(de)

*/
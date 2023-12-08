import '../styles/styles.css'
import * as toDo from './toDo'
import * as Project from './projects'
import * as DOM from './DOM_Manipulator'
import deleteIcon from '../photos/delete-circle.png'
const contentContainer = document.querySelector('#content.content');
const sidebar = document.querySelector('.sidebar')
const main = document.querySelector('.main')
const newProjectbtn = document.querySelector('button.add')
let projects = []
createAProject('Hussein')
createAProject('Hassan')

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
    projectContainer.textContent = project.getName()

    let sideBarItem = DOM.addToTheSidebar()
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
       console.log(1)
       console.log(main.children)
       if(main.hasChildNodes())
            main.removeChild(projectContainer)
      
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
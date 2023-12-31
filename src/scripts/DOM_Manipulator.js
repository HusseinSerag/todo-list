export function createProjectContainer(){
    let project = document.createElement('div')
    let projectName = document.createElement('h1')
    let toDoContainer = document.createElement('div')
    
    toDoContainer.classList.add('todoContainer')
    project.classList.add('project')
    project.appendChild(projectName)
    project.appendChild(toDoContainer)
    
    return project
}
export function addToTheSidebar(){
    let sidebar = document.createElement('div')
    sidebar.classList.add('sidebar-item');

    let span = document.createElement('span')
    span.classList.add('item-name')
    let img = document.createElement('img')
    img.classList.add('delete')
    sidebar.appendChild(span)
    sidebar.appendChild(img)
    return sidebar
}

export function createNewProjectInSidebar(){
    let div = document.createElement('div')
    let input = document.createElement('input')
    let confirm= document.createElement('button')
    let cancel = document.createElement('button')
    div.classList.add('confirm-new-project')
    input.classList.add('input-project-name')
    confirm.classList.add('confirm')
    cancel.classList.add('cancel')

    confirm.textContent = 'confirm'
    cancel.textContent = 'cancel'

    div.appendChild(input)
    div.appendChild(confirm)
    div.appendChild(cancel)

    return div
}

export function createToDoItem(){
let div = document.createElement('div')
div.classList.add('todo-item')
let nameSpan = document.createElement('span')
nameSpan.classList.add('item-name-todo')
let info = document.createElement('img')
info.classList.add('more-info')
let edit = document.createElement('img')
edit.classList.add('edit')
let deleteDiv = document.createElement('img')
deleteDiv.classList.add('delete')

let dueDate = document.createElement('span')
dueDate.classList.add('dueDate')





div.appendChild(nameSpan)
div.appendChild(dueDate)
div.appendChild(info)
div.appendChild(edit)
div.appendChild(deleteDiv)

return div
}


export function addToDoPopUp(){
   let mainDiv = document.createElement('div')
   let title = document.createElement('h1')
   let img = document.createElement('img')
   let add = document.createElement('button')
   let priorityDiv = document.createElement('div')
   priorityDiv.classList.add('priorityDiv')

   add.textContent = 'Add'
  
   title.textContent = 'Let\'s do this!'
   mainDiv.appendChild(title)
   mainDiv.appendChild(img)
   img.classList.add('close-box')
   mainDiv.appendChild(createLabelWithInput('Title' , 'title','text'))
   mainDiv.appendChild(createLabelWithInput('Description' , 'description','textarea'))
   
   priorityDiv.appendChild(createPriority('high'))
   priorityDiv.appendChild(createPriority('medium'))
   priorityDiv.appendChild(createPriority('low'))
   mainDiv.appendChild(priorityDiv)
   mainDiv.appendChild(createLabelWithInput('dueDate' , 'dueDate' , 'date'))
   mainDiv.appendChild(add)

   
   
   return mainDiv
}


export function infoPopUp(){
    let mainDiv = document.createElement('div')
    mainDiv.appendChild(createInfoLabel('Title'))
    mainDiv.appendChild(createInfoLabel('Description'))
    let img = document.createElement('img')
    mainDiv.appendChild(img)
   img.classList.add('close-box')

    return mainDiv
    
}

function createInfoLabel(name){
    let mainDiv = document.createElement('div')
    mainDiv.classList.add('info-item')
    let title = document.createElement('span')
    title.className = `key-${name}`

    let valueDiv = document.createElement('span')
    valueDiv.className = `value-${name}`
    

    mainDiv.appendChild(title)
    mainDiv.appendChild(valueDiv)

    return mainDiv

}
function createLabelWithInput(labelContent,id,type){
    let div = document.createElement('div')
    let label =document.createElement('label')
    let input;
    if(type == 'textarea'){
        input = document.createElement('textarea')
        input.setAttribute('contenteditable','true')
        input.setAttribute('maxlength',300)
    }
    else if(type == 'date')
    {
        input = document.createElement('input')
        input.setAttribute('type', type)
    }
    else
    {
          input = document.createElement('input')
     input.setAttribute('maxlength',50)
     input.setAttribute('type', type)
    }
   
    label.textContent = labelContent+": "
    label.setAttribute('for',id)
    input.setAttribute('id' , id)
    div.classList.add('input-item')
    div.appendChild(label)
    div.appendChild(input)
    return div
}

 function createPriority(name){

    let label = document.createElement('label');
    let input = document.createElement('input');
    input.setAttribute('type' , 'radio');
    input.setAttribute('name','priority');
    input.setAttribute('value',name)
    
    let span = document.createElement('span')
    span.textContent = name
    span.className = `${name} label`

    label.appendChild(input)
    label.appendChild(span)

    return label
    
  }
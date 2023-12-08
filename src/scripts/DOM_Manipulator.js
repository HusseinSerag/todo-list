export function createProjectContainer(){
    let project = document.createElement('div')
    project.classList.add('project')
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
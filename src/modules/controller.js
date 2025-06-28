let projects = []
let currentProject = null;


function initController(def) {
    projects.push(def)
    currentProject = def
}

function addProject(project) {
    projects.push(project)
    currentProject = project
    console.log(projects)
}

function addToDoToCurrent(todo) {
    currentProject.addToDo(todo);
}

function delToDoCurrent(todo) {
    currentProject.removeToDo(todo)
}

function getProjects() {
    return projects
}

function getCurrentProject() {
    return currentProject
}
function setCurrentProject(project) {
    currentProject = project
}
export { initController, addProject, addToDoToCurrent, delToDoCurrent, getProjects, getCurrentProject, setCurrentProject }

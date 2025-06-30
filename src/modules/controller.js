import { saveCurrentProjects, getSavedCurrentProjects, getSavedCurrentProjectId, saveCurrentProject } from "./storage"
import { createProject } from "./project"
import { createToDo } from "./todo"

let projects = getSavedCurrentProjects()
let currentProject = null

const savedCurrentProjectById = getSavedCurrentProjectId(projects)
if (savedCurrentProjectById) {
    currentProject = savedCurrentProjectById
} else if (projects.length > 0) {
    currentProject = projects[0]
    saveCurrentProject(currentProject)
} else {
    const defaultProject = createProject("Default", "Your default description")
    defaultProject.addToDo(createToDo("First default task", "2025-06-30", true))
    projects.push(defaultProject)
    currentProject = defaultProject
    saveCurrentProjects(projects)
    saveCurrentProject(currentProject)
}

function initController(def) {
    if (!projects.some(p => p.getId() === def.getId())) {
        projects.push(def)
    }
    currentProject = def
    saveCurrentProject(currentProject)
    saveCurrentProjects(projects)
}

function addProject(project) {
    projects.push(project)
    currentProject = project
    saveCurrentProject(currentProject)
    saveCurrentProjects(projects)
    console.log(projects)
}

function addToDoToCurrent(todo) {
    if (currentProject) {
        currentProject.addToDo(todo)
        saveCurrentProjects(projects)
    } else {
        console.error("No current project to add ToDo to")
    }
}

function delToDoCurrent(todo) {
    if (currentProject) {
        currentProject.removeToDo(todo)
        saveCurrentProjects(projects)
    } else {
        console.error("No current project to delete ToDo from")
    }
}

function getProjects() {
    return projects
}

function getCurrentProject() {
    return currentProject
}

function setCurrentProject(project) {
    currentProject = project
    saveCurrentProject(currentProject)
    saveCurrentProjects(projects)
}

function delProject(project) {
    for (let i = 0; i < projects.length; i++) {
        if (projects[i].getId() == project.getId()) {
            projects.splice(i, 1)
        }
    }
}
export { initController, addProject, addToDoToCurrent, delToDoCurrent, getProjects, getCurrentProject, setCurrentProject, delProject }

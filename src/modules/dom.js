import {
    initController,
    addProject,
    addToDoToCurrent,
    delToDoCurrent,
    getProjects,
    getCurentProject
} from './controller.js';

function renderScreen(projects, currentProject) {



}

function redenderNav(projects) {
    const toDoWrapper = document.querySelector(".to-do-wrapper")
    toDoWrapper.innerHTML = ""
    const sideBarNav = document.createElement("nav")
    sideBarNav.classList.add("side-bar")


    const h1 = document.createElement("h1")
    h1.innerText = "Todo-list 📝"
    sideBarNav.appendChild(h1)

    const projectsDiv = document.createElement("div")
    projectsDiv.classList.add("projects")

    const h3 = document.createElement("h3")
    h3.innerText = "Projects"

    const addProjectButton = document.createElement("button")
    addProjectButton.innerText = "+"

    projectsDiv.appendChild(h3)
    projectsDiv.appendChild(addProjectButton)

    sideBarNav.appendChild(projectsDiv)
    for (let project of projects) {
        console.log(project.getTitle())
        const projectBtn = document.createElement("button")
        projectBtn.innerText = project.getTitle()
        sideBarNav.appendChild(projectBtn)
    }

    const addNewToDoBtn = document.createElement("button")
    addNewToDoBtn.innerText = "Add new ToDo!"
    addNewToDoBtn.id = "add-new"
    sideBarNav.appendChild(addNewToDoBtn)


    toDoWrapper.appendChild(sideBarNav)

    addNewToDoBtn.addEventListener("click", () => {
        const dialog = document.createElement("dialog")
        dialog.id = "add-new-todo"
        const label = document.createElement('label');
        label.textContent = "Title:";
        label.setAttribute('for', 'title-todo');

        const input = document.createElement('input');
        input.type = 'text';
        input.id = 'title-todo';
        input.name = 'Title';

        input.placeholder = 'Enter your task...';
        dialog.appendChild(label);
        dialog.appendChild(input);




    })

}

function renderContent() {

}

export { redenderNav }
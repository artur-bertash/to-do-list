import {
    initController,
    addProject,
    addToDoToCurrent,
    delToDoCurrent,
    getProjects,
    getCurrentProject,
    setCurrentProject,
    delProject
} from './controller.js';

import { createProject } from './project.js';
import { createToDo } from './todo.js';
import { saveCurrentProjects } from './storage.js'
import { saveCurrentProject } from './storage.js';
function renderScreen(projects, currentProject) {

    const toDoWrapper = document.querySelector(".to-do-wrapper")
    toDoWrapper.innerHTML = ""
    renderNav(getProjects())
    console.log("Current project is" + getCurrentProject().getTitle())
    renderContent(getCurrentProject())

}

function renderProjects(projects, wrapperProjects) {
    wrapperProjects.innerHTML = ""
    for (let project of projects) {
        console.log(project.getTitle())
        const wrapperProject = document.createElement("div")
        const projectBtn = document.createElement("button")
        projectBtn.innerText = project.getTitle()
        wrapperProject.appendChild(projectBtn)
        projectBtn.addEventListener("click", () => {
            setCurrentProject(project)
            renderContent(project)
            saveCurrentProject(project)
        })
        const deleteProjectBtn = document.createElement("i")
        deleteProjectBtn.className = 'fa-regular fa-square-minus'
        deleteProjectBtn.style.cursor = "pointer"
        wrapperProject.appendChild(deleteProjectBtn)

        deleteProjectBtn.addEventListener("click", () => {
            delProject(project);
            renderProjects(getProjects(), wrapperProjects)
        })
        wrapperProject.style.display = "flex"
        wrapperProject.style.justifyContent = "space-between"
        wrapperProjects.appendChild(wrapperProject)
    }
}

function renderNav(projects) {
    const toDoWrapper = document.querySelector(".to-do-wrapper")

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

    const wrapperProjects = document.createElement("div")
    wrapperProjects.style.display = "flex"
    wrapperProjects.style.flexDirection = "column"
    wrapperProjects.style.gap = "4px"

    sideBarNav.appendChild(projectsDiv)

    renderProjects(projects, wrapperProjects)
    sideBarNav.appendChild(wrapperProjects)

    const addNewToDoBtn = document.createElement("button")
    addNewToDoBtn.innerText = "Add new ToDo!"
    addNewToDoBtn.id = "add-new"
    sideBarNav.appendChild(addNewToDoBtn)


    toDoWrapper.appendChild(sideBarNav)

    addNewToDoBtn.addEventListener("click", () => {
        const dialog = document.createElement("dialog")
        dialog.id = "add-new-todo"

        dialog.style.flexDirection = "column"
        dialog.style.gap = "12px"
        const h3 = document.createElement("h3")
        h3.innerText = "Add new ToDo!"
        h3.style.marginTop = "2px"
        h3.style.marginBottom = "2px"

        const titleWrapper = document.createElement("div")
        titleWrapper.style.display = "flex";
        titleWrapper.style.flexDirection = "column";
        titleWrapper.style.gap = "8px";
        titleWrapper.style.marginBottom = "12px";
        titleWrapper.required = true

        const labelTitle = document.createElement('label');
        labelTitle.textContent = "Title:";
        labelTitle.setAttribute('for', 'title-todo');
        labelTitle.style.fontSize = "0.9rem";

        const inputTitle = document.createElement('input');
        inputTitle.type = 'text';
        inputTitle.id = 'title-todo';
        inputTitle.name = 'Title';
        inputTitle.style.padding = "4px"
        inputTitle.style.borderRadius = '4px'
        inputTitle.style.border = '0.5px grey solid'
        inputTitle.style.fontSize = "1.1rem"
        inputTitle.required = true

        inputTitle.placeholder = 'Enter your task...';


        const datewrapper = document.createElement("div")
        datewrapper.style.display = "flex";
        datewrapper.style.flexDirection = "column";
        datewrapper.style.gap = "8px";
        datewrapper.style.marginBottom = "12px";

        const inputDate = document.createElement("input")
        inputDate.type = "date"
        inputDate.id = "date-todo"
        inputDate.name = "Due date"
        inputDate.style.padding = "4px"
        inputDate.style.borderRadius = '4px'
        inputDate.style.border = '0.5px grey solid'
        inputDate.style.fontSize = "1.1rem"
        inputDate.style.fontWeight = "200"
        inputDate.required = true

        const labelDate = document.createElement("label")
        labelDate.textContent = "Date:";
        labelDate.setAttribute('for', 'date-todo');
        labelDate.style.fontSize = "0.9rem";


        const importanceWrapper = document.createElement("div")
        importanceWrapper.style.display = "flex"
        importanceWrapper.style.alignItems = "center"
        importanceWrapper.style.gap = "8px"
        importanceWrapper.style.marginBottom = "12px";


        const inputImportance = document.createElement("input")
        inputImportance.type = "checkbox"
        inputImportance.id = "importance-todo"
        inputImportance.name = "Importance checkbox"
        inputImportance.style.padding = "4px"
        inputImportance.style.borderRadius = '4px'
        inputImportance.style.border = '0.5px grey solid'
        inputImportance.style.fontSize = "1.1rem"
        inputImportance.style.fontWeight = "200"

        const labelImportance = document.createElement("label")
        labelImportance.textContent = "Is important:";
        labelImportance.setAttribute('for', 'importance-todo');
        labelImportance.style.fontSize = "0.9rem";

        const buttonWrapper = document.createElement("div")
        buttonWrapper.style.display = "grid"
        buttonWrapper.style.width = "100%"
        buttonWrapper.style.gridTemplateColumns = "1fr 1fr"
        buttonWrapper.style.gap = "8px"

        const AddToDoBtn = document.createElement("button")
        AddToDoBtn.innerText = "Add ToDo"
        AddToDoBtn.style.backgroundColor = "aliceblue"
        AddToDoBtn.style.width = "100%";
        AddToDoBtn.style.borderRadius = "6px";

        const CancelAddToDO = document.createElement("button")
        CancelAddToDO.innerText = "Cancel"
        CancelAddToDO.style.backgroundColor = "aliceblue"
        CancelAddToDO.style.width = "100%";
        CancelAddToDO.style.borderRadius = "6px";


        buttonWrapper.appendChild(AddToDoBtn)
        buttonWrapper.appendChild(CancelAddToDO)

        dialog.appendChild(h3)
        titleWrapper.appendChild(labelTitle);
        titleWrapper.appendChild(inputTitle);

        datewrapper.appendChild(labelDate)
        datewrapper.appendChild(inputDate)


        dialog.appendChild(titleWrapper);
        dialog.appendChild(datewrapper)

        importanceWrapper.appendChild(labelImportance)
        importanceWrapper.appendChild(inputImportance)
        dialog.appendChild(importanceWrapper)

        dialog.appendChild(buttonWrapper)


        toDoWrapper.appendChild(dialog)

        dialog.showModal();

        CancelAddToDO.addEventListener("click", () => {
            dialog.close()
        })

        AddToDoBtn.addEventListener("click", () => {
            if (!inputTitle.checkValidity() || !inputDate.checkValidity()) {
                inputTitle.reportValidity();
                inputDate.reportValidity();
                return; // stop execution
            }
            const title = inputTitle.value.trim()
            const date = inputDate.value
            const isImportant = inputImportance.checked


            addToDoToCurrent(createToDo(title, date, isImportant))

            console.log("Title:", title);
            console.log("Date:", date);
            console.log("Important:", isImportant);


            dialog.close();
            dialog.remove();

            renderContent(getCurrentProject())

        })


    })

    addProjectButton.addEventListener("click", () => {
        const dialogAddProject = document.createElement("dialog")


        dialogAddProject.id = "add-new-project"
        sideBarNav.appendChild(dialogAddProject)

        const titleWrapperProject = document.createElement("div")
        titleWrapperProject.style.display = "flex";
        titleWrapperProject.style.flexDirection = "column";
        titleWrapperProject.style.gap = "8px";
        titleWrapperProject.style.marginBottom = "12px";


        const labelTitleProject = document.createElement('label');
        labelTitleProject.textContent = "Title:";
        labelTitleProject.setAttribute('for', 'title-project');
        labelTitleProject.style.fontSize = "0.9rem";

        const inputTitleProject = document.createElement('input');
        inputTitleProject.type = 'text';
        inputTitleProject.id = 'title-project';
        inputTitleProject.name = 'Title';
        inputTitleProject.style.padding = "4px"
        inputTitleProject.style.borderRadius = '4px'
        inputTitleProject.style.border = '0.5px grey solid'
        inputTitleProject.style.fontSize = "1.1rem"

        inputTitleProject.placeholder = 'Enter your project title...';

        titleWrapperProject.appendChild(labelTitleProject)
        titleWrapperProject.appendChild(inputTitleProject)

        dialogAddProject.appendChild(titleWrapperProject)

        const descriptionWrapperProject = document.createElement("div")
        descriptionWrapperProject.style.display = "flex";
        descriptionWrapperProject.style.flexDirection = "column";
        descriptionWrapperProject.style.gap = "8px";
        descriptionWrapperProject.style.marginBottom = "12px";


        const labelDescriptionProject = document.createElement('label');
        labelDescriptionProject.textContent = "Description:";
        labelDescriptionProject.setAttribute('for', 'description-project');
        labelDescriptionProject.style.fontSize = "0.9rem";

        const inputDescriptionProject = document.createElement('input');
        inputDescriptionProject.type = 'text';
        inputDescriptionProject.id = 'description-project';
        inputDescriptionProject.name = 'Title';
        inputDescriptionProject.style.padding = "4px"
        inputDescriptionProject.style.borderRadius = '4px'
        inputDescriptionProject.style.border = '0.5px grey solid'
        inputDescriptionProject.style.fontSize = "1.1rem"

        inputDescriptionProject.placeholder = 'Enter description...';

        descriptionWrapperProject.appendChild(labelDescriptionProject)
        descriptionWrapperProject.appendChild(inputDescriptionProject)

        dialogAddProject.appendChild(descriptionWrapperProject)

        const buttonCancelButtonsWrapper = document.createElement("div")
        buttonCancelButtonsWrapper.style.display = "grid"
        buttonCancelButtonsWrapper.style.width = "100%"
        buttonCancelButtonsWrapper.style.gridTemplateColumns = "1fr 1fr"
        buttonCancelButtonsWrapper.style.gap = "8px"

        const AddProjectBtn = document.createElement("button")
        AddProjectBtn.innerText = "Add Project"
        AddProjectBtn.style.backgroundColor = "aliceblue"
        AddProjectBtn.style.width = "100%";
        AddProjectBtn.style.borderRadius = "6px";

        const CancelProjectBtn = document.createElement("button")
        CancelProjectBtn.innerText = "Cancel"
        CancelProjectBtn.style.backgroundColor = "aliceblue"
        CancelProjectBtn.style.width = "100%";
        CancelProjectBtn.style.borderRadius = "6px";

        buttonCancelButtonsWrapper.appendChild(AddProjectBtn)
        buttonCancelButtonsWrapper.appendChild(CancelProjectBtn)
        dialogAddProject.appendChild(buttonCancelButtonsWrapper)



        dialogAddProject.showModal()

        CancelProjectBtn.addEventListener("click", () => {
            dialogAddProject.close()
        })

        AddProjectBtn.addEventListener("click", () => {
            const titleProject = inputTitleProject.value.trim()
            const descriptionProject = inputDescriptionProject.value

            addProject(createProject(titleProject, descriptionProject))
            renderProjects(getProjects(), wrapperProjects)

            saveCurrentProjects(getProjects())

            dialogAddProject.close();
            dialogAddProject.remove();

        })

    })

}

function renderContent(project) {
    const toDoWrapper = document.querySelector(".to-do-wrapper")
    const oldContent = document.querySelector(".content")
    if (oldContent) {
        oldContent.remove()
    }

    const content = document.createElement("div")

    content.classList.add("content")


    const h1 = document.createElement("h1")
    h1.innerText = project.getTitle()
    h1.style.marginBottom = "8px"

    const description = document.createElement("div")
    description.innerText = project.getDescription()
    description.style.marginBottom = "12px"

    const todoContainer = document.createElement("div")
    todoContainer.classList.add("to-do-container")

    content.appendChild(h1)
    content.appendChild(description)
    content.appendChild(todoContainer)

    renderToDos(todoContainer)

    toDoWrapper.appendChild(content)

}


function renderToDos(todoContainer) {
    const todos = getCurrentProject().getToDos();

    todoContainer.innerHTML = "";

    for (let todo of todos) {
        const task = document.createElement("div");
        task.classList.add("task");

        const label = document.createElement("label");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id = "doneCheckbox";
        checkbox.checked = todo.done || false;

        label.appendChild(checkbox);
        label.appendChild(document.createTextNode(todo.title));

        const rightSide = document.createElement("div");
        rightSide.classList.add("right-side");

        const dateDiv = document.createElement("div");
        dateDiv.classList.add("date");
        dateDiv.textContent = todo.date;

        const importantDiv = document.createElement("div");
        importantDiv.textContent = todo.isImportant ? "Important" : "";
        importantDiv.style.fontWeight = "500"

        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("delete");

        const trashIcon = document.createElement("i");
        trashIcon.classList.add("fa-solid", "fa-trash");
        deleteBtn.appendChild(trashIcon);


        deleteBtn.addEventListener("click", () => {
            delToDoCurrent(todo);
            renderContent(getCurrentProject());
        });
        rightSide.appendChild(importantDiv);
        rightSide.appendChild(dateDiv);

        rightSide.appendChild(deleteBtn);

        task.appendChild(label);
        task.appendChild(rightSide);

        todoContainer.appendChild(task);
    }
}


export { renderScreen }
import {
    initController,
    addProject,
    addToDoToCurrent,
    delToDoCurrent,
    getProjects,
    getCurrentProject
} from './controller.js';

import { createProject } from './project';
import { createToDo } from './todo';

function storageAvailable(type) {
    let storage;
    try {
        storage = window[type];
        const x = "__storage_test__";
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    } catch (e) {
        return (
            e instanceof DOMException &&
            e.name === "QuotaExceededError" &&
            // acknowledge QuotaExceededError only if there's something already stored
            storage &&
            storage.length !== 0
        );
    }
}

function saveCurrentProjects(projects) {
    localStorage.setItem("projects", JSON.stringify(projects.map(project => {
        return {
            title: project.getTitle(),
            description: project.getDescription(),
            todos: project.getToDos(),
            id: project.getId()
        }
    })))
}

function getSavedCurrentProjects() {
    const raw = localStorage.getItem("projects");
    if (!raw) return [];
    const parsed = JSON.parse(raw)
    if (!Array.isArray(parsed)) return [];

    return parsed.map(p => {
        const project = createProject(p.title, p.description, p.id)
        if (p.todos && Array.isArray(p.todos)) {
            p.todos.forEach(t => {
                project.addToDo(createToDo(t.title, t.date, t.isImportant, t.completed))
            })
        }
        return project;
    })
}

function saveCurrentProject(project) {
    if (project) {
        localStorage.setItem("currentProjectId", project.getId());
    } else {
        localStorage.removeItem("currentProjectId"); // Clear if no project is current
    }
}

function getSavedCurrentProjectId(projects) { // 'projects' (plural) is the array passed in
    const savedId = localStorage.getItem("currentProjectId");
    if (!savedId) return null; // If no ID is saved, return null

    for (let project of projects) { // Iterate over 'projects' array
        if (project.getId() === savedId) { // Call getId() method and use strict equality
            return project;
        }
    }
    return null; // If no matching project is found, return null
}

export { storageAvailable, saveCurrentProjects, getSavedCurrentProjects, saveCurrentProject, getSavedCurrentProjectId }
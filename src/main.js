import "./style.css";
import { format } from 'date-fns';
import {
    initController,
    addProject,
    addToDoToCurrent,
    delToDoCurrent,
    getProjects,
    getCurrentProject
} from './modules/controller.js';
import { storageAvailable } from "./modules/storage.js";
import { getSavedCurrentProjects } from "./modules/storage.js";

import { createProject } from "./modules/project";
import { createToDo } from "./modules/todo";
import { renderScreen } from "./modules/dom.js";

const now = new Date();
console.log(format(now, 'yyyy-MM-dd'));


if (storageAvailable("localStorage")) {
    console.log("We can store data in browser")
} else {
    console.log("The data storage is not supported")
}





renderScreen(getProjects(), getCurrentProject())
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
import { createProject } from "./modules/project";
import { createToDo } from "./modules/todo";
import { renderScreen } from "./modules/dom.js";

const now = new Date();
console.log(format(now, 'yyyy-MM-dd'));




const defProject = createProject("General", "Some random description");
initController(defProject)
const todo_1 = createToDo("First thing", "2025-06-05");
const todo_2 = createToDo("Second thing", "2025-06-05");

defProject.addToDo(todo_1)
defProject.addToDo(todo_2)

renderScreen(getProjects(), getCurrentProject())
import "./style.css";
import { format } from 'date-fns';
import {
    initController,
    addProject,
    addToDoToCurrent,
    delToDoCurrent,
    getProjects,
    getCurentProject
} from './modules/controller.js';
import { createProject } from "./modules/project";
import { createToDo } from "./modules/todo";
import { renderScreen } from "./modules/dom.js";

const now = new Date();
console.log(format(now, 'yyyy-MM-dd'));




const defProject = createProject("General", "Some random things");
addProject(defProject)
const todo_1 = createToDo("First thing", now);
const todo_2 = createToDo("Second thing", now);

defProject.addToDo(todo_1)
defProject.addToDo(todo_2)


defProject.printToDos()
console.log("--------------------")
defProject.removeToDo(todo_1)
defProject.printToDos()

const secondProject = createProject("dsfds", "Some random things");
addProject(secondProject)
console.log(getProjects())

renderScreen(getProjects(), getCurentProject())
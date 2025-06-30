function createProject(title, description, id = crypto.randomUUID()) {
    let todos = []


    function getId() {
        return id;
    }

    const addToDo = (todo) => {
        todos.push(todo)
    }

    const removeToDo = (todo) => {
        const id = todo.id;
        for (let i = 0; i < todos.length; i++) {
            if (todos[i].id == id) {
                todos.splice(i, 1)
                break;
            }
        }
    }

    const printToDos = () => {
        for (let todo of todos) {
            console.log(`${todo.title} - Due: ${todo.date} - Done: ${todo.completed}`);

        }
    }
    const setToDos = (newTodos) => {
        todos = newTodos || [];
    };

    const getToDos = () => {
        return todos
    }

    const getTitle = () => {
        return title
    }

    const getDescription = () => {
        return description
    }
    return { getId, getTitle, getDescription, addToDo, removeToDo, printToDos, getToDos, setToDos, getId }
}

export { createProject };
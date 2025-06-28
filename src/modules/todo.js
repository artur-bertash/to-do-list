export function createToDo(title, date, isImportant = false, completed = false) {
    return {
        id: crypto.randomUUID(), title, date, isImportant, completed, toggleDone() {
            this.completed = !this.completed
        }
    }

}


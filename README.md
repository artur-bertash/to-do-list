# 📝 To-Do List

A dynamic and modular To-Do List web application built using vanilla JavaScript, Webpack, and localStorage. This project was developed as part of [The Odin Project](https://www.theodinproject.com/) JavaScript curriculum to demonstrate mastery of modular code organization, DOM manipulation, factory functions, and persistent data storage.

---

## 🚀 Features

- 📁 **Project Management**  
  Create, view, and delete multiple to-do projects. All tasks are grouped by their associated project.

- ✅ **To-Do Management**  
  Add, view, and delete to-dos in each project with the following fields:
  - Title
  - Due date
  - Importance (checkbox)

- 🧠 **Factory Function Design**  
  All `Project` and `ToDo` objects are generated using factory functions to maintain encapsulation and modular design.

- 💾 **Persistent Storage**  
  Uses the Web Storage API (`localStorage`) to save your projects and todos between sessions.

- 🧩 **Modular Architecture**  
  JavaScript logic is separated into reusable modules:
  - `project.js` – Factory for creating project objects
  - `todo.js` – Factory for creating todo items
  - `controller.js` – Application logic and state management
  - `dom.js` – Handles all DOM rendering
  - `storage.js` – Load/save from localStorage

- 🎨 **Responsive UI**  
  Minimal UI with dynamic rendering based on the current state, built completely with JavaScript DOM manipulation.

---

## 📦 Tech Stack

- JavaScript (ES6 Modules)
- HTML5 & CSS3
- [Webpack](https://webpack.js.org/) (with `html-loader`, `style-loader`, and `css-loader`)
- [date-fns](https://date-fns.org/) for date formatting
- localStorage for data persistence

---

## 🛠️ Getting Started

### Prerequisites

- Node.js & npm
- Git

# Project Setup

Here are the steps to set up the project:

1. Clone the repository:

   ```bash
   git clone https://github.com/username/repository.git
   cd repository
   ```

2. Run the development server:

   ```bash
   npm start
   ```

3. Build for production:

   ```bash
   npm run build
   ```

4. Deploy to GitHub Pages:

   ```bash
   npm run deploy
   ```

```bash

# ❌⭕ Tic Tac Toe - Angular Edition

![Angular](https://img.shields.io/badge/angular-%23DD0031.svg?style=for-the-badge&logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Angular Material](https://img.shields.io/badge/Angular%20Material-%233F51B5.svg?style=for-the-badge&logo=angular&logoColor=white)
![License](https://img.shields.io/badge/license-MIT-green.svg?style=for-the-badge)

A modern, responsive implementation of the classic Tic-Tac-Toe game built with **Angular 17+** and **Angular Material**. This project demonstrates the use of modern Angular features such as **Standalone Components** and custom Pipes.

---

## 🚀 Live Demo

Play the game directly in your browser:
### 👉 [Click here to Play](https://oriol-farras.github.io/tic-tac-toe/)

---

## ✨ Features

*   **Interactive UI:** Clean and responsive interface using Angular Material Cards and Buttons.
*   **Game Logic:** Automatic win detection and turn switching.
*   **Dynamic Styling:** Custom Pipe integration to dynamically style 'X' (Blue) and 'O' (Pink).
*   **Modern Architecture:** Built entirely without `NgModules`, utilizing the new **Standalone Component** APIs.
*   **Reset Function:** Ability to restart the game at any time without reloading the page.

## 🛠️ Tech Stack

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17+.

| Technology | Usage |
| :--- | :--- |
| **Angular (Core)** | Frontend Framework (Standalone approach) |
| **TypeScript** | Strong typing and game logic |
| **Angular Material** | UI Components (Cards, Buttons, Theming) |
| **SCSS** | Custom styling and layouts (Grid/Flexbox) |
| **GitHub Pages** | Deployment and hosting |

## 📂 Project Structure

The project follows a component-based architecture:

```bash
src/app
├── 📂 board         # Smart component: Handles game state and logic
├── 📂 square        # Dumb component: Renders individual cells
├── 📂 pipes         # Custom pipe for dynamic styling
└── 📄 main.ts       # Application entry point
```

## 🔧 Installation & Running Locally

Clone the repository and install the dependencies to run the game on your machine.

1.  **Clone the repo:**
    ```bash
    git clone https://github.com/Oriol-Farras/tic-tac-toe.git
    ```

2.  **Navigate to the project folder:**
    ```bash
    cd tic-tac-toe
    ```

3.  **Install dependencies:**
    ```bash
    npm install
    ```

4.  **Run the development server:**
    ```bash
    ng serve
    ```

5.  **Open your browser:**
    Navigate to `http://localhost:4200/`.

## 💡 What I Learned

This project served as a practical exercise to master:
*   Creating and using **Angular Standalone Components**.
*   Passing data via `@Input` decorators.
*   Handling user events (`(click)` bindings).
*   Creating custom **Pipes** (`GetClassPipe`) for data transformation in templates.
*   Implementing **Structural Directives** (`*ngIf`, `*ngFor`).
*   Deploying Angular applications to **GitHub Pages**.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!
Feel free to check the [issues page](https://github.com/Oriol-Farras/tic-tac-toe/issues).

## 📝 License

This project is [MIT](LICENSE) licensed.

---

<div align="center">
  <sub>Built with ❤️ by <a href="https://github.com/Oriol-Farras">Oriol Farràs</a></sub>
</div>
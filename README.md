# AI Gaming GameGen No-Code Tool

## Project Overview

This project is a web-based, no-code game generation tool that allows users to create simple HTML5 games without writing any code. It provides an intuitive interface for selecting game templates, customizing parameters, and simulating AI-powered asset and logic generation. The goal is to make game development accessible to a wider audience, enabling rapid prototyping and creative expression.

## Features

*   **No-Code Interface**: Create games through a user-friendly graphical interface.
*   **Template-Based Creation**: Choose from a variety of pre-built game templates:
    *   **Flappy Bird**: A classic tap-to-fly game.
    *   **Speed Runner**: An endless runner with obstacles.
    *   **Whack-a-Mole**: A reaction-based game.
    *   **Match-3 Puzzle**: A tile-matching puzzle game.
    *   **Crossy Road**: A frogger-style endless dodger.
*   **Customization Options**: Adjust game difficulty, themes, art styles, and specific parameters for each game template.
*   **Simulated AI Generation**: Experience simulated AI capabilities for generating game assets (e.g., background music, in-app purchases) and modifying game logic based on natural language prompts.
*   **Real-time Preview**: Instantly see changes reflected in a live game preview on a canvas.
*   **HTML5 Export**: Export your created game as a standalone `index.html` file within a downloadable ZIP package.
*   **Sharing**: Share your game details directly from the application.

## Getting Started

To run this project locally, follow these steps:

### Prerequisites

You will need a web browser (e.g., Chrome, Firefox) to open the `Main.html` file.

### Installation

1.  **Clone the repository (if applicable)**:
    ```bash
    git clone <repository_url>
    cd "AI Gaming"
    ```
    *(Note: If you received this project as a ZIP file, simply extract it to your desired location.)*

2.  **Open `Main.html`**: Navigate to the project directory and open the `Main.html` file in your web browser. You can usually do this by double-clicking the file.

    ```bash
    # Example for Windows
    start Main.html
    ```

## Usage

1.  **Select a Template**: Choose your desired game template from the "Game Template" section.
2.  **Customize Parameters**: Adjust the various sliders and input fields to modify game difficulty, theme, art style, and other game-specific settings.
3.  **Generate Assets/Logic (Simulated)**: Use the AI prompt sections to simulate asset and logic generation. Provide descriptions for background music, IAP items, or game logic modifications.
4.  **Preview Your Game**: Observe the live preview on the canvas as you make changes.
5.  **Export Your Game**: Once satisfied, click the "Export Game" button to generate and download a ZIP file containing your game.

## Project Structure

```
AI Gaming/
├── AI Gaming GameGen No-Code Tool.pdf  # Project documentation
├── Main.html                           # Main application file (HTML, CSS, JavaScript)
├── PROJECT_DESCRIPTION.md              # Detailed project description (features, competitor analysis, applications)
├── README.md                           # This file
└── components/                         # Placeholder for potential future React/UI components (currently not used by Main.html)
    ├── ExportPanel.jsx
    ├── ParameterPanel.jsx
    ├── ReskinPanel.jsx
    └── TemplateSelector.jsx
```

## Technologies Used

*   **HTML5**: For structuring the web application.
*   **CSS3**: For styling and layout.
*   **JavaScript**: For all interactive logic, game mechanics, and UI manipulation.
*   **JSZip**: (Used internally for creating ZIP files during export).
*   **Canvas API**: For rendering game previews.

## Future Enhancements

*   Integration with actual generative AI APIs (e.g., for image generation, music composition, advanced game logic).
*   More sophisticated game templates and customization options.
*   Improved UI/UX for a more polished experience.
*   Support for saving and loading game configurations.
*   Expanded asset library.

## License

This project is open-source and available under the [MIT License](LICENSE). (Note: A `LICENSE` file is not included in the provided context, but this is a common practice.)

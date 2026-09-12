# CPSC44000 Portfolio

## Author

**Michael Mihailov**

## Project Description

This project is a portfolio website for CPSC44000 that serves as a central hub for my web-based class assignments.

The website displays information about each assignment and provides links to both the deployed website and its corresponding GitHub repository. Project information is stored in a JSON file and is dynamically loaded and displayed on the webpage using JavaScript.

The portfolio is designed to be expandable so that additional assignments can be added to the portfolio by updating the project data in `projects.json`.

This project was created for a Lewis University web development assignment and demonstrates the use of HTML, CSS, JavaScript, JSON, the Fetch API, Promises, async/await, and dynamic DOM manipulation.

## Technologies

- HTML
- CSS
- JavaScript
- JSON
- Fetch API
- Promises
- async/await
- DOM Manipulation
- Microsoft Azure

## Project Structure

- `src/index.html` - Defines the structure and content of the portfolio webpage.
- `src/main.js` - Loads project information from `projects.json` and dynamically generates the project listings.
- `src/styles.css` - Defines the appearance, layout, and responsive design of the portfolio.
- `src/projects.json` - Contains the name, description, website link, and GitHub repository link for each project.
- `README.md` - Provides information about the project, its technologies, and how to run it.
- `LICENSE` - Defines the terms under which this project may be used.

## Running the Application

### Prerequisites

The application requires:

- A modern web browser
- Visual Studio Code or another text editor
- A local web server

### Running with Visual Studio Code

1. Open the project folder in Visual Studio Code.
2. Install the Live Server extension if it is not already installed.
3. Open `src/index.html`.
4. Right-click `index.html` and select **Open with Live Server**.
5. The portfolio will open in a web browser.

A local web server is recommended because the application uses the Fetch API to retrieve the `projects.json` file. Opening `index.html` directly using a `file://` URL may prevent the browser from loading the JSON file.

## Adding a Project

Additional projects can be added by modifying `src/projects.json`.

Each project should contain the following properties:

```json
{
    "name": "Project Name",
    "description": "Project description.",
    "site-link": "https://example.com",
    "github-link": "https://github.com/example/project"
}
```

The JavaScript automatically generates the corresponding project listing from the information in the JSON file.

## Deployment

The website is hosted using Microsoft Azure and is publicly accessible through an HTTPS URL.

## Artificial Intelligence Disclosure

The `styles.css` file was generated with assistance from ChatGPT and reviewed by the author.

ChatGPT was also used as a learning and programming assistance tool during development to explain JavaScript concepts, assist with debugging, and answer questions related to JSON, the Fetch API, asynchronous programming, and DOM manipulation.

**This README.md file was generated with the assistance of ChatGPT.**

The author reviewed the generated content and is responsible for the final contents of this README.md file.

## License

This project is **All Rights Reserved**. See the accompanying `LICENSE` file for the full terms.
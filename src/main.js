function main() {
    console.log("Main function executed.");
    
    loadProjects();
}

async function loadProjects() {
    let response = await fetch("projects.json");
    let projects = await response.json();

    document.getElementById("project-list").innerHTML = `
        ${projects.map(project => `
            <div class="project">
                <h3><a href="${project.siteLink}" target="_blank">${project.name}</a></h3>
                <p>${project.description}</p>
                <p><a href="${project.githubLink}" target="_blank">GitHub Repository</a></p>
            </div>
        `).join('')}
    `;

    console.log("Projects loaded:", projects);
}


main();
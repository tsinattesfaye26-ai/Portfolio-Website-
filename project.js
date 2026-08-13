/* =========================================
   PROJECT PORTFOLIO SYSTEM
========================================= */

const projectsGrid =
    document.getElementById("projectsGrid");


/* =========================================
   CREATE PROJECT CARD
========================================= */

function createProjectCard(project) {

    const card =
        document.createElement("article");

    card.className =
        "project-card";

    card.dataset.category =
        project.category;


    card.innerHTML = `

        <!-- PROJECT VISUALIZATION -->

        <div class="project-visual">

            <div class="visual-dashboard">

                <div class="visual-title">
                    ${project.category} Analysis
                </div>

                <div class="chart-bars">

                    <span
                        class="chart-bar"
                        style="height:45%"
                    ></span>

                    <span
                        class="chart-bar"
                        style="height:70%"
                    ></span>
                    <span
                        class="chart-bar"
                        style="height:55%"
                    ></span>

                    <span
                        class="chart-bar"
                        style="height:85%"
                    ></span>

                    <span
                        class="chart-bar"
                        style="height:65%"
                    ></span>

                    <span
                        class="chart-bar"
                        style="height:95%"
                    ></span>

                </div>

            </div>

        </div>


        <!-- PROJECT INFORMATION -->

        <div class="project-content">

            <span class="project-category">
                ${project.category}
            </span>


            <h3 class="project-title">
                ${project.title}
            </h3>


            <p class="project-description">
                ${project.description}
            </p>


            <div class="project-tools">

                ${project.tools
                    .map(tool => `
                        <span class="project-tool">
                            ${tool}
                        </span>
                    `)
                    .join("")
                }

            </div>
            
            <a
                href="project-details.html?id=${project.id}"
                class="view-project-button"
            >
                View Full Project →
            </a>

        </div>

    `;


    return card;
}


/* =========================================
   DISPLAY PROJECTS
========================================= */

function displayProjects(filter = "All") {

    if (!projectsGrid) {
        return;
    }


    projectsGrid.innerHTML = "";


    projects.forEach(project => {

        if (
            filter !== "All" &&
            project.category !== filter
        ) {
            return;
        }


        const card =
            createProjectCard(project);


        projectsGrid.appendChild(card);

    });

}

/* =========================================
   FILTER PROJECTS
========================================= */

const filterButtons =
    document.querySelectorAll(
        ".filter-button"
    );


filterButtons.forEach(button => {

    button.addEventListener(
        "click",
        function () {

            filterButtons.forEach(
                btn =>
                    btn.classList.remove(
                        "active"
                    )
            );


            this.classList.add("active");


            const filter =
                this.dataset.filter;


            displayProjects(filter);

        }
    );

});


/* =========================================
   START PROJECT SYSTEM
========================================= */

displayProjects();
/* =========================================
   PORTFOLIO PROJECT SYSTEM
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    const projectsGrid =
        document.getElementById("projectsGrid");

    const filterButtons =
        document.querySelectorAll(".filter-button");


    /* =========================================
       CREATE PROJECT CARD
    ========================================== */

    function createProjectCard(project) {

        const card =
            document.createElement("article");

        card.className =
            "project-card";


        let imageContent = "";

        if (project.image) {

            imageContent = `
                <img
                    src="${project.image}"
                    alt="${project.title}"
                >
            `;

        } else {

            imageContent = `
                <span class="project-placeholder">
                    ${project.icon}
                </span>
            `;

        }


        const tools =
            project.tools
                .map(function (tool) {

                    return `
                        <span class="project-tool">
                            ${tool}
                        </span>
                    `;

                })
                .join("");


        card.innerHTML = `

            <!-- PROJECT IMAGE -->

            <div class="project-card-image">

                ${imageContent}

            </div>





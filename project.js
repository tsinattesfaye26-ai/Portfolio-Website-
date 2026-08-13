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


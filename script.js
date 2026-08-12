/* =========================================
   PROJECT GALLERY SYSTEM
========================================= */


let currentProjectIndex = 0;


const projectGallery =
    document.getElementById("projectGallery");


const featuredProjectImage =
    document.getElementById("featuredProjectImage");


const featuredCategory =
    document.getElementById("featuredCategory");


const featuredTitle =
    document.getElementById("featuredTitle");


const featuredDescription =
    document.getElementById("featuredDescription");


const featuredTools =
    document.getElementById("featuredTools");


const viewFeaturedProject =
    document.getElementById("viewFeaturedProject");



/* =========================================
   CREATE PROJECT GALLERY
========================================= */

function createProjectGallery() {


    projectGallery.innerHTML = "";


    projects.forEach((project, index) => {


        const card =
            document.createElement("button");


        card.className =
            "project-card";


        card.dataset.index =
            index;



        card.innerHTML = `

            <div class="project-card-image">

                ${
                    project.image

                    ?

                    `<img src="${project.image}" alt="${project.title}">`

                    :

                    `<span>📊</span>`

                }

            </div>


            <div class="project-card-content">

                <span class="project-category">

                    ${project.category}

                </span>


                <h3>

                    ${project.title}

                </h3>


                <p>

                    ${project.shortDescription}

                </p>


            </div>

        `;
         card.addEventListener(
            "click",
            () => {


                currentProjectIndex =
                    index;


                updateFeaturedProject();


            }
        );



        projectGallery.appendChild(card);


    });


}




/* =========================================
   UPDATE FEATURED PROJECT
========================================= */


function updateFeaturedProject() {


    const project =
        projects[currentProjectIndex];



    if(!project) return;



    featuredCategory.textContent =
        project.category;



    featuredTitle.textContent =
        project.title;



    featuredDescription.textContent =
        project.shortDescription;



    featuredTools.innerHTML =

        project.tools

        .map(
            tool =>
            `<span>${tool}</span>`
        )

        .join("");




    if(project.image){


        featuredProjectImage.innerHTML = `

            <img
                src="${project.image}"
                alt="${project.title}"
            >

        `;


    }

    else {


        featuredProjectImage.innerHTML = `

            <span>
                📊
            </span>

        `;


    }



}

/* =========================================
   OPEN PROJECT DETAILS
========================================= */


viewFeaturedProject.addEventListener(
    "click",
    () => {


        openProjectDetails(
            projects[currentProjectIndex]
        );


    }
);





/* =========================================
   START SYSTEM
========================================= */


createProjectGallery();


updateFeaturedProject();

/* =========================================
   NEXT PROJECT
========================================= */

nextProject.addEventListener(
    "click",
    () => {


        currentProjectIndex =

            (
                currentProjectIndex
                +
                1
            )

            %

            projects.length;


        updateFeaturedProject();

    }
);



/* =========================================
   PREVIOUS PROJECT
========================================= */

previousProject.addEventListener(
    "click",
    () => {


        currentProjectIndex =

            (
                currentProjectIndex
                -
                1
                +
                projects.length
            )

            %

            projects.length;


        updateFeaturedProject();

    }
);



/* =========================================
   OPEN PROJECT DETAILS
========================================= */

const projectModal =
    document.getElementById(
        "projectModal"
    );


const projectDetails =
    document.getElementById(
        "projectDetails"
    );


const closeModal =
    document.getElementById(
        "closeModal"
    );



function openProjectDetails(
    project
) {


    const githubButton =

        project.githubUrl

            ? `

                <a
                    href="${project.githubUrl}"
                    target="_blank"
                    class="primary-button"
                >

                    View GitHub →

                </a>

            `

            : "";



    const liveButton =

        project.liveDemoUrl

            ? `

                <a
                    href="${project.liveDemoUrl}"
                    target="_blank"
                    class="secondary-button"
                >

                    Live Demo →

                </a>

            `

            : "";






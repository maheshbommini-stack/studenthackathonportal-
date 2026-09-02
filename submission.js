/* =========================================
   HACKARENA PROJECT SUBMISSION
========================================= */

function submitProject(event) {

    event.preventDefault();


    const projectName =
        document.getElementById(
            "projectName"
        ).value.trim();


    const projectDescription =
        document.getElementById(
            "projectDescription"
        ).value.trim();


    const techStack =
        document.getElementById(
            "techStack"
        ).value.trim();


    const githubLink =
        document.getElementById(
            "githubLink"
        ).value.trim();


    const demoLink =
        document.getElementById(
            "demoLink"
        ).value.trim();


    const savedUser =
        localStorage.getItem(
            "hackArenaUser"
        );


    if (!savedUser) {

        alert(
            "Please login before submitting your project."
        );

        window.location.href =
            "login.html";

        return;

    }


    const registered =
        localStorage.getItem(
            "registeredHackathon"
        );


    let hackathonName =
        "No hackathon selected";


    if (registered) {

        try {

            const hackathon =
                JSON.parse(registered);

            hackathonName =
                hackathon.name;

        }

        catch (error) {

            console.log(
                "Hackathon data error."
            );

        }

    }


    const submission = {

        projectName:
            projectName,

        description:
            projectDescription,

        techStack:
            techStack,

        github:
            githubLink,

        demo:
            demoLink,

        hackathon:
            hackathonName,

        status:
            "Submitted",

        submittedAt:
            new Date().toLocaleString()

    };


    localStorage.setItem(
        "hackArenaSubmission",
        JSON.stringify(submission)
    );


    alert(
        "✅ Project submitted successfully!"
    );


    const status =
        document.getElementById(
            "submissionStatus"
        );


    const submittedName =
        document.getElementById(
            "submittedProjectName"
        );


    if (status) {

        status.style.display =
            "block";

    }


    if (submittedName) {

        submittedName.textContent =
            projectName;

    }


    document.getElementById(
        "submissionForm"
    ).reset();

}


/* =========================================
   LOAD PREVIOUS SUBMISSION
========================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const savedSubmission =
            localStorage.getItem(
                "hackArenaSubmission"
            );


        if (!savedSubmission) return;


        try {

            const submission =
                JSON.parse(
                    savedSubmission
                );


            const status =
                document.getElementById(
                    "submissionStatus"
                );


            const submittedName =
                document.getElementById(
                    "submittedProjectName"
                );


            if (status) {

                status.style.display =
                    "block";

            }


            if (submittedName) {

                submittedName.textContent =
                    submission.projectName;

            }

        }

        catch (error) {

            console.log(
                "Unable to load submission."
            );

        }

    }
);
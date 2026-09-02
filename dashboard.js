/* =========================================
   HACKARENA DASHBOARD
========================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        loadStudentProfile();
        loadRegisteredHackathon();
        loadTeamStatus();
        loadSubmissionStatus();

    }
);


/* =========================================
   STUDENT PROFILE
========================================= */

function loadStudentProfile() {

    const savedUser =
        localStorage.getItem(
            "hackArenaUser"
        );

    if (!savedUser) return;


    try {

        const user =
            JSON.parse(savedUser);


        const userName =
            document.getElementById(
                "userName"
            );

        if (userName) {

            userName.textContent =
                user.name || "Student";

        }


        const profileName =
            document.getElementById(
                "profileName"
            );

        if (profileName) {

            profileName.textContent =
                user.name || "Student";

        }


        const profileEmail =
            document.getElementById(
                "profileEmail"
            );

        if (profileEmail) {

            profileEmail.textContent =
                user.email || "Not available";

        }


        const profileCollege =
            document.getElementById(
                "profileCollege"
            );

        if (profileCollege) {

            profileCollege.textContent =
                user.college || "Not available";

        }

    }

    catch (error) {

        console.log(
            "Unable to load user profile."
        );

    }

}


/* =========================================
   REGISTERED HACKATHON
========================================= */

function loadRegisteredHackathon() {

    const registered =
        localStorage.getItem(
            "registeredHackathon"
        );


    const container =
        document.getElementById(
            "registeredHackathon"
        );


    if (!container) return;


    if (!registered) return;


    try {

        const hackathon =
            JSON.parse(registered);


        container.innerHTML = `

            <div class="event-icon">
                🚀
            </div>

            <div>

                <h3>
                    ${hackathon.name}
                </h3>

                <p>
                    ${hackathon.category}
                    •
                    ${hackathon.date}
                </p>

            </div>

        `;


        const count =
            document.getElementById(
                "registeredCount"
            );


        if (count) {

            count.textContent = "1";

        }

    }

    catch (error) {

        console.log(
            "Hackathon data error."
        );

    }

}


/* =========================================
   TEAM STATUS
========================================= */

function loadTeamStatus() {

    const savedTeam =
        localStorage.getItem(
            "hackArenaTeam"
        );


    const teamStats =
        document.querySelectorAll(
            ".dash-stat"
        );


    if (!teamStats.length) return;


    if (!savedTeam) return;


    try {

        const team =
            JSON.parse(savedTeam);


        const teamCount =
            teamStats[1].querySelector("b");


        if (teamCount) {

            const members =
                team.members || [];


            teamCount.textContent =
                members.length + 1;

        }

    }

    catch (error) {

        console.log(
            "Unable to load team."
        );

    }

}


/* =========================================
   SUBMISSION STATUS
========================================= */

function loadSubmissionStatus() {

    const submission =
        localStorage.getItem(
            "hackArenaSubmission"
        );


    if (!submission) return;


    const countElements =
        document.querySelectorAll(
            ".dash-stat"
        );


    if (
        countElements.length >= 3
    ) {

        const submissionCount =
            countElements[2]
                .querySelector("b");


        if (submissionCount) {

            submissionCount.textContent =
                "1";

        }

    }

}
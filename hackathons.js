/* =========================================
   HACKARENA HACKATHONS
========================================= */

const hackathons = [

    {
        name: "AI Innovation Challenge",
        category: "AI",
        status: "Open",
        date: "20 September 2026",
        prize: "50,000 Points",
        icon: "🤖",
        description:
            "Build innovative AI solutions for real-world problems."
    },

    {
        name: "Future Web Hackathon",
        category: "Web",
        status: "Open",
        date: "28 September 2026",
        prize: "40,000 Points",
        icon: "🌐",
        description:
            "Create modern and innovative web applications."
    },

    {
        name: "Cyber Shield Challenge",
        category: "Cybersecurity",
        status: "Upcoming",
        date: "5 October 2026",
        prize: "60,000 Points",
        icon: "🛡️",
        description:
            "Develop solutions to protect systems from cyber threats."
    },

    {
        name: "Cloud Computing Challenge",
        category: "Cloud",
        status: "Open",
        date: "12 October 2026",
        prize: "45,000 Points",
        icon: "☁️",
        description:
            "Build scalable cloud-based applications and services."
    },

    {
        name: "GreenTech Innovation",
        category: "GreenTech",
        status: "Upcoming",
        date: "20 October 2026",
        prize: "35,000 Points",
        icon: "🌱",
        description:
            "Create technology solutions for a sustainable future."
    }

];


/* =========================================
   DISPLAY HACKATHONS
========================================= */

function renderHackathons() {

    const grid =
        document.getElementById(
            "hackathonGrid"
        );

    if (!grid) return;


    const search =
        document.getElementById(
            "search"
        ).value
        .toLowerCase()
        .trim();


    const category =
        document.getElementById(
            "category"
        ).value;


    const status =
        document.getElementById(
            "status"
        ).value;


    const filtered =
        hackathons.filter(
            function (hackathon) {

                const matchesSearch =
                    hackathon.name
                        .toLowerCase()
                        .includes(search);


                const matchesCategory =
                    category === "all" ||
                    hackathon.category === category;


                const matchesStatus =
                    status === "all" ||
                    hackathon.status === status;


                return (
                    matchesSearch &&
                    matchesCategory &&
                    matchesStatus
                );

            }
        );


    grid.innerHTML = "";


    if (filtered.length === 0) {

        grid.innerHTML = `

            <div class="card">

                <h2>
                    😕 No hackathons found
                </h2>

                <p>
                    Try changing your search or filters.
                </p>

            </div>

        `;

        return;

    }


    filtered.forEach(
        function (hackathon) {

            grid.innerHTML += `

                <div class="card hackathon-card">

                    <div class="hackathon-icon">
                        ${hackathon.icon}
                    </div>

                    <span class="eyebrow">
                        ${hackathon.category}
                    </span>

                    <h2>
                        ${hackathon.name}
                    </h2>

                    <p>
                        ${hackathon.description}
                    </p>

                    <div class="hackathon-info">

                        <span>
                            📅 ${hackathon.date}
                        </span>

                        <span>
                            🏆 ${hackathon.prize}
                        </span>

                    </div>

                    <p>
                        <strong>
                            Status:
                        </strong>

                        ${hackathon.status}
                    </p>

                    <button
                        class="btn primary-btn"
                        onclick="registerHackathon(
                            '${hackathon.name}',
                            '${hackathon.category}',
                            '${hackathon.date}'
                        )"
                    >
                        🚀 Register Now
                    </button>

                </div>

            `;

        }
    );

}


/* =========================================
   REGISTER HACKATHON
========================================= */

function registerHackathon(
    name,
    category,
    date
) {

    const savedUser =
        localStorage.getItem(
            "hackArenaUser"
        );


    if (!savedUser) {

        alert(
            "Please login before registering."
        );

        window.location.href =
            "login.html";

        return;

    }


    const hackathon = {

        name: name,

        category: category,

        date: date

    };


    localStorage.setItem(
        "registeredHackathon",
        JSON.stringify(hackathon)
    );


    alert(
        "✅ Successfully registered for " +
        name + "!"
    );


    window.location.href =
        "dashboard.html";

}


/* =========================================
   INITIAL LOAD
========================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        renderHackathons();

    }
);
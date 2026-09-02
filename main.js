/* =========================================
   HACKARENA MAIN JAVASCRIPT
========================================= */


/* =========================================
   MOBILE MENU
========================================= */

function toggleMenu() {

    const navlinks =
        document.querySelector(".navlinks");

    if (navlinks) {

        navlinks.classList.toggle("show");

    }

}


/* =========================================
   LOGOUT
========================================= */

function logoutUser() {

    localStorage.removeItem(
        "hackArenaUser"
    );

    alert(
        "You have been logged out."
    );

    window.location.href =
        "index.html";

}


/* =========================================
   LOGIN CHECK
========================================= */

function requireLogin() {

    const user =
        localStorage.getItem(
            "hackArenaUser"
        );

    if (!user) {

        alert(
            "Please login first."
        );

        window.location.href =
            "login.html";

        return false;

    }

    return true;

}


/* =========================================
   UPDATE NAVBAR USER
========================================= */

function updateNavbarUser() {

    const savedUser =
        localStorage.getItem(
            "hackArenaUser"
        );

    if (!savedUser) return;


    try {

        const user =
            JSON.parse(savedUser);


        const userElements =
            document.querySelectorAll(
                "[data-user-name]"
            );


        userElements.forEach(
            function (element) {

                element.textContent =
                    user.name || "Student";

            }
        );

    }

    catch (error) {

        console.log(
            "Unable to load user."
        );

    }

}


/* =========================================
   REGISTER USER
========================================= */

function registerUser(event) {

    event.preventDefault();


    const name =
        document.getElementById(
            "regName"
        ).value.trim();


    const email =
        document.getElementById(
            "regEmail"
        ).value.trim();


    const college =
        document.getElementById(
            "regCollege"
        ).value.trim();


    const password =
        document.getElementById(
            "regPassword"
        ).value;


    if (
        !name ||
        !email ||
        !college ||
        !password
    ) {

        alert(
            "Please fill all fields."
        );

        return;

    }


    const user = {

        name: name,

        email: email,

        college: college,

        password: password

    };


    localStorage.setItem(
        "hackArenaUser",
        JSON.stringify(user)
    );


    alert(
        "✅ Account created successfully!"
    );


    window.location.href =
        "login.html";

}


/* =========================================
   LOGIN
========================================= */

function loginUser(event) {

    event.preventDefault();


    const email =
        document.getElementById(
            "loginEmail"
        ).value.trim();


    const password =
        document.getElementById(
            "loginPassword"
        ).value;


    const savedUser =
        localStorage.getItem(
            "hackArenaUser"
        );


    if (!savedUser) {

        alert(
            "No account found. Please register first."
        );

        window.location.href =
            "register.html";

        return;

    }


    try {

        const user =
            JSON.parse(savedUser);


        if (
            email === user.email &&
            password === user.password
        ) {

            alert(
                "✅ Login successful! Welcome " +
                user.name
            );


            window.location.href =
                "dashboard.html";

        }

        else {

            alert(
                "❌ Incorrect email or password."
            );

        }

    }

    catch (error) {

        alert(
            "Something went wrong. Please register again."
        );

    }

}


/* =========================================
   PAGE LOAD
========================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        updateNavbarUser();

    }
);
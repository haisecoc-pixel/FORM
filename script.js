const form = document.getElementById("registrationForm");

const clearBtn = document.getElementById("clearBtn");

const successMessage =
    document.getElementById("successMessage");


const email =
    document.getElementById("email");

const confirmEmail =
    document.getElementById("confirmEmail");


const userId =
    document.getElementById("userId");

const confirmUserId =
    document.getElementById("confirmUserId");


const password =
    document.getElementById("password");


/* REMOVE ERROR WHEN USER TYPES */

document
    .querySelectorAll("input")
    .forEach(input => {

        input.addEventListener("input", () => {

            input.classList.remove("invalid");

            successMessage.style.display = "none";

        });

    });


/* FORM SUBMISSION */

form.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();

        let valid = true;


        /* REQUIRED FIELDS */

        const requiredFields =
            form.querySelectorAll("[required]");


        requiredFields.forEach(field => {

            if (!field.value.trim()) {

                field.classList.add("invalid");

                valid = false;

            }

        });


        /* EMAIL VALIDATION */

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


        if (
            email.value &&
            !emailPattern.test(email.value)
        ) {

            email.classList.add("invalid");

            alert(
                "Please enter a valid email address."
            );

            valid = false;

        }


        /* CONFIRM EMAIL */

        if (
            email.value &&
            confirmEmail.value &&
            email.value !== confirmEmail.value
        ) {

            confirmEmail.classList.add("invalid");

            alert(
                "Email addresses do not match."
            );

            valid = false;

        }


        /* PASSWORD */

        if (
            password.value &&
            password.value.length < 8
        ) {

            password.classList.add("invalid");

            alert(
                "Password must contain at least 8 characters."
            );

            valid = false;

        }


        /* USER ID */

        const userIdPattern =
            /^[A-Za-z][A-Za-z0-9_]{7,19}$/;


        if (
            userId.value &&
            !userIdPattern.test(userId.value)
        ) {

            userId.classList.add("invalid");

            alert(
                "User ID must be 8–20 characters, " +
                "start with a letter, and contain " +
                "only letters, numbers, and underscores."
            );

            valid = false;

        }


        /* CONFIRM USER ID */

        if (
            userId.value &&
            confirmUserId.value &&
            userId.value !== confirmUserId.value
        ) {

            confirmUserId.classList.add("invalid");

            alert(
                "Preferred User IDs do not match."
            );

            valid = false;

        }


        /* STOP IF INVALID */

        if (!valid) {

            const firstInvalid =
                form.querySelector(".invalid");


            if (firstInvalid) {

                firstInvalid.focus();

            }

            return;

        }


        /* SUCCESS */

        successMessage.style.display = "block";


        successMessage.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    }
);


/* CLEAR FORM */

clearBtn.addEventListener(
    "click",
    function() {

        form.reset();


        document
            .querySelectorAll(".invalid")
            .forEach(field => {

                field.classList.remove("invalid");

            });


        successMessage.style.display = "none";

    }
);


/* PREVENT FUTURE BIRTH DATES */

document.getElementById("birthDate").max =
    new Date()
        .toISOString()
        .split("T")[0];

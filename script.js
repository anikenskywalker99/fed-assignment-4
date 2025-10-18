/*
    Assignment 4
    Aniken Wiens Shepherd
    October 17, 2025
*/

const form = document.getElementById("hockeySurvey");
let isValid = true;

document.addEventListener("DOMContentLoaded", (event) => {
    const age = document.getElementById("age");
    const showAge = () => {
        if (age.parentElement.children.length > 3) {
            age.parentElement.removeChild(age.parentElement.lastChild);
        }
        age.parentElement.removeChild(age.parentElement.lastChild);
        const ageDisplay = document.createElement("span");
        ageDisplay.innerText = age.value;
        age.parentElement.appendChild(ageDisplay);
    }
    showAge();
    age.addEventListener('input', showAge, false);
})

const isNotEmpty = (name) => {
    if (name.value.trim() === "") {
        showInputError(name, "Name is required");
        console.log("name")
        return isValid = false;
    }
}

const isValidEmail = (email) => {
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (!emailPattern.test(email.value)) {
        showInputError(email, "Please enter a valid email address");
        console.log("email")
        isValid = false;
    }
    return isValid
}

const isValidPhone = (phone) => {
    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone.value.trim())) {
        showInputError(phone, "Enter a valid 10-digit phone number");
        console.log("phone")
        isValid = false;
    }
    return isValid
}

const hasCheckedOption = () => {
    const checkedRadioButton = document.querySelector('input[name="teams"]:checked');
    const radioButton = document.getElementById("canadiens")
    if (!checkedRadioButton) {
        showInputError(radioButton, "\nPlease select a favourite team");
        console.log("radio")
        isValid = false;
    }
    return isValid
}

const isSelected = (dropdown) => {
    if (dropdown.value === "") {
        showInputError(dropdown, "Please select your province");
        console.log("prov")
        isValid = false;
    }
    return isValid
}

const isValidRange = (age) => {
    if(age.value <= 18) {
        showInputError(age, "Age must be above 18");
        console.log("age");
        isValid = false;
    }
    return isValid
}

const isValidDate = (date) => {
    if (date.value === "") {
        showInputError(date, "Date must be valid");
        console.log("date")
        isValid = false;
    }
    return isValid
}

const validateForm = () => {
    const name = document.getElementById("name");
    const age = document.getElementById("age");
    const province = document.getElementById("province");
    const email = document.getElementById("email")
    const phone = document.getElementById("phone");
    const firstGame = document.getElementById("first-game");

    isNotEmpty(name)
    isValidRange(age)
    isSelected(province)
    isValidEmail(email)
    isValidPhone(phone)
    hasCheckedOption()
    isValidDate(firstGame)

    return isValid;
};

const showInputError = (inputElement, message) => {
    const errorDisplay = document.createElement("span");
    errorDisplay.innerText = message;
    errorDisplay.className = "error-message";
    errorDisplay.style.color = "red";
    errorDisplay.style.fontStyle = "italic";
    errorDisplay.setAttribute("role", "alert");

    inputElement.parentElement.appendChild(errorDisplay);
};

form.addEventListener("submit", (event) => {
    event.preventDefault();

    document.querySelectorAll(".error-message").forEach((el) => el.remove());

    const submission = document.getElementById("Submission-done");
    if (submission) submission.textContent = "";


    if (validateForm()) {
        console.log("Validation successful");
        form.submit();
    } else {
        console.log("Validation failed");
        isValid = true;
    }
});
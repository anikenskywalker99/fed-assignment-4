/*
    Assignment 4
    Aniken Wiens Shepherd
    October 17, 2025
*/

const form = document.getElementById("hockeySurvey");

const isNotEmpty = (name) => {
    if (name.value.trim() === "") {
    showInputError(name, "Name is required");
    isValid = false;
  }
}

const isValidEmail = (email) => {
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (!emailPattern.test(email.value)) {
        showInputError(email, "Please enter a valid email address");
        isValid = false;
    }
}

const isValidPhone = (phone) => {
    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone.value.trim())) {
        showInputError(phone, "Enter a valid 10-digit phone number");
        isValid = false;
    }
}

const hasCheckedOption = () => {
    const radioButton = document.querySelector('input[name="teams"]:checked');
    if (!radioButton) {
        showInputError(radioButton, "Please select a favourite team");
        isValid = false;
    }
}

const isSelected = (dropdown) => {
    if (dropdown.value === "") {
        showInputError(dropdown, "Please select your province");
        isValid = false;
    }
}

const isValidRange = (age) => {
    if(age.value <= 18) {
        showInputError(age, "Age must be above 18");
        isValid = false;
    }
}

const isValidDate = (date) => {
    if (date.value === "") {
        showInputError(date, "Date must be valid");
        isValid = false;
    }
}

const validateForm = () => {
    let isValid = true;

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
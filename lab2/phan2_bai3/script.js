function validate() {
    let ret = true
    if (document.registerForm.firstName.value == "") {
        document.getElementById('firstNameHelp').innerHTML = "Enter your first name."
        ret = false
    } else if (document.registerForm.firstName.value.length < 2 || document.registerForm.firstName.value.length > 30) {
        document.getElementById('firstNameHelp').innerHTML = "First name must be 2-30 characters long."
        ret = false
    } else {
        document.getElementById('firstNameHelp').innerHTML = ""
    }
    if (document.registerForm.lastName.value == "") {
        document.getElementById('lastNameHelp').innerHTML = "Enter your last name."
        ret = false
    } else if (document.registerForm.lastName.value.length < 2 || document.registerForm.lastName.value.length > 30) {
        document.getElementById('lastNameHelp').innerHTML = "Last name must be 2-30 characters long."
        ret = false
    } else {
        document.getElementById('lastNameHelp').innerHTML = ""
    }
    if (document.registerForm.email.value == "") {
        document.getElementById('emailHelp').innerHTML = "Enter your email."
        ret = false
    } else {
        let email = document.registerForm.email.value
        let atFirst = email.indexOf('@')
        if (atFirst < 1 || email.indexOf('@', atFirst + 1) != -1 || email.indexOf('.', atFirst + 2) == -1 || email.indexOf('.', atFirst + 2) == email.length - 1) {
            document.getElementById('emailHelp').innerHTML = "Email must be in the format &lt;sth&gt;@&lt;sth&gt;.&lt;sth&gt;."
            ret = false
        } else {
            document.getElementById('emailHelp').innerHTML = ""
        }
    }
    if (document.registerForm.password.value == "") {
        document.getElementById('passwordHelp').innerHTML = "Enter your password."
        ret = false
    } else if (document.registerForm.password.value.length < 2 || document.registerForm.password.value.length > 30) {
        document.getElementById('passwordHelp').innerHTML = "Password must be 2-30 characters long."
        ret = false
    } else {
        document.getElementById('passwordHelp').innerHTML = ""
    }

    let inputDay = document.getElementById('birthday-day').value
    let inputMonth = document.getElementById('birthday-month').value
    let inputYear = document.getElementById('birthday-year').value
    let now = new Date()
    let dayValid = true
    if (now.getFullYear() < inputYear) {
        dayValid = false
    } else if (now.getFullYear() == inputYear && now.getMonth() + 1 < inputMonth) {
        dayValid = false
    } else if (now.getFullYear() == inputYear && now.getMonth() == inputMonth && now.getDate() < inputDay) {
        dayValid = false
    } else if (inputMonth == 2) {
        if (inputDay > 29) {
            dayValid = false
        } else if (inputDay == 29 && (inputYear % 100 == 0 || inputYear % 4 != 0)) {
            dayValid = false
        }
    } else if (inputDay == 31 && (inputMonth == 4 || inputMonth == 6 || inputMonth == 9 || inputMonth == 11)) {
        dayValid = false
    }
    if (dayValid == false) {
        document.getElementById('birthdayHelp').innerHTML = "It looks like you have entered the wrong infomation."
        ret = false
    } else {
        document.getElementById('birthdayHelp').innerHTML = ""
    }
    if (document.registerForm.gender.value == "") {
        document.getElementById('genderHelp').innerHTML = "Choose your gender."
        ret = false
    } else {
        document.getElementById('genderHelp').innerHTML = ""
    }
    if (document.registerForm.country.value == "") {
        document.getElementById('countryHelp').innerHTML = "Choose your country."
        ret = false
    } else {
        document.getElementById('countryHelp').innerHTML = ""
    }
    if (document.registerForm.about.value.length > 10000) {
        document.getElementById('aboutHelp').innerHTML = "10000 character limit."
        ret = false
    } else {
        document.getElementById('aboutHelp').innerHTML = ""
    }
    if (ret == true) {
        alert('Successed')
    }
    return ret
}
function clearHelp() {
    forHelp = document.getElementsByClassName('for-help')
    for (i = 0; i < forHelp.length; ++i) {
        forHelp[i].innerHTML = ""
    }
}
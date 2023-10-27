function checkNumber(num) {
    if (typeof num != "string") {
        return false
    }
    return !isNaN(num) && !isNaN(parseFloat(num))
}
function checkNumberById(id) {
    return (checkNumber(document.getElementById(id).value))
}
function isInt(num) {
    return !isNaN(num) && parseInt(Number(num)) == num && !isNaN(parseInt(num, 10));
}
function checkNumberByIdAndNotice(id) {
    if (checkNumberById(id) == false) {
        let tem = id + "Help"
        document.getElementById(tem).innerHTML = "Fault"
        return false
    } else return true
}
function addNumberById(first, second, result) {
    let check1 = checkNumberByIdAndNotice(first)
    let check2 = checkNumberByIdAndNotice(second)
    if (check1 && check2) {
        let a = parseFloat(document.getElementById(first).value)
        let b = parseFloat(document.getElementById(second).value)
        document.getElementById(result).innerHTML = a + b
        clearHelp()
    }
}
function subNumberById(first, second, result) {
    let check1 = checkNumberByIdAndNotice(first)
    let check2 = checkNumberByIdAndNotice(second)
    if (check1 && check2) {
        let a = parseFloat(document.getElementById(first).value)
        let b = parseFloat(document.getElementById(second).value)
        document.getElementById(result).innerHTML = a - b
        clearHelp()
    }
}
function multipleNumberById(first, second, result) {
    let check1 = checkNumberByIdAndNotice(first)
    let check2 = checkNumberByIdAndNotice(second)
    if (check1 && check2) {
        let a = parseFloat(document.getElementById(first).value)
        let b = parseFloat(document.getElementById(second).value)
        document.getElementById(result).innerHTML = a * b
        clearHelp()
    }
}
function divideNumberById(first, second, result) {
    let check1 = checkNumberByIdAndNotice(first)
    let check2 = checkNumberByIdAndNotice(second)
    if (second == 0) {
        let tem = second + "Help"
        document.getElementById(tem).innerHTML = "Divide by 0"
    }
    if (check1 && check2) {
        let a = parseFloat(document.getElementById(first).value)
        let b = parseFloat(document.getElementById(second).value)
        document.getElementById(result).innerHTML = a / b
        clearHelp()
    }
}
function factorial(num) {
    let ret = 1;
    while (num > 1) {
        ret *= num
        --num
    }
    return ret
}
function factorialById(numId, resultId) {
    num = document.getElementById(numId).value
    if (isInt(num) == false) {
        let tem = numId + "Help"
        document.getElementById(tem).innerHTML = "Not integer"
    } else {
        document.getElementById(resultId).innerHTML = factorial(num)
        clearHelp()
    }
}
function clearHelp() {
    forHelp = document.getElementsByClassName('for-help')
    for (i = 0; i < forHelp.length; ++i) {
        forHelp[i].innerHTML = ""
    }
}
function moveById(from, to) {
    document.getElementById(to).value = document.getElementById(from).innerHTML
}
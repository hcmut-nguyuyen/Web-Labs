function checkNumber(num) {
    if (typeof num != "string") {
        return false
    }
    if (num.length == 0)
        return true
    return !isNaN(num) && !isNaN(parseFloat(num))
}
function getNumberFromId(id) {
    let num = document.getElementById(id).value
    if (num.length == 0)
        return 0
    else
        return parseFloat(num)
}
function checkNumberById(id) {
    return (checkNumber(document.getElementById(id).value))
}
function isInt(num) {
    if (num.length == 0)
        return true
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
        let a = getNumberFromId(first)
        let b = getNumberFromId(second)
        document.getElementById(result).innerHTML = a + b
        clearHelp()
    }
}
function subNumberById(first, second, result) {
    let check1 = checkNumberByIdAndNotice(first)
    let check2 = checkNumberByIdAndNotice(second)
    if (check1 && check2) {
        let a = getNumberFromId(first)
        let b = getNumberFromId(second)
        document.getElementById(result).innerHTML = a - b
        clearHelp()
    }
}
function multipleNumberById(first, second, result) {
    let check1 = checkNumberByIdAndNotice(first)
    let check2 = checkNumberByIdAndNotice(second)
    if (check1 && check2) {
        let a = getNumberFromId(first)
        let b = getNumberFromId(second)
        document.getElementById(result).innerHTML = a * b
        clearHelp()
    }
}
function divideNumberById(first, second, result) {
    let check1 = checkNumberByIdAndNotice(first)
    let check2 = checkNumberByIdAndNotice(second)
    if (check1 && check2) {
        let a = getNumberFromId(first)
        let b = getNumberFromId(second)
        if (b == 0) {
            let tem = second + "Help"
            document.getElementById(tem).innerHTML = "Divide by 0"
        } else {
            document.getElementById(result).innerHTML = a / b
            clearHelp()
        }
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
        document.getElementById(resultId).innerHTML = factorial(getNumberFromId(numId))
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
function swapValueById(first, second) {
    let tem = document.getElementById(first).value
    document.getElementById(first).value = document.getElementById(second).value
    document.getElementById(second).value = tem
}
function saveValue(from, to) {
    let location = document.getElementById(to)
    let div = document.createElement('div')

    let output = document.createElement('output')
    output.classList.add('form-control')
    output.value = document.getElementById(from).value
    div.appendChild(output)

    div.classList.add('row')
    div.classList.add('justify-content-center')
    let button = document.createElement('button')
    button.type = 'button'
    button.classList.add('col-3')
    button.classList.add('btn')
    button.classList.add('btn-primary')
    button.innerHTML = 'To A'
    button.setAttribute('onclick', "moveById('result', 'numberA')")

    div.appendChild(button)

    button = document.createElement('button')
    button.type = 'button'
    button.classList.add('col-3')
    button.classList.add('btn')
    button.classList.add('btn-primary')
    button.innerHTML = 'To B'
    button.setAttribute('onclick', "moveById('result', 'numberB')")


    div.appendChild(button)
    location.prepend(div)
}
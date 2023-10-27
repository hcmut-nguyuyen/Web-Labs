var abcdef
function show(id) {
    document.getElementById(id).style.display = 'block';
}
function hide(id) {
    document.getElementById(id).style.display = 'none';
}
function hideAndShow(first, second) {
    hide(first)
    show(second)
}
function createTable(location, id, rowNumber, columnNumber) {
    abcdef = 0;
    let table = document.createElement('table')
    let tr = document.createElement('tr')
    for (let j = 0; j < columnNumber + 1; ++j) {
        let td = document.createElement('td')
        tr.appendChild(td)
    }
    tr.style.display = 'none'
    table.appendChild(tr)
    for (let i = 0; i < rowNumber; ++i) {
        let tr = document.createElement('tr')
        let td = document.createElement('td')
        td.style.display = 'none'
        tr.appendChild(td);
        for (let j = 0; j < columnNumber; ++j) {
            let td = document.createElement('td')
            let text = document.createTextNode(abcdef)
            td.appendChild(text)
            tr.appendChild(td);
        }
        table.appendChild(tr)
    }
    table.id = id
    document.getElementById(location).appendChild(table)
}
function deleteElementById(id) {
    document.getElementById(id).remove()
}
function getRowNumber(tableId) {
    return document.getElementById(tableId).rows.length
}
function getColumnNumber(tableId) {
    return document.getElementById(tableId).rows[0].cells.length
}
function addRow(tableId) {
    ++abcdef
    let columnNumber = getColumnNumber(tableId)
    let tr = document.createElement('tr')
    let td = document.createElement('td')
    td.style.display = 'none'
    tr.appendChild(td);
    for (let j = 1; j < columnNumber; ++j) {
        let td = document.createElement('td')
        let text = document.createTextNode(abcdef)
        td.appendChild(text)
        tr.appendChild(td);
    }
    document.getElementById(tableId).appendChild(tr)
}
function addColumn(tableId) {
    ++abcdef
    let table = document.getElementById(tableId)
    let rowNumber = getRowNumber(tableId)
    for (let i = 0; i < rowNumber; ++i) {
        let td = document.createElement('td')
        let text = document.createTextNode(abcdef)
        td.appendChild(text)
        table.rows[i].appendChild(td);
    }
}
function deleteRow(tableId, rowIndex) {
    ++rowIndex
    let table = document.getElementById(tableId)
    let rowNumber = getRowNumber(tableId)
    if (rowIndex < rowNumber) {
        table.rows[rowIndex].remove()
    } else {
        alert(`Table has ${rowNumber - 1} rows`)
    }
}
function deleteColumn(tableId, columnIndex) {
    ++columnIndex
    let table = document.getElementById(tableId)
    let columnNumber = getColumnNumber(tableId)
    if (columnIndex < columnNumber) {
        let rowNumber = getRowNumber(tableId)
        for (let i = 0; i < rowNumber; ++i) {
            table.rows[i].cells[columnIndex].remove();
        }
    } else {
        alert(`Table has ${columnNumber - 1} columns`)
    }
}
function deleteRowInput(tableId, inputId) {
    deleteRow(tableId, document.getElementById(inputId).value)
}
function deleteColumnInput(tableId, inputId) {
    deleteColumn(tableId, document.getElementById(inputId).value)
}
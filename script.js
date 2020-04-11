let ulTasks = $('#ulTasks')
let btnAdd = $('#btnAdd')
let btnReset = $('#btnReset')
let btnCleanup = $('#btnCleanup')
let btnSort = $('#btnSort')
let inpNewTask = $('#inpNewTask')


function addItem() {
    let listItem = $('<li>', {
        'class': 'list-group-item',
        text : inpNewTask.val()
    })
    listItem.click(() => {
        listItem.toggleClass('done')
    })
    ulTasks.append(listItem)
    inpNewTask.val('')
    toggleInputButtons()
}

function clearDone() {
    $('#ulTasks .done').remove()
    toggleInputButtons()
}

function sortTasks() {
    $('#ulTasks .done').appendTo(ulTasks)
    toggleInputButtons()
}

function toggleInputButtons() {

        btnReset.prop('disabled', inpNewTask.val() == '')
        btnAdd.prop('disabled', inpNewTask.val() == '')   
        btnSort.prop('disabled', ulTasks.children().length < 1)
        btnCleanup.prop('disabled', ulTasks.children().length < 1)
}

inpNewTask.keypress((e) => {
    if(e.which == 13) 
    if(inpNewTask.val() != '')
    addItem()
})
inpNewTask.on('input', () => {
    toggleInputButtons()
})

btnAdd.click(() => {
    addItem()
})

btnReset.click(() => {
    inpNewTask.val('')
    toggleInputButtons()
})

btnCleanup.click(() => {
    clearDone()
})

btnSort.click(() => {
    sortTasks()
})
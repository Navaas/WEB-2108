function alertSomething() {
    alert('Something')
}

function consolLogSomething() {
    console.log('Something')
}

document.getElementById('event-listener-1')
    .addEventListener('click', function () {
    console.log('Event listener i clicked')
    )};



    // Hämta data från ett fält
function nameFieldButton(){
    let nameField = document.getElementById('name-field').value
    console.log('nameField', nameField)
}
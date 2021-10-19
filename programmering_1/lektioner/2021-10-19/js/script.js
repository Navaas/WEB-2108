function nameButton(){
    document.getElementById('name').innerText = 'Michaela'
}
/*nameButton

/* Om man lägger nameButton utanför } så kommer "Michaela" synas från start.
Lägger man den innanför } så syns "Michaela när man klickar på knappen.*/


function somethingMoreToLoadOnPageRender(){
    document.getElementById('car').innerText = 'Volvo'
}
somethingMoreToLoadOnPageRender()

function okButton(){
    let input = document.getElementById('getInputFromInputString()').value
    console.log(input)
    document.getElementById('inputResult').innerText = input
}

function randomBotton(){
    document.getElementById('getInputFromInputString()').value = 'Random'
}


let array = ['Alpha', 'Ursula', 'Aram', 'Christoffer', 'Susanna', 'Samatha', 'Hampus', 'Carin', 'Kimmie', Emil]

function pickName(){
    let choseOne = array[Math.floor( Math.random()*array.length)];
    console.log(choseOne)
}
pickName()
let array = ['Alpha', 'Ursula', 'Aram', 'Christoffer', 'Susanna', 'Samatha', 'Hampus', 'Carin', 'Kimmie', 'Emil']

function pickName(){
    let choseOne = array[Math.floor( Math.random()*array.length)];
    console.log(choseOne)
}
pickName()
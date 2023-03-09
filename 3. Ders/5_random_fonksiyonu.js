// Math.round(Math.random() * 100)

function randomGonder(asagi, yukari){
    return Math.round(Math.random() * (yukari - asagi)) + asagi
}

console.log(randomGonder(5,10))
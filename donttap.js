const gridList = ["tile-1", "tile-2", "tile-3", "tile-4", "tile-5", "tile-6", "tile-7", "tile-8", "tile-9", "tile-10", "tile-11", "tile-12", "tile-13", "tile-14", "tile-15", "tile-16"]
const gridTotalTiles = 16


function paintNext(){
    pickWhiteTile()
}

function updateTile(tilename){
    tile = document.querySelector(`#${tilename}`) //clicked tile
    styled = getComputedStyle(tile) // tile with all css properties
    if (styled.backgroundColor == "rgb(255, 255, 255)"){
        alert("clicou no branco perdeu newba")
    }
    else{
        paintNext()
        tile.style.backgroundColor = "white"
    }
}

function rndTile(){ //gives random tile each time is called
    let randomInt = Math.floor(Math.random() * gridTotalTiles)
    let randomTile = gridList[randomInt]
    console.log(`random tile returned: ${randomTile}`)
    return randomTile
    }

function resetTiles(){
    for (let div of gridList){
        tile = document.querySelector(`#${div}`)
        tile.style.backgroundColor = "white"
    }
}

function toggleEnum(){
    for (let div of gridList){
        tile = document.querySelector(`#${div}`)
        tile.textContent = ""
    }
}

function pickWhiteTile(){
    while (true){
        let randomTile = document.querySelector(`#${rndTile()}`)
        let styled = getComputedStyle(randomTile)
        console.log(styled.backgroundColor)

        if (styled.backgroundColor != "rgb(0, 0, 0)"){
            console.log(`${parseInt(randomTile.textContent)+1} is White!`)
            console.log(randomTile)
            randomTile.style.backgroundColor = "black"
            return randomTile
        }
        else{
            console.log(`${parseInt(randomTile.textContent)+1} is not white!`)
            randomTile = document.querySelector(`#${rndTile()}`)
        }
    }
}

function firstTiles(timesToRun){
    count = timesToRun
    while(count > 0){
        pickWhiteTile()
        count--
    }
}


function startGame(){
    firstTiles(3) //starts the game with selected number of tiles to be painted black
}

function resetAndStart(){
    resetTiles()
    startGame()
}
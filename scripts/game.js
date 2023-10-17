var menu = document.getElementById("menu")
var board = document.getElementById("board")
var space = document.getElementById("spaces")
var cursor = document.getElementById("shipPlaceholder")
const spaceSquare = []
for (let i = 0; i < 100; i++) {
    // spaceSquare.push(0)
    spaceSquare[i] = i;
}

console.log(spaceSquare)

function beginGame() {
    menu.style.marginTop = "-100rem"
    menu.style.opacity = 0

    board.style.marginTop = "0"

    assignIT()
}

function assignIT() {
    if (space.children.length >= spaceSquare.length) {
        for (let i = 0; i < spaceSquare.length; i++) {
            
            const spaceChild = space.children[i];
            const spaceElement = spaceSquare[i];
            console.log(`Child: ${spaceChild}, Array Element: ${spaceElement}`);
        }
    }
    else {
        console.error('Not enough children to pair with the array.');
    }
}
var ship = 1;
function beginDeployment(deployedSpace) {
    var currentSpace = space.children[deployedSpace]
    console.log(`space = ${deployedSpace} currentSpace = ${currentSpace}`)
    if (ship == 1) {
        if (deployedSpace == 9 || deployedSpace == 8 || deployedSpace == 0 || deployedSpace == 1)  {
            console.error('nah')
        }
        else {
            space.children[deployedSpace].innerHTML = "ship"
            space.children[deployedSpace + 1].innerHTML = "ship"
            space.children[deployedSpace + 2].innerHTML = "ship"
            space.children[deployedSpace - 1].innerHTML = "ship"
            space.children[deployedSpace - 2].innerHTML = "ship"
            ship = 2
        }
    }
    else if (ship == 2) {
        if (deployedSpace == 9 || deployedSpace == 8 || deployedSpace == 0) {
            console.error('nah')
        }
        else {
            space.children[deployedSpace].innerHTML = "ship"
            space.children[deployedSpace + 1].innerHTML = "ship"
            space.children[deployedSpace + 2].innerHTML = "ship"
            space.children[deployedSpace - 1].innerHTML = "ship"
            ship = 3
        }
    }
    else if (ship == 3) {
        if (deployedSpace == 9 || deployedSpace == 0) {
            console.error('nah')
        }
        else {
            space.children[deployedSpace].innerHTML = "ship"
            space.children[deployedSpace + 1].innerHTML = "ship"
            space.children[deployedSpace - 1].innerHTML = "ship"
            ship = 4
        }
    }
    else if (ship == 4) {
        if (deployedSpace == 9 || deployedSpace == 0) {
            console.error('nah')
        }
        else {
            space.children[deployedSpace].innerHTML = "ship"
            space.children[deployedSpace + 1].innerHTML = "ship"
            space.children[deployedSpace - 1].innerHTML = "ship"
            ship = 5
        }
    }
}

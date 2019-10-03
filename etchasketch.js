// Javascript file for etch-a-sketch project

//==========FUNCTIONS========================
function changeCellColor(event){
    if (event.target.matches('.cell-item')) {
        event.target.style.backgroundColor = randomColor(HSLLightness);
        HSLLightness-=10;

        if (HSLLightness <=0) HSLLightness = 100;
	}
}

function randomColor(lightness)
{
    color = 'hsl('+Math.round(Math.random()*360) + ',' + '90%' + ','+ lightness + '%' + ')';

     return color;
}

function createGrid(dimension = 16){
    // If we already have a grid, remove it first
    if (grid.childElementCount) {
        grid = clearGrid();
    }

    let rows = cols = dimension;
    let cell;

    //Define the rows and columns of the grid
    grid.style.gridTemplateColumns = "";
    grid.style.gridTemplateRows = "";

    for (let r = 1; r < rows; r++){
        grid.style.gridTemplateRows += " auto "
    }

    for (let c = 1; c < cols; c++){
        grid.style.gridTemplateColumns += " auto "
    }

    // Create the cells of the grid and append them to DOM
    for (r = 1; r < rows; r++){
        for( c = 1; c < cols; c++){
            cell = document.createElement('div');

            cell.id = "cell" + r + c;
            cell.className = "cell-item"

            // Attach the cell to the appropriate row and column of the grid
            cell.style.gridColumn = c;
            cell.style.gridRow = r;

            grid.appendChild(cell);
        }
    }
}

function clearGrid(){
    // Remove the grid
    document.querySelector('div').remove();

    body = document.querySelector('body');

    //Create a new, blank grid and add it to the DOM
    newgrid = document.createElement('div');
    newgrid.id = "container";
    body.append(newgrid);

    return newgrid;
}
//============================================



//==========MAIN==============================
//let colorList = ['Purple', 'Green', 'Blue', 'Red', 'Orange', 'Yellow'];
let HSLLightness = 100;

//Create a 16x16 grid of square divs
grid = document.querySelector('div');
createGrid();

// Event listener that allows us to 'draw' in the grid
document.addEventListener('mouseover', changeCellColor, false);

// Event listener that clears the grid
let button = document.querySelector('#clear-button');

button.addEventListener('click', function(e){
    dimension = prompt("How wide shall we make your etch-a-sketch?");
    createGrid(dimension);
  })
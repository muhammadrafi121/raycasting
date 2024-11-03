const GRID_SIZE = 40;

let gridCols, gridRows;

let grid = [];

let player;

function setup() {
    createCanvas(640, 480);

    gridCols = width / GRID_SIZE;
    gridRows = height / GRID_SIZE;

    for (let i = 0; i < gridCols; i++) {
        let yGrid = [];
        for (let j = 0; j < gridRows; j++) {
            if ((i == 0 && j == 0) || (i == gridCols - 1 && j == gridRows - 1)) {
                yGrid.push(0);
            } else {
                if (Math.random() > 0.85) {
                    yGrid.push(1);
                } else {
                    yGrid.push(0);
                }
            }
        }
        grid.push(yGrid);
    }

    player = createVector(GRID_SIZE / 2, GRID_SIZE / 2);

    // angleMode(DEGREES);
    // player.setHeading(PI);
}

function draw() {
    background(100);

    drawGrid();

    if (keyIsDown(87)) {
        player.add(createVector(0, -1));
    } else if (keyIsDown(83)) {
        player.add(createVector(0, 1));
    } 
    
    if (keyIsDown(LEFT_ARROW)) {
        player.setHeading(0.001);
        rotate(player.heading());
    } else if (keyIsDown(RIGHT_ARROW)) {
        player.setHeading(-0.001);
        rotate(player.heading());
    }
    
    fill(255, 0, 0);
    noStroke();
    ellipse(player.x, player.y, GRID_SIZE / 2, GRID_SIZE / 2);
}

function drawGrid() {
    for (let i = 0; i < gridCols; i++) {
        stroke(255);
        line(i * GRID_SIZE, 0, i * GRID_SIZE, height);
    }

    for (let i = 0; i < gridRows; i++) {
        stroke(255);
        line(0, i * GRID_SIZE, width, i * GRID_SIZE);
    }

    for (let i = 0; i < gridCols; i++) {
        for (let j = 0; j < gridRows; j++) {
            // console.log(i, j, grid[i][j]);
            
            if (grid[i][j] == 1) {
                fill(0, 255, 0);
                noStroke();
                rect(i * GRID_SIZE, j * GRID_SIZE, GRID_SIZE);
            }
        }
    }
}
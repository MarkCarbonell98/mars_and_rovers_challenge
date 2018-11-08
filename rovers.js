let actualPosition, x1, x2, direction, leftCount = 0, rightCount = 0, newDirection;
const data = {
    dimensions: 5 * 5,
    rovers: {
        positions: ["1 2 N", "3 3 E"], 
        paths: ["LMLMLMLMM", "MMRMMRMRRM"],
        trayectory: [
            {
                rover1: [],
            },
            {
                rover2: [],
            }
        ]
    }
}
const directions = ["N", "W", "S", "E"];
const leftDirections = ["W", "S", "E", "N"];
const rightDirections = ["E", "N", "W", "S"];
const convertStringIntoCoordinates = str => {
    x1 = parseInt(str[0]);
    x2 = parseInt(str[2]);
    direction = str[4];
}


const calculateFinalDirection = str => {
    str.split('').map(c => c === "L" ? leftCount++ : c === "R" ? rightCount++ : null);
}

const calculateRest = number => {
    if(number % directions.length !=== 0) {
        rest = number % directions.length;
    } else {
        rest = 0;
    }
}

convertStringIntoCoordinates(data.rovers.positions[0]);
calculateFinalDirection(data.rovers.paths[0]);
calculateRest(leftCount);


const calculateNewPositionNotDef = string => {
    string.split("").map(c => {
        c === "L" && direction === "N" ?  newDirection = "W" : null;
        direction = newDirection;
        newDirection = null;
        c === "L" && direction === "W" ? newDirection = "S" : null;
        direction = newDirection;
        newDirection = null;
        c === "L" && direction === "S" ? newDirection = "E" : null;
        
        c === "L" && direction === "E" ? newDirection = "N" : null;
        
        c === "R" && direction === "N" ? newDirection = "E" : null;
        c === "R" && direction === "W" ? newDirection = "N" : null;
        c === "R" && direction === "S" ? newDirection = "W" : null;
        c === "R" && direction === "E" ? newDirection = "S" : null;

    })
}

const determineNextDirection = (leftOrRight, actualDirection, nextDirection) => {

}



























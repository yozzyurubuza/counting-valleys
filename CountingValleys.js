'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function () {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'countingValleys' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER steps
 *  2. STRING path
 */

function countingValleys(steps, path) {
    var altitude = 0;
    var valleyCount = 0;
    var inValley = false;

    for (var i = 0; i < path.length; i++) {
        var currentStep = path[i];

        console.log("currentStep: " + currentStep);


        if (currentStep === 'U') {
            altitude++;
        }
        else if (currentStep === 'D') {
            altitude--;

        }

        console.log("currentAltitude: " + altitude);

        if (altitude < 0 && inValley === false) {
            inValley = true;
            valleyCount++;
        }
        else if (altitude === 0 && inValley === true) {
            inValley = false;

        }

        console.log("valleyCount: " + valleyCount);
        console.log("--------------------");

    }

    return valleyCount;


}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const steps = parseInt(readLine().trim(), 10);

    const path = readLine();

    const result = countingValleys(steps, path);

    ws.write(result + '\n');

    ws.end();
}

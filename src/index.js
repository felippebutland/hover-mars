import * as readline from "readline";
import { Rover } from './module/rover.js';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let rover;
let inputCount = 1;
let output;

rl.on('line', function(data) {
    switch (inputCount) {
        case 1:
            const fieldSplit = splitFields(data);
            rover = new Rover(fieldSplit[0], fieldSplit[1]);
            inputCount++;
            break;
        case 2:
            callPutPosition(data);
            break;
        case 3:
            callPositionShow(data);
            break;
        case 4:
            callPutPosition(data);
            break;
        case 5:
            callRun(data);
            console.log(output);
            console.log(callPositionShow());
            process.exit();
    }

    function splitFields(data) {
        return data.split(' ');
    }

    function callPutPosition(data) {
        const fieldSplit = splitFields(data);
        rover.putPosition(fieldSplit[0], fieldSplit[1], fieldSplit[2]);
        inputCount++;
    }

    function callPositionShow(data) {
        if (data) callRun(data);
        output = rover.positionShow();
        inputCount++;
        return output;
    }

    function callRun(data) {
        rover.run(data);
    }
})
const fs = require('fs');

console.time("challenge");
var floor = 0;
var basement_entered = false;
var moves = 0;

const stream = fs.createReadStream("./input.txt", {
    encoding: 'utf8',
    fd: null,
});

stream.on('readable', function() {
    var char;
    while (null !== (char = stream.read(1))) {
        if (char == "(") {
            floor++;
            if (!basement_entered) {
                moves++;
            }
        } else if (char == ")") {
            floor--;
            
            if(!basement_entered) {
                moves++;
                if(floor == -1) {
                    basement_entered = true;
                }
            }
        } else {
            throw "Invalid character in input.txt";
        }
    }
});

stream.on('end', function() {
    console.log(floor);
    console.log(moves);
    console.timeEnd("challenge");
})

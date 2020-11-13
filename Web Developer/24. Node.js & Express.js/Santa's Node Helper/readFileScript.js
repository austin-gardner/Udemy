const fs = require('fs');

function question1() {
    fs.readFile('./input.txt', (err, data) => {
        console.time('question 1');
        const directions = data.toString();
        const directionsArray = directions.split('');
        const final_floor = directionsArray.reduce((floor, char) => {
            if (char === '(') {
                return floor ++;
            } else if (char === ')') {
                return floor --;
            }
        }, 0);
        console.timeEnd('question 1');
        console.log('final floor: ', final_floor);
    })
}

function question2() {
    fs.readFile('./input.txt', (err, data) => {
        console.time('question 2');
        const directions = data.toString();
        const directionsArray = directions.split('');
        let floor = 0;
        let counter = 0;
        const answer = directionsArray.some((char) => {
            if (char === '(') {
                floor ++;
            } else if (char === ')') {
                floor --;
            }
            counter ++;
            return floor < 0;
        })
        console.timeEnd('question 2');
        console.log('basement entered at: ', counter);
    })
}

question1();
question2();
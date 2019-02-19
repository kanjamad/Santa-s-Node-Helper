const fs = require('fs');
// 1 what floor do the instructions take Santa?
// (--> should go UP 1 floor
// )--> should go Down 1 floor
function question1(){
    fs.readFile('./santa.txt', (err, data) => {
        console.time('Q1 = santa-time');
        const directions = data.toString();
        const directionsArray = directions.split('');
        const answer = directionsArray.reduce((acc, currentValue) => {
            if (currentValue == '('){
                return acc += 1
            } else if (currentValue === ')'){
                return acc -= 1
            }
        }, 0)
        console.timeEnd('Q1 = santa-time');
        console.log('floor:', answer);
    })
}

question1();

// 2 when does santa first enter the basement?
function question2(){
    fs.readFile('./santa.txt', (err, data) => {
        console.time('Q2 = santa-time');
        const directions = data.toString();
        const directionsArray = directions.split('');
        let accumulator = 0
        let counter = 0
        const answer = directionsArray.some((currentItem) => {
            if (currentItem== '('){
                accumulator += 1
            } else if (currentItem === ')'){
                accumulator -= 1
            }
            counter ++
            return accumulator < 0;
        })
        console.timeEnd('Q2 = santa-time');
        console.log('basement entered at:', counter);
    })
}

question2()
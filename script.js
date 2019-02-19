const fs = require('fs');
// 1 what floor do the instructions take Santa?
// (--> should go UP 1 floor
// )--> should go Down 1 floor

function question1(){
    fs.readFile('./santa.txt', (err, data) => {
        console.time('santa-time');
        const directions = data.toString();
        const directionsArray = directions.split('');
        const answer = directionsArray.reduce((acc, currentValue) => {
            if (currentValue == '('){
                return acc += 1
            } else if (currentValue === ')'){
                return acc -= 1
            }
        }, 0)
        console.timeEnd('santa-time');
        console.log('floor:', answer);
    })
}

question1();


// 2 when does santa first enter the basement?
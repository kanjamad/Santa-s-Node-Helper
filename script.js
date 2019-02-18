const fs = require('fs');
// 1 what floor do the instructions take Santa?
// (--> should go UP 1 floor
// )--> should go Down 1 floor

function question1(){
    fs.readFile('./santa.txt', (err, data) => {
        const directions = data.toString();
        console.log(directions);
    })
}

question1();


// 2 when does santa first enter the basement?
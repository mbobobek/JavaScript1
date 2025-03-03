const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Sonni kiriting: ", (num) => {
    const number = parseFloat(num);
    console.log("Kvadrati:", number ** 2);
    console.log("Kubi:", number ** 3);
    rl.close();
});

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Birinchi sonni kiriting: ", (num1) => {
    rl.question("Ikkinchi sonni kiriting: ", (num2) => {
        const sum = parseFloat(num1) + parseFloat(num2);
        console.log("Yig'indi:", sum);
        rl.close();
    });
});

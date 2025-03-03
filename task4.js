const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Tug'ilgan yilingizni kiriting: ", (year) => {
    const currentYear = new Date().getFullYear();
    const age = currentYear - parseInt(year);
    console.log("Sizning yoshingiz:", age);
    rl.close();
});

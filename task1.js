const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ismingizni kiriting: ", function(ism) {
    rl.question("Yoshingizni kiriting: ", function(yosh) {
        console.log(`Sizning ismingiz ${ism} va yoshingiz ${yosh}`);
        rl.close();
    });
});

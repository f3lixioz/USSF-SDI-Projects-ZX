const yargs = require('yargs');

const options = yargs
 .usage("Usage: --move=<usrMv>")
 .option("move", { alias: "usrMv", describe: "Your move", type: "string", demandOption: true })
 .argv;

//play game of RPS
console.log("Let's play a game of RPS");

//start game
//take usr input
class Player {
    constructor () {
        this.moves = ['rock', 'paper', 'scissors']
    }   
    mkMv (input) {
        //random computer input generated here
        let cpuMv = this.moves[Math.floor(Math.random() * 3)];
        console.log(`Player plays ${input}`);
        console.log(`Computer plays ${cpuMv}`);
        
        if (input === 'invalid') {
            return 'Your input is invalid';
        }   else {
                if (input === cpuMv) return 'Tie Game'
                else if (input === 'rock' && cpuMv === 'scissors') return `Player Wins!`
                else if (input === 'paper' && cpuMv === 'rock') return `Player Wins!`
                else if (input === 'scissors' && cpuMv === 'paper') return `Player Wins!`
                else return 'Computer Wins!'
            }
        }   
}

const player1 = new Player().mkMv('rock')

console.log(player1)

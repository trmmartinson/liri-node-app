require("dotenv").config();
var fs = require('fs');
var bands = require("./concertThis.js")
var movie = require("./movieThis.js");
var spotify = require("./spotify.js");

let cmd = process.argv[2];
let payload = process.argv[3];

if (cmd == "do-what-it-says") {
    fs.readFile('random.txt', 'utf8', function (err, contents) {
        theSplit = contents.split(' ');
        cmd = theSplit[0];
        theSplit.shift();
        payload = theSplit.join(" ");
        processCommand(cmd, payload);
    });
}
else processCommand(cmd, payload);

function processCommand(command, what) {
    switch (command) {
        case "movie-this":
            movie.movieThis(what);
            break;
        case "concert-this":
            if (what === undefined)
              console.log("You must provide a band name!");
            else
                bands.bandsInTown(what);
            break;
        case "spotify-this-song":
            spotify.spotify(what);
            break;
        default:
            console.log("invalid command, try movie-this, concert-this or spotify-this-song");
            console.log('followed by what you are looking up');
    }

}

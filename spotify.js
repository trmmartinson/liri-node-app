
require('dotenv').config()
var Spotify = require("node-spotify-api")
var spotify = new Spotify({
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
});
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);

function spotifyLookup(title = "the sign ace of base") {
  
  spotify.search({ type: 'track', query: title }, function (err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
    data.tracks.items.map((line, idx) => {

      console.log("\n\n" + parseInt(idx + 1) + "." + "Title:" + line.name + "\n    Album: " + line.album.name + "\n    URL:" + line.album.external_urls.spotify);
      console.log("\tArtists:");
      line.album.artists.map((artist, idx2) => {
        console.log("\t\t" + artist.name + "\n");
      });
    });
  });
}
module.exports = { spotify: spotifyLookup }
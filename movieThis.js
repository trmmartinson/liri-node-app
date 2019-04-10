var axios = require("axios");
function movieThis(title = "Mr. Nobody") {
  title = title.replace(/ /g, "+");
  axios.get("http://www.omdbapi.com/?t=" + title + "&y=&plot=short&apikey=trilogy")
    .then(function (response) {
      console.log("Title: " + response.data.Title);
      let reg = /(19|20)\d{2}/;
      console.log("Year Released:" + reg.exec(response.data.Released)[0]);
      console.log("IMDB Rating:" + response.data.imdbRating);
      //* Rotten Tomatoes Rating of the movie, IF IT EXISTS
      response.data.Ratings.find(function (element) {
        if (element.Source == "Rotten Tomatoes")
          console.log("Rotton Tomatoes:" + element.Value);
      }
      );
      console.log("Country:" + response.data.Country);
      console.log("Language:" + response.data.Language);
      console.log("Plot:" + response.data.Plot);
      console.log("Actors:" + response.data.Actors);
    })
    .catch(function (error) {
      console.log(error);
    });

}
module.exports = { movieThis: movieThis }
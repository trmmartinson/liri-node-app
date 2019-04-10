// temprary test
var moment = require('moment'); 
var axios = require('axios'); 

function bandsInTown(theBand) {
    var getString = 'https://rest.bandsintown.com/artists/' + theBand + '/events?app_id=codingbootcamp';
    var holdDate;
    axios.get(getString)
    .then(function (response) {
      holdDate = moment(response.data[1].datetime);
      response.data.map((line, idx) => {
          console.log(  parseInt(idx) + 1   + ". " + line.venue.name + ", " + line.venue.city + " " + moment(line.venue.datetime).format("MM/DD/YYYY")   );
      });
    })
    .catch(function (error) {
      console.log(error);
    });
}
module.exports =  { bandsInTown:bandsInTown};

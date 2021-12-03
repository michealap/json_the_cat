const request = require('request');
// allows for user input in command line

const fetchBreedDescription = function(breedName, callback) {
  const URL = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(URL, (error, resp, body) => {
  //
    if (error) {
      return callback(`Failed to request details: ${error}`, null);
    }
    // turns string into object
    const data = JSON.parse(body);
    //console.log(data);
    // locates first entry in the data array  and saves it in breed variable
    const breed = data[0];
    //prints description is breed include in command line, else fails
    if (breed) {
      callback(null, breed.description);
    } else {
      callback(`Failed to find breed ${breedName}`, null);
    }
  });
};

module.exports = { fetchBreedDescription };
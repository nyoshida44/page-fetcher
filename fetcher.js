// args to allow command line arguments
const args = process.argv;
const htmlRequest = args.slice(2);
const URL = htmlRequest[0];
const localFilePath = htmlRequest[1];

// require the request moduel
const request = require('request');

// request the data or body from URL
request(URL, (error, response, body) => {
  
  // require the fs module
  const fs = require('fs');

  // write body from request to the localpath specified
  fs.writeFile(localFilePath, body, err => {
    if (err) {
      console.error(err);
      return;
    }

    // get the stats of the file we just wrote
    fs.stat(localFilePath, (err, stats) => {
      if (err) {
        console.error(err);
        return;
      }

      // console log statement to notify user that file was written and size
      console.log(`Downloaded and saved ${stats.size} bytes to file.txt`);
    });
  });
});
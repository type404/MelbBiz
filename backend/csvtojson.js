const CSVToJSON = require("csvtojson");
const fs = require("fs");

CSVToJSON()
  .fromFile("bizetb.csv")
  .then((biz) => {
    fs.writeFile("biz.json", JSON.stringify(biz), (err) => {
      if (err) {
        throw err;
      }
      console.log("JSON array is saved.");
    });
  })
  .catch((err) => {
    console.log(err);
  });

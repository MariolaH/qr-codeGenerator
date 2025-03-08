/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";
// const fs = require("fs");

inquirer
  .prompt([
    {
      name: "website",
      message: "Please enter a URL",
    },
  ])
  .then((answers) => {
    console.log(answers)
    const url = answers.website;
    var qr_png = qr.image(url);
    qr_png.pipe(fs.createWriteStream("qr_code.png"));

    fs.writeFile("url.txt", url, (err) => {
      if (err) throw err;
      console.log("The file has been saved!");
    });
  })
  .catch((error) => {
    console.error("An error occurred:", error);
  });

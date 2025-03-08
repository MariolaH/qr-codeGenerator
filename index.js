import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

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

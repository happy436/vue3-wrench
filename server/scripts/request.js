/* imports */

const serveFile = require("./serve");
const { getListFiles } = require("./path");
const express = require("express");

const app = express();
/* folder path */

const standartsPath = "./files/standards/";
const imagePath = "./files/images/";

/* URL path */

const standartsURL = "/library/standards/";
const imageURL = "/images/";

/* file arrays */

let standardsFiles = [];
let imageFiles = [];

const init = async () => {
    try {
        standardsFiles = await getListFiles(standartsPath, standartsURL);
        imageFiles = await getListFiles(imagePath, imageURL);
    } catch (error) {
        console.error(`Error getting files: ${error}`);
        process.exit(1);
    }

    console.log("Files loaded successfully");
};

const listener = (req, res) => {
    for (const { url, path: filePath } of imageFiles) {
        if (req.url === url) {
            serveFile(req, res, filePath);
            return;
        }
    }

    for (const { url, path: filePath } of standardsFiles) {
        if (req.url === url) {
            serveFile(req, res, filePath);
            return;
        }
    }

    res.statusCode = 404;
    res.end();
};

app.get("/api/url/standards", async (req, res) => {
    res.json(standardsFiles);
});

app.get("/api/url/images", async (req, res) => {
    res.json(imageFiles);
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
  });

module.exports = {
    init,
    listener,
};

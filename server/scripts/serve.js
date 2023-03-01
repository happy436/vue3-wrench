const { createReadStream } = require("fs");
const getContentType = require("./contentTypes")

const serveFile = (req, res, filePath) => {
  const fileStream = createReadStream(filePath);

  fileStream.on("error", (err) => {
    console.error(`Error reading file ${filePath}: ${err}`);
    res.statusCode = 500;
    res.end();
  });

  fileStream.on("open", () => {
    res.writeHead(200, {
      "Content-Type": getContentType(filePath),
    });
    fileStream.pipe(res);
  });

  fileStream.on("close", () => {
    console.log(`File ${filePath} served successfully`);
  });
};

module.exports = serveFile;
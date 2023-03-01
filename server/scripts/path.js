const fs = require("fs");
const { promisify } = require("util");
const readdir = promisify(fs.readdir);

async function getListFiles(folderPath, baseUrl) {
  try {
    const files = await readdir(folderPath);
    const listFiles = files.map((file) => ({
      path: folderPath + file,
      url: baseUrl + file.split(".")[0],
    }));
    return listFiles;
  } catch (err) {
    console.error(err);
    return [];
  }
}

module.exports = { getListFiles };

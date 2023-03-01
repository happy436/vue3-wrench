const fs = require("fs");
const path = require("path");
const student = require("./data/one");
var http = require("http");
/* const pipe = require("./images/pipe.PNG") */

/* создание ссылки для картинки */



/* http.createServer((req, res) => {
    if (req.url === "/images/pipe") {
      res.statusCode = 200;
  
      res.setHeader("Content-Type", "image/jpeg");
  
      fs.readFile("./images/pipe.PNG", (err, image) => {
        res.end(image);
      });
    }
  }).listen(3000); */

/* создание txt файла со строкой "WORK" */

/* fs.writeFile("one.txt", "work", (err) => {
    if(err) console.log("error")
}) */

/* 1 JSON запись */

const man = {
    name: "Kate",
    age: 22,
    department: "History",
    sex: "male",
};

/* fs.writeFile("one.json", JSON.stringify(man), (err) => {
    if(err) console.log("error")
}) */

/* 2 чтение JSON */

/* console.log(student) */

function writeJSON(path, json, data) {
    json.push(data);
    fs.writeFile(path, JSON.stringify(json), (err) => {
        if (err) console.log("error", err);
    });
}

/* student.push(man)

fs.writeFile("one.json", JSON.stringify(student), (err) => {
    if(err) console.log("error", err)
}) */

/* writeJSON("./data/one.json", student, man) */

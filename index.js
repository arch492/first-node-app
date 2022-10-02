const http = require("http");
const fs = require("fs");

const args = require('yargs').argv;

let homeContent = "";
let projectContent = "";
let registerationContent = "";

fs.readFile("home.html", (err, home) => {
  if (err) {
    throw err;
  }
  homeContent = home;
});

fs.readFile("project.html", (err, project) => {
  if (err) {
    throw err;
  }
  projectContent = project;
});

fs.readFile("registeration.html", (err, registeration) => {
  if (err) {
    throw err;
  }
  registerationContent = registeration;
});

http
  .createServer((request, response) => {
    let url = request.url;
    response.writeHeader(200, { "Content-Type": "text/html" });
    switch (url) {
      case "/project":
        response.write(projectContent);
        response.end();
        break;
      case "/registeration":
        response.write(registerationContent);
        response.end();
        break;

      default:
        response.write(homeContent);
        response.end();
        break;
    }
  })
  .listen(args.port);
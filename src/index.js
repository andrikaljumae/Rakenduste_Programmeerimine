const homepage = require("./homepage.js");
const itempage = require("./itempage.js");


console.log("hey");


window.addEventListener("load", () =>{
    homepage.setup();
    itempage.setup();
});
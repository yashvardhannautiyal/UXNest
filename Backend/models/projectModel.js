const mongoose = require("mongoose");

mongoose.connect('mongodb://127.0.0.1:27017/codeIDE');

const projectSchema = new mongoose.Schema({
    createdBy: String,
    date:{
        type: Date,
        default: Date.now
    },
    htmlCode:{
        type: String,
        default: `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Hello world</title>
  </head>
  <body>
    <p>hello world</p>
  </body>
</html>
`
},

    cssCode:{
        type: String,
        default: `body{
        margin: 0; 
        padding: 0;
        box-sizing: border-box;
        }`
    },

    jsCode:{
        type: String,
        default: `console.log("Hello world!")`
    }
})

module.exports = mongoose.model("Project", projectSchema);
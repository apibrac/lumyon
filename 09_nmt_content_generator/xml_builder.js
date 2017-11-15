var fs = require('fs');
var libxml = require("libxmljs");

exports.newFile = function(name){
  if(!name) console.log("newFile() needs a name!")
  return {
    content: new libxml.Document(),
    save(){
      fs.writeFile(
        "./" + name,
        this.content.toString(),
        err=> console.log(err || "The file was saved!")
      );
    }
  }
}


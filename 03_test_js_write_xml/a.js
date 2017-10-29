var fs = require('fs');
var libxml = require("libxmljs");

var doc = new libxml.Document();
  doc.node('root')
    .node('child').attr({foo: 'bar'})
      .node('grandchild', 'grandchild content').attr({baz: 'fizbuzz'})
    .parent()
  .parent()
    .node('sibling', 'with content!');

fs.writeFile("./yolo", doc.toString(), function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
});

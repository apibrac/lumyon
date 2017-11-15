var { newFile } = require('./xml_builder.js');
var { nmtFile } = require('./build_nmt.js');

var file = newFile('twins.nmt');

nmtFile(file)
  .layer({file: "twins.png"})
    .createContent()
      .addNormedRectangle({x1: 1000, y1: 1000, x_max: 1000, y_max: 1000})
//      .addRectangle({x1: 1942, y1: 2046});

file.save();

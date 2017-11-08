var { newFile } = require('./xml_builder.js');
var { Element } = require("libxmljs");

function nmtFile(xmlFile){
  return xmlFile.content
    .node('animata').attr({version: '0.004'});
}

Object.assign(Element.prototype, {
  addLayer({file, name = file.slice(0, -4)}){
    return this
      .node('layer').attr({name, x: 0, y: 0, z: 0})
        .node('texture').attr({location: file, x: 0, y: 0, scale: 0.2})
      .parent()
        .node('mesh')
          .addRectangle({x1: 1942, y1: 2046})
        .parent()
      .parent()
    .parent();
  },

  addRectangle({x0 = 0, y0 = 0, x1, y1}){
    return this
      .node('vertices')
        .addVertex({x: x0, y: y0, u: 0, v: 0})
        .addVertex({x: x0, y: y1, u: 0, v: 5})
        .addVertex({x: x1, y: y1, u: 5, v: 5})
        .addVertex({x: x1, y: y0, u: 5, v: 0})
      .parent()
        .node('faces')
          .node('face').attr({v0: 0, v1: 3, v2: 2})
        .parent()
          .node('face').attr({v0: 0, v1: 1, v2: 2})
        .parent()
      .parent();
  },

  addVertex(opts){
    return this
      .node('vertex').attr({selected: 0, ...opts})
    .parent();
  }
})

var file = newFile('loyal.nmt');

nmtFile(file)
  .addLayer({file: "loyal.png"})

file.save();

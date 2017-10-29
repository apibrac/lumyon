var { newFile } = require('./xml_builder.js');

function nmtFile(xmlFile){
  return new nmtNode(
    file.content
      .node('animata').attr({version: '0.004'})
  )
}

function nmtNode(xmlNode){
  this.node = xmlNode;
}

nmtNode.prototype = {
  addLayer({file, name = file.slice(0, -4)}){
    var mesh = this.node
      .node('layer').attr({name, x: 0, y: 0, z: 0})
        .node('texture').attr({location: file, x: 0, y: 0, scale: 0.2})
      .parent()
        .node('mesh')
    new nmtNode(mesh).addRectangle({x1: 1942, y1: 2046});
  },

  addRectangle({x0 = 0, y0 = 0, x1, y1}){
    this
      .addVertex({x: x0, y: y0, u: 0, v: 0})
      .addVertex({x: x0, y: y1, u: 0, v: 5})
      .addVertex({x: x1, y: y1, u: 5, v: 5})
      .addVertex({x: x1, y: y0, u: 5, v: 0})
    this.node
      .node('faces')
        .node('face').attr({v0: 0, v1: 3, v2: 2})
      .parent()
        .node('face').attr({v0: 0, v1: 1, v2: 2});
  },

  addVertex(opts){
    this.node
      .node('vertex').attr({selected: 0, ...opts});
    return this;
  }
}

var file = newFile('loyal.nmt');

nmtFile(file)
  .addLayer({file: "loyal.png"})

file.save();

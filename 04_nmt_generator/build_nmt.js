var { newFile } = require('./xml_builder.js');
var { Element } = require("libxmljs");
var { mesh } = require('./mesh_builder.js');

function nmtFile(xmlFile){
  return xmlFile.content
    .node('animata').attr({version: '0.004'});
}

Object.assign(Element.prototype, {
  layer({file, name = file.slice(0, -4)}){
    return this
      .node('layer').attr({name, x: 0, y: 0, z: 0})
        .node('texture').attr({location: file, x: 0, y: 0, scale: 0.2})
      .parent();
  },

  addLayer(opts){
    return this
      .layer(opts)
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
      .addFace(0, 3, 2)
      .addFace(0, 1, 2)
    .parent();
  },

  addVertex(opts){
    return this
      .node('vertex').attr({selected: 0, ...opts})
    .parent();
  },

  addFace(v0, v1, v2){
    return this
      .node('face').attr({v0, v1, v2})
    .parent()
  },

  createMesh(){
    let newMesh = this.node('mesh');
    return new mesh(newMesh.node('vertices'), newMesh.node('faces'));
  }
})

var file = newFile('loyal.nmt');

nmtFile(file)
  .layer({file: "loyal.png"})
    .createMesh()
      .addNormedRectangle({x1: 1000, y1: 1000, x_max: 2000, y_max: 2000})
      .addNormedRectangle({x0: 1000, x1: 2000, y1: 1000, x_max: 2000, y_max: 2000});
//      .addRectangle({x1: 1942, y1: 2046});

file.save();

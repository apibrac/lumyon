var { newFile } = require('./xml_builder.js');

var file = newFile('loyal.nmt');

var root = file.content
  .node('animata').attr({version: '0.004'});

addLayer(root, {file: "loyal.png"});

file.save();

function addLayer(node, {file, name = file.slice(0, -4)}){
  addRectangle(
    node
      .node('layer').attr({name, x: 0, y: 0, z:0})
        .node('texture').attr({location: file, x: 0, y: 0, scale: 0.2})
      .parent()
        .node('mesh'),
    {x1: 1942, y1: 2046}
  );
}

function addRectangle(node, {x0 = 0, y0 = 0, x1, y1}){
  node
    .node('vertices')
      .node('vertex').attr({x: x0, y: y0, u: 0, v: 0, selected: 0})
    .parent()
      .node('vertex').attr({x: x0, y: y1, u: 0, v: 5, selected: 0})
    .parent()
      .node('vertex').attr({x: x1, y: y1, u: 5, v: 5, selected: 0})
    .parent()
      .node('vertex').attr({x: x1, y: y0, u: 5, v: 0, selected: 0})
    .parent()
  .parent()
    .node('faces')
      .node('face').attr({v0: 0, v1: 3, v2: 2})
    .parent()
      .node('face').attr({v0: 0, v1: 1, v2: 2});
}

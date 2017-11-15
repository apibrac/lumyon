var { Element } = require("libxmljs");
var { content } = require('./nmt_content.js');

exports.nmtFile = nmtFile;

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

  attachVertex(opts){
    return this
      .node('vertex').attr({d: 0, w: 1, ...opts})
    .parent();
  },

  addJoint(opts){
    this
      .node('joint')
        .attr(opts)
      .parent();
    return this;
  },

  addFace(v0, v1, v2){
    return this
      .node('face').attr({v0, v1, v2})
    .parent()
  },

  createContent(){
    let mesh = this.node('mesh');
    let skeleton = this.node('skeleton');
    return new content(
      mesh.node('vertices'),
      mesh.node('faces'),
      skeleton.node('joints'),
      skeleton.node('bones')
    );
  },

  newLayer(args){
    return this.layer(args).createContent();
  }
})

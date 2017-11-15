
exports.content = content;

function content(vertices, faces, joints, bones){
  Object.assign(this, {
    vertices,
    faces,
    joints,
    bones,
    v_index: 0
  })
}

content.prototype = {
  addRectangle({x0 = 0, y0 = 0, x1, y1, u0 = 0, u1, v0 = 0, v1}){
    let v = this.v_index;

    this.vertices
      .addVertex({x: x0, y: y0, u: u0, v: v0})
      .addVertex({x: x0, y: y1, u: u0, v: v1})
      .addVertex({x: x1, y: y1, u: u1, v: v1})
      .addVertex({x: x1, y: y0, u: u1, v: v0});

    this.faces
      .addFace(v + 0, v + 3, v + 2)
      .addFace(v + 0, v + 1, v + 2);

    this.v_index = v + 4;

    return this;
  },
  addNormedRectangle({x0 = 0, y0 = 0, x1, y1, x_max, y_max}){
    return this.addRectangle({x0, y0, x1, y1, u0: x0/x_max, v0: y0/y_max, u1: x1/x_max, v1: y1/y_max});
  }
}

var { rotateVertex } = require('./bone_rotation.js');

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

function coordOf({x, y}){
  return {x, y};
}

content.prototype = {
  withJoints(joints){
    this.current_joints = joints;
    return this;
  },

  saveJoints(){
    this.current_joints.forEach(joint=>{
      this.joints.addJoint(joint)
    })
  },

  addBone(args){
    if(!args.size) args = {
      size: this.sizeBetweenJoints(args.j0, args.j1),
      ...args
    }
    this.current_bone = this.bones
      .node('bone')
        .attr(args)
      .node('attached')
    this.saveBoneCoord(args);
    return this;
  },

  sizeBetweenJoints(a, b){
    a = this.current_joints[a]
    b = this.current_joints[b]
    return Math.sqrt((a.x - b.x)*(a.x - b.x) + (a.y - b.y)*(a.y - b.y))
  },

  saveBoneCoord({j0, j1}){
    this.current_bone_coord = {
      j0: coordOf(this.current_joints[j0]),
      j1: coordOf(this.current_joints[j1])
    }
  },

  addRectangle({x0 = 0, y0 = 0, x1, y1, u0 = 0, u1, v0 = 0, v1}){
    let v = this.v_index;

    this.current_origin = {x0, y0};

    this
      .addAttachedVertice({x: x0, y: y0, u: u0, v: v0})
      .addAttachedVertice({x: x0, y: y1, u: u0, v: v1})
      .addAttachedVertice({x: x1, y: y1, u: u1, v: v1})
      .addAttachedVertice({x: x1, y: y0, u: u1, v: v0});

    this.faces
      .addFace(v + 0, v + 3, v + 2)
      .addFace(v + 0, v + 1, v + 2);

    return this;
  },

  addAttachedVertice({x, y, u, v}){
    this.vertices
      .addVertex({x, y, u, v});
    const {x0, y0} = this.current_origin;
    x = x - x0;
    y = y - y0;
    this.current_bone
      .addVertex({id: this.v_index, w: 0.1, d: 500, ...rotateVertex(this.current_bone_coord, {x, y})});
    this.v_index = this.v_index + 1;
    return this;
  }
}

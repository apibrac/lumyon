var { newFile } = require('./xml_builder.js');
var { nmtFile } = require('./build_nmt.js');

var joints = [
  {x: 373.546997, y: 504.137451},
  {x: 573.421814, y: 511.212677},
  {x: 215.090378, y: 111.936630},
  {x: 589.313232, y: 306.688446},
]

var file = newFile('twins.nmt');

nmtFile(file)
  .newLayer({file: "twins.png"})
    .withJoints(joints)
      .addBone({j0: 0, j1: 1, stiffness: 0.5, size: 200, radius: 0.5})
        .addRectangle({x1: 1942, y1: 2046, u1: 1, v1: 1})
      .saveJoints()
//    .addNormedRectangle({x1: 1000, y1: 1000, x_max: 1000, y_max: 1000})

file.save();

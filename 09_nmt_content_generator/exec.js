var { newFile } = require('./xml_builder.js');
var { nmtFile } = require('./build_nmt.js');
var { Rectangle } = require('./regular_split.js');

var joints = [
  {x: 373.546997, y: 604.137451},
  {x: 573.421814, y: 511.212677},
  {x: 215.090378, y: 111.936630},
  {x: 589.313232, y: 306.688446},
]

var subPart = new Rectangle({x: 2000, y: 3000})
  .split({col: 3, row: 4});

var file = newFile('twins.nmt');

nmtFile(file)
  .newLayer({file: "twins.png"})
    .withJoints(joints)
      .addBone({j0: 0, j1: 1})
        .addRectangle(subPart(1, 2))
      .addBone({j0: 2, j1: 3})
        .addRectangle(subPart(0, 1))
      .saveJoints()
//    .addNormedRectangle({x1: 1000, y1: 1000, x_max: 1000, y_max: 1000})

file.save();

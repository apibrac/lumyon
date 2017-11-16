var { newFile } = require('./xml_builder.js');
var { nmtFile } = require('./build_nmt.js');
var { Rectangle } = require('./regular_split.js');

var joints = [ { name: 'neck',
    x: '3689.715332',
    y: '369.187500',
    fixed: '0',
    selected: '0' },
  { name: 'torso',
    x: '3660.975342',
    y: '629.365540',
    fixed: '0',
    selected: '0' },
  { name: 'r_shoulder',
    x: '3498.682129',
    y: '381.608612',
    fixed: '0',
    selected: '0' },
  { name: 'l_shoulder',
    x: '3891.168457',
    y: '403.478607',
    fixed: '0',
    selected: '0' },
  { name: 'r_hip',
    x: '3538.670898',
    y: '874.901245',
    fixed: '0',
    selected: '0' },
  { name: 'l_hip',
    x: '3755.248779',
    y: '892.600952',
    fixed: '0',
    selected: '0' },
  { name: 'r_knee',
    x: '3498.700439',
    y: '1235.114380',
    fixed: '0',
    selected: '0' },
  { name: 'r_foot',
    x: '3450.854248',
    y: '1673.970337',
    fixed: '0',
    selected: '0' },
  { name: 'l_elbow',
    x: '3881.965088',
    y: '719.201355',
    fixed: '0',
    selected: '0' },
  { name: 'l_hand',
    x: '3850.040771',
    y: '1057.442505',
    fixed: '0',
    selected: '0' },
  { name: 'l_foot',
    x: '3809.380371',
    y: '1698.828369',
    fixed: '0',
    selected: '0' },
  { name: 'head',
    x: '3654.602051',
    y: '227.516327',
    fixed: '0',
    selected: '0' },
  { name: 'l_knee',
    x: '3793.011475',
    y: '1258.406250',
    fixed: '0',
    selected: '0' },
  { name: 'r_elbow',
    x: '3290.791748',
    y: '602.199036',
    fixed: '0',
    selected: '0' },
  { name: 'r_hand',
    x: '3388.517334',
    y: '927.415710',
    fixed: '0',
    selected: '1' } ]


var subPart = new Rectangle({x: 10000, y: 10000})
  .split({col: 2, row: 2});

var file = newFile('nimp.nmt');

nmtFile(file)
  .newLayer({file: "nimp.png"})
    .withJoints(joints)
      .addBone({j0: 0, j1: 1})
        .addRectangle(subPart(0, 0))
      .addBone({j0: 2, j1: 3})
        .addRectangle(subPart(0, 1))
      .addBone({j0: 4, j1: 5})
        .addRectangle(subPart(1, 0))
      .addBone({j0: 6, j1: 7})
        .addRectangle(subPart(1, 1))
      .saveJoints()
//    .addNormedRectangle({x1: 1000, y1: 1000, x_max: 1000, y_max: 1000})

file.save();

//d.root().childNodes().map(c=>Object.assign({}, ...c.attrs().map(a=>({[a.name()]: a.value()})).filter(({osc})=>!osc)))

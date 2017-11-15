
var file = newFile('test.nmt')

var JuxtapRectangle({size: {x: , y: }, row: , col: })

nmtFile(file)
  .newLayer({file: "image.png"})
    .withJoints(joints)
      .addBone({})
        .addRectangle()
      .addBone({})
        .addRectangle()
      .addBone({})
        .addRectangle()
    .withJoints(joints)
      .saveJoints()

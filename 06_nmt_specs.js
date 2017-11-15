{
  animata: {
    version: "Usually 0.004",
    layer: [{
      name: "layer name",
      x, y, z, alpha, scale, vis,
      texture: {
        location: "file name of texture",
        x, y, scale
      },
      mesh: {
        vertices: {
          vertex: [{
            x: "positionX UNUSED IF ATTACHED TO BONES",
            y: "positionY UIATB",
            u: "positionX relative à la taille max X de la texture",
            v: "positionY relative à Y_max(texture)"
            selected: false
          }]
        },
        faces: {
          face: [{
            v0: "vertex 1",
            v1: "vertex 2",
            v2: "vertex 3"
          }]
        }
      },
      skeleton: {
        joints: {
          joint: [{
            x, y, fixed, osc
            selected: false
          }]
        },
        bones: {
          bone: [{
            j0: "joint 1",
            j1: "joint 2",
            size: "Bone size",
            stiffness, lm, lmmin, lmmax, tempo, time, radius,
            selected: false,
            attached: {
              vertex: [{
                id: "vertex number",
                w: "vertex not linked if 0",
                ca: "positionX relative to the bone\
                  (direction from j0 to j1, origin at the middle)",
                sa: "positionY relative to the bone",
                d
              }]
            }
          }]
        }
      }
    }]
  }
}


exports.rotateVertex = rotateVertex;

function rotateVertex({j0, j1}, v){
  const
    c = j1.x - j0.x,
    s = j1.y - j0.y,
    j = Math.sqrt(c*c + s*s),
    x = 2*v.x - j0.x - j1.x,
    y = 2*v.y - j0.y - j1.y;
  return {
    ca: (x*c + y*s)/(2*j),
    sa: (y*c - x*s)/(2*j)
  }
}

console.log(rotateVertex({
  j0: {x: 215.090378, y: 111.936630},
  j1: {x: 589.313232, y: 306.688446}
}, {x: 384.090820, y: 1327.199829}))

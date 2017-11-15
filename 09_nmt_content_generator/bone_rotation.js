
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

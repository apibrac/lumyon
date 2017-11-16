
exports.Rectangle = Rectangle;

function Rectangle(args){
  this.split = (split_args) => (r, c) =>
    new (function({col, x, row, y, r, c}){
      this.u0 = c/col;
      this.u1 = (c+1)/col;
      this.x0 = this.u0 * x;
      this.x1 = this.u1 * x;
      this.v0 = r/row;
      this.v1 = (r+1)/row;
      this.y0 = this.v0 * y;
      this.y1 = this.v1 * y;
    })({...args, ...split_args, r, c});
}

export class Hitbox {
  constructor(ctx, x, y, s, color) {
    this.ctx = ctx
    this.x = x
    this.y = y
    this.w = s
    this.h = s
    this.color = color
    this.life = 300
  }

  render() {
    this.ctx.fillStyle = this.color
    this.ctx.fillRect(this.x, this.y, this.w, this.h)
  }

  getPoints() {
    return {
      top: {
        left: { x: this.x, y: this.y },
        right: { x: this.x + this.w, y: this.y },
      },
      bottom: {
        left: { x: this.x, y: this.y + this.h },
        right: { x: this.x + this.w, y: this.y + this.h },
      }
    }
  }

  colide(other) {
    const selfPoints = this.getPoints()
    const otherPoints = other.getPoints()

    if (
      (
        selfPoints.top.left.x >= otherPoints.top.left.x && selfPoints.top.left.x <= otherPoints.top.right.x &&
        selfPoints.top.left.y >= otherPoints.top.left.y && selfPoints.top.left.y <= otherPoints.bottom.left.y
      ) || (
        selfPoints.top.right.x >= otherPoints.top.left.x && selfPoints.top.right.x <= otherPoints.top.right.x &&
        selfPoints.top.right.y >= otherPoints.top.left.y && selfPoints.top.right.y <= otherPoints.bottom.left.y
      ) || (
        selfPoints.bottom.left.x >= otherPoints.top.left.x && selfPoints.bottom.left.x <= otherPoints.top.right.x &&
        selfPoints.bottom.left.y >= otherPoints.top.left.y && selfPoints.bottom.left.y <= otherPoints.bottom.left.y
      ) || (
        selfPoints.bottom.right.x >= otherPoints.top.left.x && selfPoints.bottom.right.x <= otherPoints.top.right.x &&
        selfPoints.bottom.right.y >= otherPoints.top.left.y && selfPoints.bottom.right.y <= otherPoints.bottom.left.y
      ) 
    ) {
      console.log("COLISÃO")
    }
  }
}
import { Hitbox } from "./hitbox.js"

const cnv = document.createElement("canvas")
const ctx = cnv.getContext("2d")

document.body.append(cnv)
cnv.width = 1820
cnv.height = 600

const direction = {
  vertical: 0,
  horizontal: 0
}

console.log(direction)
window[direction] = direction

function keyboardInputDown(ev) {
  if (ev.repeat) return
  if (ev.key == "a")
    direction.horizontal = -1

  if (ev.key == "d")
    direction.horizontal = 1

  if (ev.key == "w")
    direction.vertical = -1

  if (ev.key == "s")
    direction.vertical = 1
}

function keyboardInputUp(ev) {
  if (ev.key == "a")
    direction.horizontal = 0  

  if (ev.key == "d")
    direction.horizontal = 0

  if (ev.key == "w")
    direction.vertical = 0

  if (ev.key == "s")
    direction.vertical = 0
}

window.addEventListener("keydown", keyboardInputDown)
window.addEventListener("keyup", keyboardInputUp)


const img = new Image()
img.src = "./assets/coin.png"

// Kreitin Hero
const hero = new Hitbox(ctx, 10, 10, 20, "green")

// Bozin Fazueli Enemy
const enemys = [
  new Hitbox(ctx, 100, 100, 20, "red"),
  new Hitbox(ctx, 200, 200, 20, "red"),
]

function render() {
  ctx.clearRect(0, 0, cnv.width, cnv.height)

  ctx.drawImage(img, 
      175*2, 0, 175, 175, 
      100, 0, 175, 175)

  hero.x += direction.horizontal
  hero.y += direction.vertical

  hero.render()
  enemys.forEach(enemy => enemy.render())


  hero.colide(enemys[0])
  hero.colide(enemys[1])
}

function main() {
  // input()
  render()
  requestAnimationFrame(main)
}

requestAnimationFrame(main)
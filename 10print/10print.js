
const RESET = '\x1b[0m'
const w = process.stdout.columns

const sym = ['┏','┓','┗','┛']
const col = ['\x1b[36m','\x1b[35m','\x1b[33m']


//colors bla r g y blu m c w
//fore 30-37 forebright 90-97
//back 40-47 backbright 100-107
function draw () {
  setTimeout(draw, 10)
  let output = '\x1b[40m'
  symInd = Math.floor(Math.random() * sym.length)
  colInd = Math.floor(Math.random() * col.length)

  output += col[colInd] + sym[symInd]
  process.stdout.write(output) // to get single characters to print at a time
}

draw()

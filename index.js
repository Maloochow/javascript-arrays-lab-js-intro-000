var kittens = [
  "Milo",
  "Otis",
  "Garfield"
] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(a) {
  kittens.push(a)
  return kittens;
}

var kittens = [
  "Milo",
  "Otis",
  "Garfield"
]

function destructivelyPrependKitten(a) {
  kittens.upshift(a)
  return kittens;
}

var kittens = [
  "Milo",
  "Otis",
  "Garfield"
]

function destructivelyRemoveLastKitten() {
  kittens.pop()
  return kittens;
}

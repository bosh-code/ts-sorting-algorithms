import chalk from 'chalk'

export let swapCount = 0

export function bogoSort (arr: number[], verbose = false): number[] {
  do {
    if (verbose) console.log(chalk.grey(`Current Array: ${arr}`))
    ++swapCount
    arr = shuffle(arr)
  } while (!isSorted(arr))

  return arr
}

function isSorted (shuffle: number[]): boolean {
  for (let i = 0; i < shuffle.length - 1; i++) {
    if (shuffle[i] > shuffle[i + 1]) {
      return false
    }
  }
  return true
}

function shuffle (arr: number[]): number[] {
  const shuffledArr = []
  let rand
  while (arr.length !== 0) {
    rand = Math.floor(Math.random() * arr.length)
    shuffledArr.push(arr.splice(rand, 1)[0])
  }
  return shuffledArr
}

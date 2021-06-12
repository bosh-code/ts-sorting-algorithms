import chalk from 'chalk'

export let swapCount = 0

export function insertionSort (arr: number[], verbose = false): number[] {
  for (let i = 0; i < arr.length; ++i) {
    const key = arr[i]
    let j = i - 1
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j]
      --j
    }
    arr[j + 1] = key
    ++swapCount
    if (verbose) console.log('Inserting:', chalk.yellow(key), 'at:', chalk.yellow(j + 1))
    if (verbose) console.log(chalk.grey(`Current Array: ${arr}`))
  }
  return arr
}

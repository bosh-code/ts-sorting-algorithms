import chalk from 'chalk'

export let swapCount = 0

export function selectionSort (arr: number[], verbose = false): number[] {
  for (let i = 0; i < arr.length; ++i) {
    let min = i
    for (let j = i + 1; j < arr.length; ++j) {
      if (arr[min] > arr[j]) {
        min = j
        ++swapCount
      }
    }
    if (min !== i) {
      const temp = arr[i]
      if (verbose) console.log('Swapping:', chalk.yellow(temp), 'with:', chalk.yellow(arr[min]))
      arr[i] = arr[min]
      arr[min] = temp
      ++swapCount
      if (verbose) console.log(chalk.grey(`Current Array: ${arr}`))
    }
  }
  return arr
}

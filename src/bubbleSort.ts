import chalk from 'chalk'

export let swapCount = 0

export function bubbleSort (arr: number[], verbose = false): number[] {
  arr.forEach(() => {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j]
        if (verbose) console.log('Swapping:', chalk.yellow(temp), 'with:', chalk.yellow(arr[j + 1]))
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
        ++swapCount
        if (verbose) console.log(chalk.grey(`Current Array: ${arr}`))
      }
    }
  })
  return arr
}

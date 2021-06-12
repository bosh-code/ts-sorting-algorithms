import chalk from 'chalk'

export let swapCount = 0

function partition (arr: number[], left: number, right: number, verbose = false): number {
  const midPoint = arr[Math.floor((right + left) / 2)]
  let leftIndex = left
  let rightIndex = right
  while (leftIndex <= rightIndex) {
    while (arr[leftIndex] < midPoint) {
      ++leftIndex
    }
    while (arr[rightIndex] > midPoint) {
      --rightIndex
    }
    if (leftIndex <= rightIndex) {
      if (verbose) console.log('Swapping:', chalk.yellow(arr[leftIndex]), 'with:', chalk.yellow(arr[rightIndex]))
      const temp = arr[leftIndex]
      arr[leftIndex] = arr[rightIndex]
      arr[rightIndex] = temp
      ++swapCount
      ++leftIndex
      --rightIndex
    }
  }
  return leftIndex
}

export function quickSort (arr: number[], left: number, right: number, verbose = false): number[] {
  let index: number
  if (arr.length > 1) {
    index = partition(arr, left, right, verbose)
    if (left < index - 1) {
      if (verbose) console.log(chalk.grey(`Partitioning Array on index ${left}: ${arr}`))
      quickSort(arr, left, index - 1, verbose)
    }
    if (index < right) {
      if (verbose) console.log(chalk.grey(`Partitioning Array on index ${right}: ${arr}`))
      quickSort(arr, index, right, verbose)
    }
  }
  return arr
}

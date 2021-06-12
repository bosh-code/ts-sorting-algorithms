import chalk from 'chalk'

export let swapCount = 0

export function mergeSort (arr: number[], verbose = false): number[] {
  if (arr.length < 2) {
    return arr
  }
  const midPoint = Math.floor(arr.length / 2)
  const leftArr = arr.slice(0, midPoint)
  const rightArr = arr.slice(midPoint)
  if (verbose) console.log(chalk.grey(`Slicing array: ${arr} at: ${arr[midPoint]}, leftArr: ${leftArr} | rightArr: ${rightArr}`))
  return merge(mergeSort(leftArr, verbose), mergeSort(rightArr, verbose), verbose)
}

function merge (leftArr: number[], rightArr: number[], verbose = false): number[] {
  if (verbose) console.log(chalk.grey(`Merging arrays: ${leftArr} and: ${rightArr}`))
  const result = []
  let lIndex = 0
  let rIndex = 0

  while (lIndex < leftArr.length && rIndex < rightArr.length) {
    if (leftArr[lIndex] < rightArr[rIndex]) {
      result.push(leftArr[lIndex])
      if (verbose) console.log('Pushing:', chalk.yellow(leftArr[lIndex]), 'from leftArr:', chalk.yellow(result))
      lIndex++
    } else {
      result.push(rightArr[rIndex])
      if (verbose) console.log('Pushing:', chalk.yellow(rightArr[rIndex]), 'from rightArr:', chalk.yellow(result))
      rIndex++
    }
    ++swapCount
  }
  return result.concat(leftArr.slice(lIndex)).concat(rightArr.slice(rIndex))
}

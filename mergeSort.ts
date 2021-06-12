'use strict'
import chalk from 'chalk'

export let swapCount = 0
export function mergeSort (arr: number[], verbose = false): number[] {
  console.log('Slicing!', arr)
  if (arr.length < 2) {
    return arr
  }
  const midPoint = Math.floor(arr.length / 2)
  const leftArr = arr.slice(0, midPoint)
  const rightArr = arr.slice(midPoint)
  return merge(mergeSort(leftArr), mergeSort(rightArr))
}

function merge (leftArr: number[], rightArr: number[]): number[] {
  const result = []

  let lIndex = 0
  let rIndex = 0
  while (lIndex < leftArr.length && rIndex < rightArr.length) {
    if (leftArr[lIndex] < rightArr[rIndex]) {
      result.push(leftArr[lIndex])
      lIndex++
      ++swapCount
      console.log('Left Swapping!')
    } else {
      result.push(rightArr[rIndex])
      rIndex++
      ++swapCount
      console.log('Right Swapping!')
    }
  }
  console.log(chalk.bold('Total number of swaps:', chalk.green(swapCount)))
  return result.concat(leftArr.slice(lIndex)).concat(rightArr.slice(rIndex))
}

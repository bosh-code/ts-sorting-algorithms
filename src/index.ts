'use strict'
import { bubbleSort, swapCount as bubbleCount } from './bubbleSort'
import { selectionSort, swapCount as selectionCount } from './selectionSort'
import { insertionSort, swapCount as insertionCount } from './insertionSort'
import { mergeSort, swapCount as mergeCount } from './mergeSort'
import chalk from 'chalk'

const createArr = (): number[] => {
  return [4, 7, 1, -2, 9, 2, 5, 3, 0, 1, -10, 9, 8, -5]
  // return [2, 6, 5, 12, -1, 3, 8, 7, 1, -4, 0, 23, 1, -55, 20, 37, 54, 210, -23, 7, 483, 9339, 29, -3, 90, -2, 81, 54, 7372, -92, 93, 93, 18, -43, 21]
}

const verbose = false

console.log(chalk.bold(chalk.blue('Running sorts!')))
console.log(chalk.italic(' - Verbose output is currently', chalk.yellow(verbose), '\n', '- The default for all methods is', chalk.yellow(false), '\n', '- Output from merge sorting is', chalk.bold('huge,'), 'pass', chalk.yellow(true), 'to the function call on line 38 at your own risk!\n'))

console.log(chalk.blue('Bubble sort!'))
console.log('Numbers to sort: ', chalk.red(createArr()))
console.log('Numbers after bubble sort: ', chalk.green(bubbleSort(createArr(), verbose)))
console.log(chalk.bold('Total number of operations:', chalk.green(bubbleCount)))
console.log(chalk.italic('Bubble sorting is not very efficient, with an average and worst case big O notation of: O(n2)\n'))

console.log(chalk.blue('Selection sort!'))
console.log('Numbers to sort: ', chalk.red(createArr()))
console.log('Numbers after selection sort: ', chalk.green(selectionSort(createArr(), verbose)))
console.log(chalk.bold('Total number of operations:', chalk.green(selectionCount)))
console.log(chalk.italic('Selection sorting is also very inefficient with an average big O notation of: O(n2)\n'))

console.log(chalk.blue('Insertion sort!'))
console.log('Numbers to sort: ', chalk.red(createArr()))
console.log('Numbers after insertion sort: ', chalk.green(insertionSort(createArr(), verbose)))
console.log(chalk.bold('Total number of operations:', chalk.green(insertionCount)))
console.log(chalk.italic('Insertion sorting is simple and effective for small arrays, however has a worst case scenario of O(n2)\n'))

console.log(chalk.blue('Merge sort!'))
console.log('Numbers to sort: ', chalk.red(createArr()))
console.log('Numbers after merge sort: ', chalk.green(mergeSort(createArr()))) // Uses default false. Pass true if you want.
console.log(chalk.bold('Total number of operations:', chalk.green(mergeCount)))
console.log(chalk.italic('Insertion sorting is simple and effective for small arrays, however has a worst case scenario of O(n2)\n'))

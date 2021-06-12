import { bubbleSort, swapCount as bubbleCount } from './bubbleSort'
import { selectionSort, swapCount as selectionCount } from './selectionSort'
import { insertionSort, swapCount as insertionCount } from './insertionSort'
import { mergeSort, swapCount as mergeCount } from './mergeSort'
import { quickSort, swapCount as quickCount } from './quickSort'
import chalk from 'chalk'

const createArr = (): number[] => {
  // return [4, 7, 1, -2, 9, 2, 5, 3, 0, 1, -10, 9, 8, -5]
  return [2, 6, 5, 12, -1, 3, 8, 7, 1, -4, 0, 23, 1, -55, 20, 37, 54, 210, -23, 7, 483, 9339, 29, -3, 90, -2, 81, 54, 7372, -92, 93, 93, 18, -43, 21]
}

const verbose = false

console.log(chalk.bold(chalk.blue('Running sorts!')))

const bubbleArr = createArr()
console.log(chalk.blue('Bubble sort!'))
console.log('Numbers to sort: ', chalk.red(bubbleArr))
console.log('Numbers after bubble sort: ', chalk.green(bubbleSort(bubbleArr, verbose)))
console.log(chalk.bold('Total number of operations:', chalk.green(bubbleCount)))
console.log(chalk.italic('Bubble sorting is not very efficient, with an average and worst case big O notation of: O(n2).\n'))

const selectionArr = createArr()
console.log(chalk.blue('Selection sort!'))
console.log('Numbers to sort: ', chalk.red(selectionArr))
console.log('Numbers after selection sort: ', chalk.green(selectionSort(selectionArr, verbose)))
console.log(chalk.bold('Total number of operations:', chalk.green(selectionCount)))
console.log(chalk.italic('Selection sorting is also very inefficient with an average big O notation of: O(n2).\n'))

const insertionArr = createArr()
console.log(chalk.blue('Insertion sort!'))
console.log('Numbers to sort: ', chalk.red(insertionArr))
console.log('Numbers after insertion sort: ', chalk.green(insertionSort(insertionArr, verbose)))
console.log(chalk.bold('Total number of operations:', chalk.green(insertionCount)))
console.log(chalk.italic('Insertion sorting is simple and effective for small arrays, however has a worst case scenario of O(n2).\n'))

const mergeArr = createArr()
console.log(chalk.blue('Merge sort!'))
console.log('Numbers to sort: ', chalk.red(mergeArr))
console.log('Numbers after merge sort: ', chalk.green(mergeSort(mergeArr))) // Uses default false. Pass true if you want.
console.log(chalk.bold('Total number of operations:', chalk.green(mergeCount)))
console.log(chalk.italic('Merge sorting is a comparison sorting algorithm that runs in O( n log n) time.\n'))

const quickArr = createArr()
console.log(chalk.blue('Quick sort!'))
console.log('Numbers to sort: ', chalk.red(quickArr))
console.log('Numbers after quick sort: ', chalk.green(quickSort(quickArr, 0, quickArr.length - 1, verbose)))
console.log(chalk.bold('Total number of operations:', chalk.green(quickCount)))
console.log(chalk.italic('Quick sorting is very popular and frequently used. It runs in O(n log n) time.\n'))

console.log(chalk.italic(' - Verbose output is currently', chalk.yellow(verbose)))
console.log(chalk.italic(' - The default for all methods is', chalk.yellow(false)))
console.log(chalk.italic(' - Output from merge sorting is', chalk.bold('huge,'), 'pass', chalk.yellow(true), 'to the function call on line 41 at your own risk!'))
console.log(chalk.italic(' - The total number of operations displayed for each sort is', chalk.bold('not'), 'an indication of performance, just an interesting metric.'))

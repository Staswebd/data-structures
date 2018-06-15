/*
Merge Sort
All the hard work happends in the combine step not in divide step
Pseudocode Recursive
Function mergeSortRecursive
1. create a base case if an array lenght smaller or equalt than 1 return the array
2. Divide and Conquer with recursion
- var left half of the array
- var right half of the array
- mergeSortRecursive for the left half
- mergeSortRecursive for the right half
3. return merge function with left sorted and right sorted arrays

Pseudocode Iterative
Function mergeSortIterative
1. create an array of subarrays with each element
2. while loop 
- as long as new array has a length bigger than 1
- create a new result array
- for loop if i smaller than new array of sub arrays, everytime add 2 to i, like i+=2 means i = i+2
- if i+1 index exist push merge of i and i+1 into result
- else push only i result
- asign result to the sub arrays
- return the first index of sub array


Function merge
1. Create a new array;
2. Create var counters for left and right and assign 0 value to them 
3. while loop 
- as long as new array length smaller than sum of left and right arrays
- if all left elements added to the array, add remaining right elements
- else if all right elements added to the array, add remaining left elements
- else if left smallet than right, push left and add +1 to the left counter
- else push right and add +1 to the right counter
- return results
*/
function mergeSortRecursive(array) {
    if (array.length <= 1) return array;

    var leftHalf = array.slice(0, array.length / 2);
    var rightHalf = array.slice(array.length / 2);

    var leftSorted = mergeSortRecursive(leftHalf);
    var rightSorted = mergeSortRecursive(rightHalf);

    return merge(leftSorted, rightSorted);
}

function mergeSortIterative(array) {
    var splitArr = array.map(function (element) { return [element] });

    while (splitArr.length > 1) {
        var result = [];

        for (var i = 0; i < splitArr.length; i += 2) {
            if (splitArr[i + 1]) result.push(merge(splitArr[i], splitArr[i + 1]));

            else result.push(splitArr[i]);
        }
        splitArr = result;
    }
    console.log(splitArr);
    return splitArr[0];
}

function merge(left, right) {
    var result = [];
    var leftCount = 0;
    var rightCount = 0;

    while (result.length < (left.length + right.length)) {
        if (leftCount === left.length) result = result.concat(right.slice(rightCount));
        else if (rightCount === right.length) result = result.concat(left.slice(leftCount));
        else if (left[leftCount] <= right[rightCount]) result.push(left[leftCount++]);
        else result.push(right[rightCount++]);
    }
    return result;
}

mergeSortRecursive([5, 2, 9, 1, 4]);
mergeSortIterative([5, 2, 9, 1, 4]);

/*
Quick Sort
All the work happens in the divide step
Function quicksort with arguments as array, lowest number and highest number.
- if numbers no provided assign value of lower to the 0 and highest as the last element in the array
- if  highest is bigger than lowest do partition
- after the partition return sorted array (left is smaller then pivot and right is bigger) do recursion quicksorf for both left and right part of the array

Function partition with Lomuto scheme
- pass to the function the array, lowest and highest numbers 
- assign the pivot var as the element in the array with highest number
- assign the pivot track index var to the lowest number
- for loop with index assign to lowest, as long as index smaller than highest, add +1
- inside the loop 
- if array with index is <= than pivot, swap function with arguments as array, pivot track index and index
- increment pivot track index +1
- other cases do swap with array pivot track index and highest
- return pivot track index

Function swap
-pass to the function array, index1 and index2
- if i1 === i2 we return
- assign array i2 to temporaty variable
- assign array i2 to array i1
- assign temp to array i2
- return array 
*/

function quickSort(array, lo, hi) {
    if (lo === undefined) lo = 0;
    if (hi === undefined) hi = array.length - 1;

    if (lo < hi) {
        var p = partition(array, lo, hi);
        console.log('partitioning from', lo, 'to', hi, '=> partition:', p);

        quickSort(array, lo, p - 1);
        quickSort(array, p + 1, hi);
    }
    if (hi - lo === array.length - 1) return array;
}

function partition(arr, lo, hi) {
    var pivot = arr[hi];
    var pivotIndex = lo;

    for (var i = lo; i < hi; i++) {
        if (arr[i] <= pivot) {
            swap(arr, pivotIndex, i);
            pivotIndex++;
        }
    }
    swap(arr, pivotIndex, hi);
    return pivotIndex;
}

function swap(arr, i1, i2) {
    if (i1 === i2) return;
    var temp = arr[i1];
    arr[i1] = arr[i2];
    arr[i2] = temp;
    console.log('swapped', arr[i1], arr[i2], 'in', arr);
    return arr;
}

quickSort([5,9,4,7,6,2,8,3,9,1,5]);
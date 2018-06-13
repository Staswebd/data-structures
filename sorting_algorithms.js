/*
Merge Sort
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

    var leftHalf = array.slice(0, array.length/2);
    var rightHalf = array.slice(array.length/2);

    var leftSorted = mergeSortRecursive(leftHalf);
    var rightSorted = mergeSortRecursive(rightHalf);

    return merge(leftSorted, rightSorted);
}

function mergeSortIterative(array) {
    var splitArr = array.map(function(element) { return [element] });

    while(splitArr.length > 1) {
        var result = [];

        for(var i=0; i<splitArr.length; i+=2) {
            if (splitArr[i+1]) result.push(merge(splitArr[i], splitArr[i+1]));

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

mergeSortRecursive([5,2,9,1,4]);
mergeSortIterative([5,2,9,1,4]);




// Quick Sort
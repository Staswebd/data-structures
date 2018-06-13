// Bubble sort
var bubbleSort = function (array) {
    for (j = 0; j < array.length; j++) {
        for (i = 0; i < array.length; i++) {
            if (array[i] > array[i+1]) {
                var tempArray = array[i];
                array[i] = array[i+1];
                array[i+1] = tempArray;
                console.log(array);
            }
        }
    }
    return array;
}
// Optimization of Bubble sort
var bubbleSort = function (array) {
    var wall = array.length;
    while (wall >= 0) {
        for (i = 0; i < wall; i++) {
            if (array[i] > array[i+1]) {
                var tempArray = array[i];
                array[i] = array[i+1];
                array[i+1] = tempArray;
            }
        }
        wall--;
    }
    return array;
}

bubbleSort([5, 1, 9, 7, 6, 4]);

// Insertion
var insertionSort = function (array) {
    for (let i = 1; i < array.length; i++) {
        for (let j = 0; j < i; j++) {
            if (array[i] < array[j]) {
                const tempArray = array[i];
                array[i] = array[j];
                array[j] = tempArray;
            }
        }
    }
    return array;
}

insertionSort([5, 1, 9, 7, 6, 4]);

// Selection
var selectionSort = function (array) {
    return sortedArray;
}
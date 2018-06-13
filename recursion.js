var callMyself = function() {
    if() {
        //base code
        return;
    } else {
        //recursion case
        callMyself();
    }
    return;
}

// Write a function that loops through the numbers n down to 0. If you haven't done so try using a while loop to do this.
// Next, try looping just like above except using recursion

// Write a function 'exponent' that takes two arguments base, and expo, uses a while loop to return the exponenet value of the base.

// Write a function 'RecursiveExponent' that takes two arguments base, and expo, recursively returns exponent value of the base.

// Write a function 'recursiveMultiplier' that takes two arguments, 'arr and num', and multiplies each arr value by num and returns an array of the values.
// [1,2,3] 3 => [3,6,9]

var recursiveMultiplier = function(arr, num) {

}

// Write a function 'recursiveReverse' that takes an array and uses recursion to return its contents in reverse
var recursiveReverse = function(arr) {
    var reversedArr = [];
    var addItems = function(orderedArr) {

        if (orderedArr.length > 0) {
            reversedArr.push(orderedArr.pop());
            addItems(orderedArr);
        }
        return;
    };

    addItems(arr);

    return reversedArr;
}


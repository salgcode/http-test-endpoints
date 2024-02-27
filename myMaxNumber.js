/**
 * takes an array and returns the max number in it
 */

function findMax(arr) {
    if (arr === undefined || arr.length === 0) {
        return 0;
    }
    let maxNumber = arr[0];
    for (i = 0; i < arr.length; i++) {
        let currNumber = arr[i]
        if (currNumber > maxNumber) {
            maxNumber = currNumber;
        }
    }
    return maxNumber;
}

module.exports = findMax;


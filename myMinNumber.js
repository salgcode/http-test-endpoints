
function findMin(arr) {
    if (arr === undefined || arr.length === 0) {
        return 0;
    }
    let minNumber = arr[0];
    for (i = 0; i < arr.length; i++) {
        let currNumber = arr[i]
        if (currNumber < minNumber) {
            minNumber = currNumber;
        }
    }
    return minNumber;
}
module.exports = findMin;

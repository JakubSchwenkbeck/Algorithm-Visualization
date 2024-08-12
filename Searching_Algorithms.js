/** This file holds the Searching algorithms */

// Linear search algorithm
// O(n)
async function LinearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        setHighlights(target, i);
        await sleep(100);

        if (arr[i] === target) {
            highlightAll(arr);
            return i; // Return the index of the found element
        }
    }
    highlightAll(arr); // If not found, highlight all
    return -1; // Return -1 if the target is not found
}

// Binary search algorithm (sorted array)
// O(log(n))
async function BinarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        setHighlights(left, right);
        await sleep(100);

        if (arr[mid] === target) {
            highlightAll(arr);
            return mid;
        }

        if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    highlightAll(arr); // If not found, highlight all
    return -1;
}

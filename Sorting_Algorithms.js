/** Sorting_Algorithms.js implements some ways of sorting an Array of Integers */

// This function helps visualize the sorting better
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Selection Sort algorithm
// O(n^2)
async function SelectionSort(array) {
    if (array == null || array.length <= 1) { return; }

    for (let i = 0; i < array.length; i++) {
        let minIndex = i;

        // Find the index of the smallest element
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
        }

        // Swap if a new minimum was found
        if (minIndex !== i) {
            [array[i], array[minIndex]] = [array[minIndex], array[i]];
            setHighlights(i, minIndex);
            await sleep(200); // Pause to visualize
        }
    }
    highlightAll(array);
}

// Insertion Sort algorithm
// O(n^2)
async function InsertionSort(array) {
    if (array == null || array.length <= 1) { return; }

    for (let i = 1; i < array.length; i++) {
        let key = array[i];
        let j = i - 1;

        // Move elements of array[0..i-1] that are greater than key
        while (j >= 0 && array[j] > key) {
            array[j + 1] = array[j];
            j--;
        }
        array[j + 1] = key;
        setHighlights(i, -1);
        await sleep(200); // Pause to visualize
    }
    highlightAll(array);
}

// Bubble Sort algorithm
// O(n^2)
async function BubbleSort(array) {
    let len = array.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - 1 - i; j++) {
            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
            }
            setHighlights(j, j + 1);
            await sleep(50); // Visualize swaps
        }
    }
    highlightAll(array);
}

// Quick Sort algorithm
// O(n log n) (worst case O(n^2))
async function QuickSort(array, left = 0, right = array.length - 1) {
    if (left < right) {
        const pivotIndex = await partition(array, left, right);
        await QuickSort(array, left, pivotIndex - 1);
        await QuickSort(array, pivotIndex + 1, right);
    } else {
        highlightAll(array);
    }
}

// Partition function for Quick Sort
async function partition(array, left, right) {
    const pivot = array[right];
    let i = left - 1;

    for (let j = left; j < right; j++) {
        if (array[j] <= pivot) {
            i++;
            [array[i], array[j]] = [array[j], array[i]]; // Swap
        }
        setHighlights(i, j);
        await sleep(25); // Visualize the current state
    }
    [array[i + 1], array[right]] = [array[right], array[i + 1]];
    setHighlights(i + 1, right);
    await sleep(25); // Visualize the pivot swap
    return i + 1;
}

// Merge Sort algorithm
// O(n log n)
async function MergeSort(array) {
    if (array.length <= 1) return;

    const mid = Math.floor(array.length / 2);
    const left = array.slice(0, mid);
    const right = array.slice(mid);

    await MergeSort(left);
    await MergeSort(right);
    await merge(array, left, right);
}

async function merge(array, left, right) {
    let i = 0, j = 0, k = 0;

    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            array[k++] = left[i++];
        } else {
            array[k++] = right[j++];
        }
        setHighlights(k - 1, -1);
        await sleep(10); // Visualize merging
    }

    while (i < left.length) {
        array[k++] = left[i++];
        setHighlights(k - 1, -1);
        await sleep(10); // Visualize remaining elements
    }

    while (j < right.length) {
        array[k++] = right[j++];
        setHighlights(k - 1, -1);
        await sleep(10); // Visualize remaining elements
    }
    highlightAll(array);
}

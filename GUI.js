/** GUI creates and handles the User Interface */

// Constants 
const CANVAS_HEIGHT = 800;
const CANVAS_WIDTH = 400;
const ArraySize = 100;

// GUI Elements
let algoSelect, startButton, resetButton;

// Display Settings 
let array = [];
let drawing = true;
let highlightIndex1 = -1;
let highlightIndex2 = -1;
let allHighlighted = false; // New variable to track overall highlight status

// Setup function to initialize the canvas and elements
function setup() {
    createCanvas(CANVAS_HEIGHT, CANVAS_WIDTH);
    algoSelect = select('#algoSelect');
    startButton = select('#startButton');
    startButton.mousePressed(startVisualization);
    resetButton = select('#resetButton');
    resetButton.mousePressed(resetVisualization);
    generateRandomArray();
}

// Draw function for the canvas
function draw() {
    if (drawing) {
        background(220);
        drawArray(array, highlightIndex1, highlightIndex2);
    }
}

// Function to generate a random array
function generateRandomArray() {
    array = [];
    for (let i = 0; i < ArraySize; i++) {
        array.push(floor(random(height)));
    }
}

// Function to highlight all elements in green
function highlightAll() {
    allHighlighted = true; // Set the highlight status to true
    highlightIndex1 = -1; // Reset individual highlights
    highlightIndex2 = -1; // Reset individual highlights
    drawing = false; // Stop drawing
    setTimeout(() => {
        drawing = true; // Allow drawing again after a brief pause
    }, 1000);
}

// Set highlights for visualization
function setHighlights(index1, index2) {
    highlightIndex1 = index1;
    highlightIndex2 = index2;
}

// Function to reset visualization
function resetVisualization() {
    drawing = false; // Stop drawing
    generateRandomArray(); // Reset the array
    highlightIndex1 = -1; // Reset highlights
    highlightIndex2 = -1; // Reset highlights
    allHighlighted = false; // Reset overall highlight status
    redraw(); // Clear the canvas
    drawArray(array, -1, -1); // Draw new array 
}

// Function to draw the array with highlights
function drawArray(arr, highlightIndex1 = -1, highlightIndex2 = -1) {
    clear();
    let w = width / arr.length;
    for (let i = 0; i < arr.length; i++) {
        if (allHighlighted) {
            fill(50, 250, 50); // Green color for sorted array
        } else if (i === highlightIndex1 || i === highlightIndex2) {
            fill(0, 0, 255); // Highlight color for current comparisons
        } else {
            fill(255);
        }
        rect(i * w, height - arr[i], w, arr[i]);
    }
}

// Function to start the sorting visualization
function startVisualization() {
    drawing = true; // Start drawing
    const algorithm = algoSelect.value();

    switch (algorithm) {
        case 'Selection Sort':
            SelectionSort(array);
            break;
        case 'Insertion Sort':
            InsertionSort(array);
            break;
        case 'Bubble Sort':
            BubbleSort(array);
            break;
        case 'Quick Sort':
            QuickSort(array);
            break;
        case 'Merge Sort':
            MergeSort(array);
            break;
        case 'Linear Search':
            LinearSearch(array, array[random(0, array.length)]);
            break;
        case 'Binary Search':
            BinarySearch(array, array[random(0, array.length)]);
            break;
    }
    redraw();
}

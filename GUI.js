/** GUI creates and handles the User Interface */

// Constants 
var CANVAS_HEIGHT = 800;
var CANVAS_WIDTH = 400;
var ArraySize = 100;

// GUI Elements
let algoSelect;
let startButton;
let resetButton;

// Display Settings 
let array = [];
let sorted = false;
let drawing = true;
let Highlight1 = -1;
let Highlight2 = -1;



function setup() {
  
  createCanvas(CANVAS_HEIGHT, CANVAS_WIDTH);
  
  // Get UI-elements and set callbacks
  algoSelect = select('#algoSelect');
  startButton = select('#startButton');
  startButton.mousePressed(startVisualization);
  resetButton = select('#resetButton');
  resetButton.mousePressed(resetVisualization);

  // Generate a random array
  generateRandomArray();
}


function draw() {
  if (drawing) {
    // bool drawing controls if new drawings happen    
    background(220);
    drawArray(array,Highlight1,Highlight2);
    
  }
}



function generateRandomArray(){
  array = [];
  for (let i = 0; i < ArraySize; i++) {
    array.push(floor(random(height)));
  }
}



function setHighlights(high1,high2){
  Highlight1 = high1;
  Highlight2 = high2;
}


function resetVisualization() {
  drawing = false; // Stop drawing
  generateRandomArray(); // Reset the array
  redraw(); // Clear the canvas
  drawArray(array,-1,-1); // draw new Array 
}


// drawArray function accepts an array and two highlighted indices

function drawArray(arr, highlightIndex1 = -1, highlightIndex2 = -1) {
  clear();
  let w = width / arr.length;
  for (let i = 0; i < arr.length; i++) {
    if (i === highlightIndex1 || i === highlightIndex2) {
      fill(0, 0, 255); // Highlight color
    } else {
      fill(255);
    }
    rect(i * w, height - arr[i], w, arr[i]);
  
  }
  
}



function startVisualization() {
  drawing = true; // Start drawing
  sorted = false;
  let algorithm = algoSelect.value();
  
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
      LinearSearch(array, random(0, height));
      break;
      
    case 'Binary Search':
      BinarySearch(array, random(0, height));
      break;
  }
  redraw();
}

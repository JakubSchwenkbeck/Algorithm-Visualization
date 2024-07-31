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
let highlightALL = -1;


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
    drawArray(array,Highlight1,Highlight2,highlightALL);
    
  }
}



function generateRandomArray(){
  array = [];
  for (let i = 0; i < ArraySize; i++) {
    array.push(floor(random(height)));
  }
}


function allHighlights(x){
  highlightALL = x;
}
function setHighlights(high1,high2){
  Highlight1 = high1;
  Highlight2 = high2;
}


function resetVisualization() {
  drawing = false; // Stop drawing
  generateRandomArray(); // Reset the array
  allHighlights(-1); //reset highlights
  setHighlights(-1,-1);
  redraw(); // Clear the canvas
  drawArray(array,-1,-1); // draw new Array 
}


// drawArray function accepts an array and two highlighted indices

function drawArray(arr, highlightIndex1 = -1, highlightIndex2 = -1,highlightALL1 = -1) {
  clear();

  print(highlightALL1);
  let w = width / arr.length;
  for (let i = 0; i < arr.length; i++) {
    if (highlightALL1 == -1){
      
      if (i === highlightIndex1 || i === highlightIndex2) {
        fill(0, 0, 255); // Highlight color
      } else {
        fill(255);
      }
  }else{
    
    fill(50,250,50);
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
      LinearSearch(array, array[random(0,array.length)]);
      break;
      
    case 'Binary Search':
      BinarySearch(array, array[random(0,array.length)]);
      break;
  }
  redraw();
}

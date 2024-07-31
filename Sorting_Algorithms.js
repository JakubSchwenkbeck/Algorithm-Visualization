/** Sorting_Algorithms.js implements some ways of sorting an Array of Integers */


// This function helps visualizing the Sorting better

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
// To be able to use 'await', we make the functions asynchronious


//* Selection Sort algorithm searches the smallest element in the unsorted array and puts it in the first position of the unsorted array */

// O(n^2)
async function SelectionSort(Array){
 if(Array == null ||Array.length <= 1){return;}
  
  
    for (let i = 0; i < Array.length; i++) {
      
        let key = Array[i];
        let index = i;
       setHighlights(i,index);
         for (let j = i+1; j < Array.length ; j++) {
           if(key > Array[j]){
             key = Array[j]; index = j;}
            }
      
    
      
      let tmp = Array[i];
      Array[i] = key;
      Array[index] = tmp;
       await sleep(200); // Pause to visualize

     setHighlights(i,index);
      
  }
}


//* Insertion Sort takes the first element of the unsorted array and inerst it in the right position in the sorted part of the array */

// O(n^2)
async function InsertionSort(Array){
  if(Array == null|| Array.length<= 1){return;}
  
    for (let i = 1; i < Array.length; i++) {
       setHighlights(-1,i);
         let key = Array[i];
         let pos = i-1;
      
         while(pos >= 0 && key < Array[pos]){
              Array[pos +1 ] = Array[pos];
              pos--;
         }
      
      
    Array[pos + 1] = key;
             await sleep(200); // Pause to visualize

 setHighlights(-1,pos+1);
      
   }
   allHighlights(5);

}

//* Bubble Sort 'bubbles' the greates number to the last position in each iteration by swapping neighbors according to their comparision */ 

// O(n^2)
async function BubbleSort(Array) {
  let len = Array.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      
      if (Array[j] > Array[j + 1]) {
        let temp = Array[j];
        Array[j] = Array[j + 1];
        Array[j + 1] = temp;
      }
      setHighlights( j, j + 1);
      await sleep(50);
    }
  }
}


//* Quick Sort splits the array into smaller subarrays by using a pivot element and then joining them easily together (hard split easy join) */

// O(n* log(n)) (worst case O(n^2))
async function QuickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        // Partition the array and get the pivot index
        let pivotIndex = await partition(arr, left, right);

        // Recursively sort the left and right sub-arrays
        await QuickSort(arr, left, pivotIndex - 1);
        await QuickSort(arr, pivotIndex + 1, right);
    }
  
   //allHighlights(5);
}

// Partition function
async function partition(arr, left, right) {
    let pivot = arr[right]; // Choose the rightmost element as pivot
  setHighlights(left,right)
    let i = left - 1; // Pointer for the smaller element

    for (let j = left; j < right; j++) {
        // If current element is less than or equal to pivot
        if (arr[j] <= pivot) {
            i++; // Increment the pointer
            [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap the elements
        }
        // Draw the current state of the array
         setHighlights(i,j)
        await sleep(25); // Delay for visualization
    }
    // Swap the pivot element with the element at index i + 1
    [arr[i + 1], arr[right]] = [arr[right], arr[i + 1]];
    
    // Draw the final state after partitioning
   setHighlights(i+1,right)
    await sleep(25); // Delay for visualization

    return i + 1; // Return the pivot index
}


//* Merge sort splits the Array into its elementar pieces and dthen merges them with the right positions together */ 

// O(n* log(n))
async function MergeSort(arr) {
    // If the array is of length 1 or less, it is already sorted
    if (arr.length <= 1) {
        return;
    }

    // Split the array into two halves
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    // Recursively sort both halves
    await MergeSort(left);
    await MergeSort(right);

    // Merge the sorted halves back into the original array
    await merge(arr, left, right);
}

async function merge(arr, left, right) {
    let i = 0; // Pointer for the left array
    let j = 0; // Pointer for the right array
    let k = 0; // Pointer for the merged array

    // Merge the two arrays back into arr
    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            arr[k] = left[i];
            i++;
        } else {
            arr[k] = right[j];
            j++;
        }
        k++;

        // Visualize the current state of the array after each merge step
        setHighlights(i,k); // might use arr.slice() to show the current state
        await sleep(10); // Delay for visualization
    }

    // Copy remaining elements from the left array, if any
    while (i < left.length) {
        arr[k] = left[i];
        i++;
        k++;
        
        // Visualize the current state of the array after each addition
        setHighlights(i,k); // might use arr.slice() to show the current state
        await sleep(10); // Delay for visualization
    }

    // Copy remaining elements from the right array, if any
    while (j < right.length) {
        arr[k] = right[j];
        j++;
        k++;
        
        // Visualize the current state of the array after each addition
        setHighlights(j,k); // might use arr.slice() to show the current state
        await sleep(10); // Delay for visualization
    }
}



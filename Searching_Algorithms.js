//* This file holds the Searching algorithms */


//* Linear search searches the Array step by step lineary */ 

// O(n)
async function LinearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        // Highlight the current element being checked
        //setHighlights(target,i);
        // Introduce a delay for visualization
        await sleep(100);

        if (arr[i] === target) {
            // Highlight the found element
            
            return i ; // Return the index of the found element
        }
    }
  //setHighlights(target,-1)

    // If not found, you can visualize this (optional)
   // drawArray(arr, -1); // No highlight for not found
    return -1;//return -1; // Return -1 if the target is not found
}


//* Binary Search splits the (sorted!!) array in half and than searches the half were value lies */

//O(log(n))
async function BinarySearch(arr, target) {
   arr.sort();
  
 let left = 0;
 let right = array.length - 1;
  
 while (left <= right) {
   setHighlights(left,right);
 let mid = left + (right - left) / 2;
    
 // Check if middle element is already the target
 if (array[mid] == target) {
   allHighlights(5);
   return mid;
   
 }
   
   
   await sleep(100);
 // if target is bigger, search on right side
 if (array[mid] < target) {
   left = mid + 1;
 }
 // if target is smaller, search on left side
 else right = mid - 1;
 }
 // not found
 return -1;
}

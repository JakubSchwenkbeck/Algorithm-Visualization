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
            
            return ; // Return the index of the found element
        }
    }
  //setHighlights(target,-1)

    // If not found, you can visualize this (optional)
   // drawArray(arr, -1); // No highlight for not found
    return;//return -1; // Return -1 if the target is not found
}


//* Binary Search splits the (sorted!!) array in half and than searches the half were value lies */

//O(log(n))
async function BinarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        // Calculate the mid index
        const mid = Math.floor((left + right) / 2);

        // Highlight the current search area
         setHighlights(target, mid);

        // Introduce a delay for visualization
        await sleep(100);

        if (arr[mid] === target) {
            // Highlight the found element
             setHighlights(target, mid);
          
            return;// mid; // Return the index of the found element
        }

        if (arr[mid] < target) {
            left = mid + 1; // Search in the right half
        } else {
            right = mid - 1; // Search in the left half
        }
    }

    // If not found, you can visualize this (optional)
   // drawArray(arr, -1); // No highlight for not found
    return// -1; // Return -1 if the target is not found
}

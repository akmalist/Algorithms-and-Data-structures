// Recursive Version


function countDown(num){
    if(num <= 0) {
        console.log("All done!");
        return;
    }
    console.log(num);
    num--;
    countDown(num);
}
countDown(3)

// Iterative Version
function countDown(num){
    for(var i = num; i > 0; i--){
        console.log(i);
    }
    console.log("All done!")
}

/////////////////////////////////

/*POWER SOLUTION*/
function power(base, exponent){
    if(exponent === 0) return 1;
    return base * power(base,exponent-1);
}

/////////////////////////////////



//FACTORIAL SOLUTION
function factorial(x){
   if (x < 0 ) return 0;
   if (x <= 1 ) return 1;
   return x * factorial(x-1);
}


/////////////////////////////////

//PRODUCT OF ARRAY SOLUTION
function productOfArray(arr) {
    if(arr.length === 0) {
        return 1;
    }
    return arr[0] * productOfArray(arr.slice(1));
	
	
/////////////////////////////////

function recursiveRange(num){
	if(num===0){
	return 0;
	}
	return num + recursiveRange(num-1)
}
recursiveRange(10) // 55 
	
/////////////////////////////////
	
	
function reverse(str) {
    if(str.length <=1){
        return str;
    }
    return reverse(str.slice(1)) + str[0];
    
    
    
}

	
	///////////////////////////////Linear Search O(n)
	
function linearSearch(arr, val){
  for(let i =0; i<arr.length; i++){
    let mega = arr[i];
    if(mega===val){
       return i;
    } 
  }
    return -1;
 
}

linearSearch([2,6,7,9,15],10)
	
	
//////////////////////////////////////////
	
// binarySearch
function binarySearch(arr, val){
 let start = 0;
 let end = arr.length-1;
 let middle = Math.floor((start-end)/2) 
while (arr[middle]!== val && start<=end) {
  if(val<arr[middle]){
    end = middle-1;

  }else{
    start= middle+1;
  }
  middle = Math.floor((start + end) / 2);
}
 if(arr[middle] === val){
        return middle;
    }
 return -1;
}
	

binarySearch([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 5);
	
	
///////////////////////// FIND MATCH//////
	
function findMatch(str,val){
   let match = 0;
  for(let i =0; i<str.length; i++){
    for(let x = 0; x<val.length; x++){
  
       if(val[x]!==str[i+x]){
         break;
         
      }if(x=== val.length-1){
            console.log(val[x])
            match++;
        }
     }
  }
  return match;
}


findMatch("wordakidakidadakiadd","aki")
	
	
	
/////////////////Buble sort//////
	
	//naive version
	
function bubbleSort(arr){
  
  for(let i = arr.length; i>0; i--){
    //i-1 means that we want to shrink the i everytime when swapping j's
       for(let j =0; j< i-1; j ++){
        if(arr[j]> arr[j+1]){
          let temp = arr[j];
          arr[j]=arr[j+1];
          arr[j+1]=temp;
        }
  }
  }

  return arr;


  
};
	
	//////////////O(n) version/////////


function bubbleSort2(arr){
  let noSwaps;
  const swap = (arr, first, second)=>{
    [arr[first],arr[second]]= [arr[second],arr[first]];
  };

  for(let i=arr.length; i > 0; i--){
    for(let j=0; j<i-1; j++){
      if(arr[j]>arr[j+1]){
        swap(arr, j, j+1)
        noSwaps = false;
      }
    }
    if(noSwaps) break;
  }

  return arr;
}

bubbleSort2([15,2,99,12,55,25])

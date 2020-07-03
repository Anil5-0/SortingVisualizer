export function getBubbleSortAnimations(array){
    const animations = [];
    if(array.length<=1) return array;
    bubbleSortHelper(array,animations);
    return animations;
}

function bubbleSortHelper(array,animations){
	for(let i=0;i<array.length;i++){
        let swapped = false;
      for(let j=0;j<array.length-i-1;j++){
        animations.push([j,j+1]);
        animations.push([j,j+1]);
        if(array[j]>array[j+1])
        {
          animations.push([j,j+1]);
          let temp=array[j];
          array[j] = array[j+1];
          array[j+1] = temp;
          swapped = true;
        }
        else
            animations.push([-1,-1]);
      }
      if(swapped === false)
          break;
    }
}
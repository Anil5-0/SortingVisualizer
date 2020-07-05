export function getHeapSortAnimations(array){
    const animations = [];
    if(array.length<=1) return array;
    heapSort(array,array.length,animations);
    return animations;
}


function heapify(array,n,i,animations){
	let lt = (2*i)+1, rt = (2*i)+2;
  let largest = i;
  if(lt<n){
    animations.push([-1,lt,largest,"red"]);
    animations.push([-1,lt,largest,"turquoise"]);
  }
  if(lt<n&&array[lt]>array[largest])
      largest = lt;
  if(rt<n){
    animations.push([-1,rt,largest,"red"]);
    animations.push([-1,rt,largest,"turquoise"]);
  }
  if(rt<n&&array[rt]>array[largest])
      largest = rt;
  
  if(largest!==i){
    animations.push([-2,i,largest,"red"]);
    animations.push([-3,i,largest,"turquoise"]);
  	[array[i],array[largest]] = [array[largest],array[i]];
    heapify(array,n,largest,animations);
  }
}

function heapSort(array,n,animations){
	 for(let i=Math.floor(n/2)-1;i>=0;i--)
   		heapify(array,n,i,animations);
   for(let i=n-1;i>=0;i--){
      animations.push([-2,0,i,"purple"]);
   	  [array[0],array[i]] = [array[i],array[0]];
      heapify(array,i,0,animations);
   }
}


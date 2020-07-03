export function getSelectionSortAnimations(array){
    const animations = [];
    if(array.length<=1) return array;
    selectionSortHelper(array,animations);
    return animations;
}

function selectionSortHelper(array,animations){
    for(let i=0;i<array.length-1;i++){
        let minIdx = i;
        for(let j=i+1;j<array.length;j++){
            animations.push([i,j]);
            if(array[j]<array[minIdx])
                minIdx = j;
        }
        // Single Line Swap
        [array[i],array[minIdx]] = [array[minIdx],array[i]];
        animations.push([-1,-1]);
        animations.push([i,minIdx]);
    }
}
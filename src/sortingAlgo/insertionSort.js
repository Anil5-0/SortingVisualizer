export function getInsertionSortAnimations(array){
    const animations = [];
    if(array.length<=1) return array;
    insertionSortHelper(array,animations);
    return animations;
}

function insertionSortHelper(array,animations){
    let i,key,j;
    for(i=1;i<array.length;i++){
        key=array[i];
        j=i-1;
        while(j>=0 && array[j]>key){
            animations.push([i,j]);
            array[j+1]=array[j];
            animations.push([-1,-1]);
            animations.push([j+1,array[j]]);
            j=j-1;
        }
        array[j+1] = key;
        animations.push([-1,-1]);
        animations.push([j+1,key]);
    }
}
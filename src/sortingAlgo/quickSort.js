export function getQuickSortAnimations(array){
    const animations = [];
    if(array.length<=1) return array;
    quickSort(array,0,array.length-1,animations);
    return animations;
}


function partition(array,low,high,animations){
    let pivot = array[high];
    let i=low-1;
    for(let j=low;j<=high-1;j++){
        if(array[j]<=pivot){
            animations.push([-1,j,high]);
            i++;
            [array[i],array[j]] = [array[j],array[i]];
            animations.push([-2,i,j]);
        }
    }
    [array[i+1],array[high]] = [array[high],array[i+1]];
    animations.push([-2,i+1,high]);
    return (i+1);
}


function quickSort(array,low,high,animations){
    if(low<high){
        let pi = partition(array,low,high,animations);
        quickSort(array,low,pi-1,animations);
        quickSort(array,pi+1,high,animations);
    }
}
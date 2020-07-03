export function getMergeSortAnimations(array){
    const animations = [];
    if(array.length<=1) return array;
    const auxArr = array.slice();
    mergeSortHelper(array,0,array.length-1,auxArr,animations);
    return animations;
}

function mergeSortHelper(mainArr,startIdx,endIdx,auxArr,animations){
    if(startIdx===endIdx) return;
    const midIdx = Math.floor((startIdx+endIdx)/2);
    mergeSortHelper(auxArr,startIdx,midIdx,mainArr,animations);
    mergeSortHelper(auxArr,midIdx+1,endIdx,mainArr,animations);
    doMerge(mainArr,startIdx,midIdx,endIdx,auxArr,animations);
}

function doMerge(mainArr,startIdx,midIdx,endIdx,auxArr,animations){
    let i = startIdx;
    let j = midIdx+1;
    let k = startIdx;
    while(i<=midIdx&&j<=endIdx){
        animations.push([i,j]);
        animations.push([i,j]);
        if(auxArr[i]<=auxArr[j]){
            animations.push([k,auxArr[i]]);
            mainArr[k++] = auxArr[i++];
        }
        else{
            animations.push([k,auxArr[j]]);
            mainArr[k++] = auxArr[j++];
        }
    }

    while(i<=midIdx){
        animations.push([i,i]);
        animations.push([i,i]);
        animations.push([k,auxArr[i]]);
        mainArr[k++] = auxArr[i++];
    }

    while(j<=endIdx){
        animations.push([j,j]);
        animations.push([j,j]);
        animations.push([k,auxArr[j]]);
        mainArr[k++] = auxArr[j++];
    }
}
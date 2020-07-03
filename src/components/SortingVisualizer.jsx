import React from 'react'
import './SortingVisualizer.css';
import {Header} from '../components/Header';
import { getMergeSortAnimations } from '../sortingAlgo/mergeSort'
import { getBubbleSortAnimations } from '../sortingAlgo/bubbleSort';
import { getSelectionSortAnimations } from '../sortingAlgo/selectionSort';
import { getInsertionSortAnimations } from '../sortingAlgo/insertionSort';
import { getHeapSortAnimations } from '../sortingAlgo/heapSort';
import { getQuickSortAnimations } from '../sortingAlgo/quickSort';
 
const ANIMATION_SPEED_MS = 1;
const PRIMARY_COLOR = 'turquoiuse';
const SECONDARY_COLOR = 'red';
const NUMBER_OF_ARRAY_BARS = 310;

export default class SortingVisualizer extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            array: []
        };
    }

    componentDidMount() {
        this.resetArray();
    }


    applyAnimations = (animations)=>{
        for(let i=0;i<animations.length;i++){
            const arrayBars = document.getElementsByClassName('array-bar');
            const [key,barOneIdx,barTwoIdx] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            const color = SECONDARY_COLOR;
            if(key===-1){
                setTimeout(()=>{
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                },i*ANIMATION_SPEED_MS);
            }
            else{
                setTimeout(()=>{
                    [barOneStyle.height,barTwoStyle.height] = [barTwoStyle.height,barOneStyle.height];
                },i*ANIMATION_SPEED_MS);
            }
        }
    }


    heapSort = ()=>{
        const animations = getHeapSortAnimations(this.state.array);
        this.applyAnimations(animations);
    }



    quickSort = ()=>{
        const animations = getQuickSortAnimations(this.state.array);
        this.applyAnimations(animations);
    }

    mergeSort = ()=>{
       const animations = getMergeSortAnimations(this.state.array);
       for(let i=0;i<animations.length;i++){
           const arrayBars = document.getElementsByClassName('array-bar');
           const isColorChange = i%3 !== 2;
           if(isColorChange){
                const [barOneIdx,barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = (i%3 === 0)? SECONDARY_COLOR : PRIMARY_COLOR;
                barOneStyle.backgroundColor = color;
                barTwoStyle.backgroundColor = color;
                setTimeout(()=>{
                    barOneStyle.backgroundColor = "purple";
                    barTwoStyle.backgroundColor = "purple"; 
                }, i*ANIMATION_SPEED_MS);
           }
           else{
            setTimeout(()=>{
                const [barOneIdx,newHeight] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                barOneStyle.height = `${newHeight}px`;
            }, i*ANIMATION_SPEED_MS);
           }
        }
    }

    insertionSort = ()=>{
        const animations = getInsertionSortAnimations(this.state.array);
        for(let i=0;i<animations.length;i++){
            const arrayBars = document.getElementsByClassName('array-bar');
            const [barOneIdx,barTwoIdx] = animations[i];
            if(barOneIdx!==-1&&barTwoIdx!==-1){
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = SECONDARY_COLOR;
                setTimeout(()=>{
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                },i*ANIMATION_SPEED_MS);
            }
            else{
                i=i+1;
                const [barIdx,newHeight] = animations[i];
                const barStyle = arrayBars[barIdx].style;
                setTimeout(()=>{
                    barStyle.height = `${newHeight}px`;
                    barStyle.backgroundColor = 'purple';
                },i*ANIMATION_SPEED_MS);   
            }
        }
    }

    selectionSort = ()=>{
        const animations = getSelectionSortAnimations(this.state.array);
        for(let i=0;i<animations.length;i++){
            const arrayBars = document.getElementsByClassName('array-bar');
            const [barOneIdx,barTwoIdx] = animations[i];
            if(barOneIdx!==-1 &&barTwoIdx!==-1){
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = SECONDARY_COLOR;
                setTimeout(()=>{
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                },i*ANIMATION_SPEED_MS);
            }
            else{
                i=i+1;
                setTimeout(()=>{
                    const [barOneIdx,barTwoIdx] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    const barTwoStyle = arrayBars[barTwoIdx].style;
                    [barOneStyle.height,barTwoStyle.height] = [barTwoStyle.height,barOneStyle.height];
                    barOneStyle.backgroundColor = 'purple';
                },i*ANIMATION_SPEED_MS);
            }
        }
    }

    bubbleSort = ()=>{
        const animations = getBubbleSortAnimations(this.state.array);
        for(let i=0;i<animations.length;i++){
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = (i%3 !== 2);
            if(isColorChange){
                const [ barOneIdx,barTwoIdx ] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = (i%3===0)?SECONDARY_COLOR:PRIMARY_COLOR;
                setTimeout(()=>{
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i*ANIMATION_SPEED_MS);
             }
             else{
                setTimeout(()=>{
                  const [barOneIdx,barTwoIdx] = animations[i];
                  if(barOneIdx!==-1&&barTwoIdx!==-1){ 
                    const barOneStyle = arrayBars[barOneIdx].style;
                    const barTwoStyle = arrayBars[barTwoIdx].style;
                    [barOneStyle.height,barTwoStyle.height] = [barTwoStyle.height,barOneStyle.height];
                  }
                },i*ANIMATION_SPEED_MS);
             }
        }  
    }

    resetArray = () => {
        const array = [];
        for(let i=0;i<NUMBER_OF_ARRAY_BARS;i++)
            array.push(randomIntFromIntervals(5,580));
        this.setState({array});
    }

    render() {
        const { array } = this.state;
        return (
            <div className="array-container">
                <Header resetArray={this.resetArray}
                    mergeSort={this.mergeSort} 
                    insertionSort={this.insertionSort} 
                    bubbleSort={this.bubbleSort}
                    quickSort={this.quickSort}
                    selectionSort={this.selectionSort}
                    heapSort={this.heapSort}></Header>
                    <div className="clr"></div>
                    <div className="container">
                        {array.map((value,idx)=> (
                            <div className="array-bar" key={idx} style={{height: `${value}px`}}></div>
                        ))}
                    </div>
                    <div className="emptyDiv">&copy;Anil Kumar, 2020</div>
            </div>
        )
    }   
}


function randomIntFromIntervals(min,max){
    // min and max included
    return Math.floor(Math.random() * (max-min+1)+min);
}


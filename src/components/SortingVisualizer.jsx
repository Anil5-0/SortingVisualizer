import React from 'react'
import './SortingVisualizer.css';
import {Header} from '../components/Header';
import { getMergeSortAnimations } from '../sortingAlgo/mergeSort'
import { getBubbleSortAnimations } from '../sortingAlgo/bubbleSort';
import { getSelectionSortAnimations } from '../sortingAlgo/selectionSort';
import { getInsertionSortAnimations } from '../sortingAlgo/insertionSort';
import { getHeapSortAnimations } from '../sortingAlgo/heapSort';
import { getQuickSortAnimations } from '../sortingAlgo/quickSort';
 
const PRIMARY_COLOR = 'turquoise';
const SECONDARY_COLOR = 'red';
const NUMBER_OF_ARRAY_BARS = 310;

export default class SortingVisualizer extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            array: [],
            speed: 3,
        };
    }

    componentDidMount=()=>{
        this.resetArray();
    }

    disableButtons = () => {
        const buttons = document.getElementsByTagName('button');
        console.log(buttons);
        for(let i=0;i<buttons.length;i++)
            buttons[i].disabled = true;
        return buttons;
    }

    enableButtons = () => {
        const buttons = document.getElementsByTagName('button');
        for(let i=0;i<buttons.length;i++)
            buttons[i].disabled = false;
        return buttons;
    } 

    handleChange = () => {
        let speed = document.getElementById('speed');
        let curVal = speed.value;
        this.setState({speed:curVal});
    }

    applyAnimations = (animations)=>{
        for(let i=0;i<animations.length;i++){
            const ANIMATION_SPEED_MS = this.state.speed;
            const arrayBars = document.getElementsByClassName('array-bar');
            const [key,barOneIdx,barTwoIdx,color] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            if(key===-1){
                setTimeout(()=>{
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                },i*ANIMATION_SPEED_MS);
            }
            else if(key===-2){
                setTimeout(()=>{
                    [barOneStyle.height,barTwoStyle.height] = [barTwoStyle.height,barOneStyle.height];
                    barTwoStyle.backgroundColor = color;
                },i*ANIMATION_SPEED_MS);
            }
            else{
                setTimeout(()=>{
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
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
           const ANIMATION_SPEED_MS = this.state.speed;
           const arrayBars = document.getElementsByClassName('array-bar');
           const isColorChange = i%3 !== 2;
           if(isColorChange){
                const [barOneIdx,barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = (i%3 === 0)? SECONDARY_COLOR : PRIMARY_COLOR;
                setTimeout(()=>{
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
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
            const ANIMATION_SPEED_MS = this.state.speed;
            const arrayBars = document.getElementsByClassName('array-bar');
            const [barOneIdx,barTwoIdx] = animations[i];
            if(barOneIdx!==-1&&barTwoIdx!==-1){
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = SECONDARY_COLOR;
                setTimeout(()=>{
                    barOneStyle.backgroundColor = 'purple';
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
            const ANIMATION_SPEED_MS = this.state.speed;
            const arrayBars = document.getElementsByClassName('array-bar');
            const [barOneIdx,barTwoIdx,color] = animations[i];
            if(barOneIdx!==-1 &&barTwoIdx!==-1){
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                setTimeout(()=>{
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                },i*ANIMATION_SPEED_MS);
            }
            else{
                i=i+1;
                setTimeout(()=>{
                    const [barOneIdx,barTwoIdx,color] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    const barTwoStyle = arrayBars[barTwoIdx].style;
                    [barOneStyle.height,barTwoStyle.height] = [barTwoStyle.height,barOneStyle.height];
                    barOneStyle.backgroundColor = color;
                },i*ANIMATION_SPEED_MS);
            }
        }
    }

    bubbleSort = ()=>{
        const animations = getBubbleSortAnimations(this.state.array);
        for(let i=0;i<animations.length;i++){
            const ANIMATION_SPEED_MS = this.state.speed;
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
                arrayBars[barOneIdx].style.backgroundColor = 'turquoise';
                arrayBars[barTwoIdx].style.backgroundColor = 'turquoise';
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
        const arrayBars = document.getElementsByClassName('array-bar');
        for(let i=0;i<arrayBars.length;i++){
            arrayBars[i].style.backgroundColor = 'turquoise';
        } 
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
                    heapSort={this.heapSort}
                    handleChange={this.handleChange}></Header>
                    <div className="clr"></div>
                    <div className="container">
                        {array.map((value,idx)=> (
                            <div className="array-bar" key={idx} style={{height: `${value}px`}}></div>
                        ))}
                    </div>
                    <p>Click on reload to stop visualizing the algorithm</p>
                    <div className="emptyDiv">&copy;Anil Kumar, 2020</div>
            </div>
        )
    }   
}


function randomIntFromIntervals(min,max){
    // min and max included
    return Math.floor(Math.random() * (max-min+1)+min);
}


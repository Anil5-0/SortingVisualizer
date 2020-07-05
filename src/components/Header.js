import React, { Component } from 'react';
import './Header.css';

export class Header extends Component {
    render() {
        return (
            <div className="navBar">
                <button onClick={this.props.resetArray}>Generate New Array</button>
                <button id="btn" onClick={this.props.bubbleSort}>Bubble Sort</button>
                <button id="btn" onClick={this.props.mergeSort}>Merge Sort</button>
                <button id="btn" onClick={this.props.quickSort}>Quick Sort</button>
                <button id="btn" onClick={this.props.insertionSort}>Insertion Sort</button>
                <button id="btn" onClick={this.props.selectionSort}>Selection Sort</button>
                <button id="btn" onClick={this.props.heapSort}>Heap Sort</button>
                <label>Speed</label>
                <input id="speed" type="range" min="1" max="5" step="1" defaultValue="3" onChange={this.props.handleChange} /> 
                {/*<button onClick={() => window.location.reload(false)}>Refresh</button> */}
            </div>
        )
    }
}

export default Header;

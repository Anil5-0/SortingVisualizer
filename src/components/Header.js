import React, { Component } from 'react';
import './Header.css';

export class Header extends Component {
    render() {
        return (
            <div className="navBar">
                <button onClick={this.props.resetArray}>Generate New Array</button>
                <button onClick={this.props.mergeSort}>Merge Sort</button>
                <button onClick={this.props.insertionSort}>Insertion Sort</button>
                <button onClick={this.props.bubbleSort}>Bubble Sort</button>
                <button onClick={this.props.quickSort}>Quick Sort</button>
                <button onClick={this.props.heapSort}>Heap Sort</button>
                <button onClick={this.props.selectionSort}>Selection Sort</button>
                <button onClick={() => window.location.reload(false)}>Refresh</button>
            </div>
        )
    }
}

export default Header;

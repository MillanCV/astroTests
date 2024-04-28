import React from 'react';
import Sketch from 'react-p5';

let x = 100

function P5Sketch2() {
    const setup = (p5, canvasParentRef) => {
        p5.createCanvas(500, 400).parent(canvasParentRef);
    }

    const draw = (p5) => {
        p5.background(255, 120, 20);
        p5.ellipse(100, x, 100);

        x += 1
    }

    return (
        <Sketch setup={setup} draw={draw} />
    )
}

export default P5Sketch2;
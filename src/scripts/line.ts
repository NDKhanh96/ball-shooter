import { Graphics } from 'pixi.js';
import { Point } from '../type';

export class Line extends Graphics {
    constructor() {
        super();
    }

    draw(ballPoint: Point, mousePoint: Point): void {
        // clear the line before drawing
        this.clear();
        this.lineStyle(3, 'white', 1);
        // start point
        this.moveTo(ballPoint.x, ballPoint.y);
        // end point
        this.lineTo(mousePoint.x, mousePoint.y);
    }
}
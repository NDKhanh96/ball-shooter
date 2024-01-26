import { Graphics } from 'pixi.js';
import { Point } from '../type';

export class Line extends Graphics {
    constructor() {
        super();
    }

    draw(ballPoint: Point, mousePoint: Point): void {
        this.clear();
        this.lineStyle(3, 'white', 1);
        this.moveTo(ballPoint.x, ballPoint.y);
        this.lineTo(mousePoint.x, mousePoint.y);
        const dx: number = mousePoint.x - ballPoint.x, dy: number = mousePoint.y - ballPoint.y;
        const length: number = Math.hypot(dx, dy);
        const [nx, ny] = [dx / length, dy / length];
        const [ex, ey] = [mousePoint.x + (0 - mousePoint.y) / ny * nx, 0];

        this.lineTo(ex, ey);
        this.currentPath.closeStroke = false;
    }
}
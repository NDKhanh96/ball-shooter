import { Graphics } from 'pixi.js';
import { Point } from '../type';
import { gameWindow } from '../constants';

export class Line extends Graphics {
    constructor() {
        super();
    }

    reflect(ballPoint: Point, ex: number, ey: number, nx: number, ny: number): void {
        let hitEdgePoint: Point | undefined;

        if (ex <= 0) {
            hitEdgePoint = { x: 0, y: ballPoint.y - (ballPoint.x / nx) * ny };
            this.lineTo(hitEdgePoint.x, hitEdgePoint.y);
        } else if (ex >= gameWindow.width) {
            hitEdgePoint = { x: gameWindow.width, y: ballPoint.y + ((gameWindow.width - ballPoint.x) / nx) * ny };
            this.lineTo(hitEdgePoint.x, hitEdgePoint.y);
        } else {
            this.lineTo(ex, ey);
        }

        if (hitEdgePoint) {
            this.lineTo(- ex, ey);
        }
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

        this.reflect(ballPoint, ex, ey, nx, ny);
        this.currentPath.closeStroke = false;
    }
}
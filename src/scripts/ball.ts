import { Sprite, Texture } from 'pixi.js';
import { Point } from '../type';
import { ball } from '../constants';
import { app } from './app';

export class Ball extends Sprite {
    private _speed: number;
    constructor(image: string, x: number, y: number, speed: number) {
        super(Texture.from(ball.image));
        this.anchor.set(0.5);
        this.position.set(x, y);
        this._speed = speed;
    }

    move(mousePoint: Point): void {
        let elapsed = 0;
        const speed: number = 1 / this._speed;
        const dx: number = mousePoint.x - this.x;
        const dy: number = mousePoint.y - this.y;
        const length: number = Math.hypot(dx, dy);
        const [nx, ny] = [dx / length, dy / length];

        app.ticker.add((delta: number) => {
            elapsed += delta;
            // this.x, this.y is default movement value of Sprite
            this.x += nx * Math.abs(elapsed / speed);
            this.y += ny * Math.abs(elapsed / speed);
        });
    }
}
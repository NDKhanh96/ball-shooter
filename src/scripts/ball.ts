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
        let nx = dx / length;
        const ny = dy / length;

        const update = (delta: number) => {
            if (this.y <= 0) {
                app.ticker.remove(update);

                return;
            }

            elapsed += delta;

            if (this.x <= 0 || this.x >= app.screen.width) {
                nx *= -1;
            }

            this.x += nx * Math.abs(elapsed / speed);
            this.y += ny * Math.abs(elapsed / speed);
        };

        app.ticker.add(update);

    }
}
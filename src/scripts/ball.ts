import { Sprite, Texture, FederatedPointerEvent } from 'pixi.js';
import { ball } from '../constants';

export class Ball extends Sprite {
    constructor(image: string, x: number, y: number) {
        super(Texture.from(ball.image));
        this.anchor.set(0.5);
        this.position.set(x, y);
    }

    moveBall(e: FederatedPointerEvent): void {
        const position = e.global;
        this.position.set(position.x, position.y);
    }
}
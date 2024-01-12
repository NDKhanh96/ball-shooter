import { Sprite, Texture } from 'pixi.js';
import { Point } from '../types/point';
import { ball } from '../constants';
import { app } from './app';

export class Ball extends Sprite {
	private _x: number;
	private _y: number;
	constructor(image: string, x: number, y: number) {
		super(Texture.from(ball.image));
		this.anchor.set(0.5);
		this.position.set(x, y);
		this._x = x;
		this._y = y;
	}

	getPointDirection(): Point {
		return app.renderer.events.pointer.global;
	}

	updatePosition(pointDirection: Point): void {
		const direction = { x: pointDirection.x - this._x, y: pointDirection.y - this._y };
		const length: number = Math.sqrt(direction.x * direction.x + direction.y * direction.y);
		const normalizedDirection = { x: direction.x / length, y: direction.y / length };

		this._x += normalizedDirection.x;
		this._y += normalizedDirection.y;
	}

	checkStopCondition(): boolean {
		const shouldStop: boolean = this._y <= 0;
		if (shouldStop) {
			this._y = 0;
		}

		return shouldStop;
	}

	move(pointDirection: Point): void {
		const tickerCallback = (): void => {
			this.updatePosition(pointDirection);

			if (this.checkStopCondition()) {
				app.ticker.remove(tickerCallback);
			}
		};

		app.ticker.add(tickerCallback);
	}

}
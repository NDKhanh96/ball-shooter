import { Sprite, Texture } from 'pixi.js';
import { Point } from '../type';
import { ball } from '../constants';
import { app } from './app';

export class Ball extends Sprite {
	private _x: number;
	private _y: number;
	private _speed: number;
	constructor(image: string, x: number, y: number, speed: number) {
		super(Texture.from(ball.image));
		this.anchor.set(0.5);
		this.position.set(x, y);
		this._x = x;
		this._y = y;
		this._speed = speed;
	}

	move(pointDirection: Point): void {
		let elapsed = 0;
		const speed = 1 / this._speed;
		
		app.ticker.add((delta) => {
			elapsed += delta;

			// this.x & this.y bigger will move faster
			// this.x = this._x + Math.abs(elapsed / speed);
			// this.y = this._y + Math.abs(elapsed / speed);



			const dirX = pointDirection.x;
			const dirY = pointDirection.y;

			// Move the ball in the direction of the pointDirection
			this.x += dirX * Math.abs(elapsed / speed);
			this.y += dirY * Math.abs(elapsed / speed);
		});
	}

	// updatePosition(pointDirection: Point): void {
	// 	const direction = { x: pointDirection.x - this._x, y: pointDirection.y - this._y };
	// 	const length: number = Math.sqrt(direction.x * direction.x + direction.y * direction.y);
	// 	const normalizedDirection = { x: direction.x / length, y: direction.y / length };

	// 	this._x += normalizedDirection.x * this._speed;
	// 	this._y += normalizedDirection.y * this._speed;
        
	// 	console.log(this._x, this._y);
	// }

	// checkStopCondition(): boolean {
	// 	const shouldStop: boolean = this._y <= 0;

	// 	if (shouldStop) {
	// 		this._y = 0;
	// 	}

	// 	return shouldStop;
	// }

	// move(pointDirection: Point): void {
	// 	const tickerCallback = (): void => {
	// 		this.updatePosition(pointDirection);

	// 		if (this.checkStopCondition()) {
	// 			app.ticker.remove(tickerCallback);
	// 		}
	// 	};

	// 	app.ticker.add(tickerCallback);
	// }

}
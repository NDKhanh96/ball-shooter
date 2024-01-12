import './index.css';
import * as constants from './constants';
import { app } from './scripts/app';
import { Ball } from './scripts/ball';

window.onload = (): void => {
	document.body.appendChild(app.view);

	const ball = new Ball(constants.ball.image, app.screen.width / 2, app.screen.height);
	app.stage.addChild(ball);
	app.stage.eventMode = 'dynamic';

	// move the ball
	// playerBall.moveBall();

	app.renderer.view.addEventListener('click', function (e: MouseEvent): void {
		const rect = app.renderer.view.getBoundingClientRect();
		const pointDirection = {
			x: e.clientX - rect.left,
			y: e.clientY - rect.top
		};

		ball.move(pointDirection);
		// console.log(pointDirection);
	});
};
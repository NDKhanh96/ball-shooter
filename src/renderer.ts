import './index.css';
import * as constants from './constants';
import { app } from './scripts/app';
import { Ball } from './scripts/ball';
import { Line } from './scripts/line';

window.onload = (): void => {
    document.body.appendChild(app.view);

    const ball = new Ball(constants.ball.image, app.screen.width / 2, app.screen.height / 2, 0.0001);
    const line = new Line();

    app.stage.addChild(ball);
    app.stage.addChild(line);
    app.stage.eventMode = 'dynamic';

    // move the ball
    // playerBall.moveBall();

    // app.renderer.view.addEventListener('click', function (e: MouseEvent): void {
    // 	const rect = app.renderer.view.getBoundingClientRect();
    // 	const pointDirection = {
    // 		x: e.clientX - rect.left,
    // 		y: e.clientY - rect.top
    // 	};

    // 	ball.move(pointDirection);
    // });

    app.renderer.view.addEventListener('mousemove', function (e: MouseEvent): void {
        const ballPoint = {
            x: ball.x,
            y: ball.y
        };
        const mousePoint = {
            x: e.clientX,
            y: e.clientY
        };

        line.draw(ballPoint, mousePoint);
    });
};
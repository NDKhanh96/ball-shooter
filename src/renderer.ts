import './index.css';
import * as constants from './constants';
import { app } from './scripts/app';
import { Ball } from './scripts/ball';
import { Line } from './scripts/line';

window.onload = (): void => {
    document.body.appendChild(app.view);

    const ball = new Ball(constants.ball.image, app.screen.width / 2, app.screen.height, 0.1);
    const line = new Line();

    // add to the stage to render
    app.stage.addChild(ball);
    app.stage.addChild(line);
    app.stage.eventMode = 'dynamic';
    app.renderer.view.addEventListener('click', function (e: MouseEvent): void {
        const mousePoint = {
            x: e.clientX,
            y: e.clientY
        };

        ball.move(mousePoint);
    });

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
import './index.css';
import { ball } from './constants';
import { app } from './scripts/app';
import { Ball } from './scripts/ball';

window.onload = (): void => {
    document.body.appendChild(app.view);

    const playerBall = new Ball(ball.image, app.screen.width / 2, app.screen.height / 2);
    app.stage.addChild(playerBall);
    app.stage.eventMode = 'dynamic';
    app.ticker.add(() => {
        const mousePosition = app.renderer.plugins.interaction.pointer.global;
        playerBall.position.set(mousePosition.x, mousePosition.y);
    });
};
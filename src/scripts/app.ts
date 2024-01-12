import * as PIXI from 'pixi.js';
import { gameWindow } from '../constants';

export const app = new PIXI.Application<HTMLCanvasElement>({
        backgroundColor: gameWindow.backgroundColor,
        resizeTo: window
    });
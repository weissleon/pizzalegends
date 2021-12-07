import Overworld from './classes/Overworld.js';

const canvas = document.querySelector('#game-canvas');

// constants
const CANVAS_WIDTH = 352;
const CANVAS_HEIGHT = 198;

canvas.setAttribute('width', CANVAS_WIDTH);
canvas.setAttribute('height', CANVAS_HEIGHT);

const overWorld = new Overworld({
	element: document.querySelector('#game-container'),
});
overWorld.init();

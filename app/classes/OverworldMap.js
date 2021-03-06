import GameObject from './GameObject.js';
import Person from './Person.js';
import { withGrid } from './utils.js';

class OverworldMap {
	constructor(config) {
		this.gameObjects = config.gameObjects;

		this.lowerImage = new Image();
		this.lowerImage.src = config.lowerSrc;

		this.upperImage = new Image();
		this.upperImage.src = config.upperSrc;
	}

	drawLowerImage(ctx) {
		ctx.drawImage(this.lowerImage, 0, 0);
	}

	drawUpperImage(ctx) {
		ctx.drawImage(this.upperImage, 0, 0);
	}
}

window.OverworldMaps = {
	DemoRoom: {
		lowerSrc: '/images/maps/DemoLower.png',
		upperSrc: '/images/maps/DemoUpper.png',
		gameObjects: {
			hero: new Person({
				isPlayerControlled: true,
				position: { x: withGrid(5), y: withGrid(6) },
				src: '/images/characters/people/hero.png',
			}),
			npc1: new Person({
				position: { x: withGrid(7), y: withGrid(9) },
				src: '/images/characters/people/npc1.png',
			}),
		},
	},
	Kitchen: {
		lowerSrc: '/images/maps/KitchenLower.png',
		upperSrc: '/images/maps/KitchenUpper.png',
		gameObjects: {
			hero: new GameObject({
				position: { x: withGrid(3), y: withGrid(5) },
				src: '/images/characters/people/hero.png',
			}),
			npc2: new GameObject({
				position: { x: withGrid(9), y: withGrid(6) },
				src: '/images/characters/people/npc2.png',
			}),
			npc3: new GameObject({
				position: { x: withGrid(10), y: withGrid(8) },
				src: '/images/characters/people/npc3.png',
			}),
		},
	},
	Street: {},
};

export default OverworldMap;

import GameObject from './GameObject.js';

class Overworld {
	constructor(config) {
		this.element = config.element;
		this.canvas = this.element.querySelector('#game-canvas');
		this.ctx = this.canvas.getContext('2d');
	}

	init() {
		const image = new Image();
		image.src = './images/maps/DemoLower.png';
		image.onload = () => {
			this.ctx.drawImage(image, 0, 0);
		};

		// Placing Game Objects
		const hero = new GameObject({
			position: { x: 5, y: 6 },
			src: '/images/characters/people/hero.png',
		});

		const npc1 = new GameObject({
			position: { x: 7, y: 9 },
			src: '/images/characters/people/npc1.png',
		});

		setTimeout(() => {
			hero.sprite.draw(this.ctx);
			npc1.sprite.draw(this.ctx);
		}, 200);
	}
}

export default Overworld;

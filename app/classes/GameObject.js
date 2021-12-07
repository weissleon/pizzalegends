import Sprite from './Sprite.js';

class GameObject {
	constructor(config) {
		this.position = config.position || { x: 0, y: 0 };
		this.direction = config.direction || 'down';
		this.sprite = new Sprite({
			gameObject: this,
			src: config.src || '/images/characters/people/hero.png',
		});
	}
	update() {}
}

export default GameObject;

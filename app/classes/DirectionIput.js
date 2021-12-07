class DirectionInput {
	constructor() {
		this.heldDrections = [];

		this.map = {
			ArrowUp: 'up',
			ArrowDown: 'down',
			ArrowLeft: 'left',
			ArrowRight: 'right',
			KeyW: 'up',
			KeyS: 'down',
			KeyA: 'left',
			KeyD: 'right',
		};
	}

	get direction() {
		return this.heldDrections[0];
	}

	init() {
		document.addEventListener('keydown', (e) => {
			const dir = this.map[e.code];
			if (dir && this.heldDrections.indexOf(dir) === -1) {
				this.heldDrections.unshift(dir);
				console.log(this.heldDrections);
			}
		});

		document.addEventListener('keyup', (e) => {
			const dir = this.map[e.code];
			const index = this.heldDrections.indexOf(dir);
			if (index > -1) {
				this.heldDrections.splice(index, 1);
				console.log(this.heldDrections);
			}
		});
	}
}

export default DirectionInput;

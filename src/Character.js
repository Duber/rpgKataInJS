function Character() {
	var INITIAL_HEALTH = 1000;
	var health = INITIAL_HEALTH;

	return {
   		attack: function(target, damage) {
   			target.receiveAttack(damage)
   		},
		health: health,
		receiveAttack: function(damage){
			this.health = this.health - damage;
		}

	}

}
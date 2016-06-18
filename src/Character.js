function Character(customInitialHealth) {
	var INITIAL_HEALTH = 1000;
	var MAX_HEALED_HEALTH = 1000;
	var MIN_HEALTH = 0;

	var initialHealth = function(customInitialHealth){
		if (typeof customInitialHealth == 'undefined'){
			return INITIAL_HEALTH 
		}

		return customInitialHealth;
	};

	var health = initialHealth(customInitialHealth);
	
	return {
   		attack: function(target, damage) {
   			target.receiveAttack(damage)
   		},
		
		health: health,
		
		receiveAttack: function(damage){
			var resultantHealth = this.health - damage;
			resultantHealth = (resultantHealth < MIN_HEALTH) ? MIN_HEALTH : resultantHealth;
			this.health = resultantHealth;
		},

		heal: function(healthPoints){
			if (!this.alive()){
				return;
			} 
			var resultantHealth = this.health + healthPoints;
			resultantHealth = (resultantHealth > MAX_HEALED_HEALTH) ? MAX_HEALED_HEALTH : resultantHealth;
			this.health = resultantHealth;
		},

		alive: function(){
			return (this.health > MIN_HEALTH);
		}

	}
}


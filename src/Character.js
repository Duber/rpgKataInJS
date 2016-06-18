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

	var updateHealth = function(deltaPoints){
		var resultantHealth = health + deltaPoints;
		if (resultantHealth > MAX_HEALED_HEALTH){
			return MAX_HEALED_HEALTH;
		}
		if (resultantHealth < MIN_HEALTH){
			return MIN_HEALTH;
		}
		return resultantHealth;
	}
 
	
	return {
   		attack: function(target, damage) {
 			var mySelf = this;
   			if(mySelf == target) {
   				return;
   			}
   			target.receiveAttack(damage)
   		},
		
		health: health,
		
		receiveAttack: function(damage){
			this.health = updateHealth(damage * -1);
		},

		heal: function(healthPoints){
			if (!this.alive()){
				return;
			}													
			this.health = updateHealth(healthPoints);
		},

		alive: function(){
			return (this.health > MIN_HEALTH);
		}
	}
}


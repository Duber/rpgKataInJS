function Character(customInitialHealth, customInitialLevel) {
	var INITIAL_HEALTH = 1000;
	var INITIAL_LEVEL = 1;
	var MAX_HEALED_HEALTH = 1000;
	var MIN_HEALTH = 0;

	var initialHealth = function(customInitialHealth){
		if (typeof customInitialHealth == 'undefined'){
			return INITIAL_HEALTH
		}
		return customInitialHealth;
	};

	var initialLevel = function(customInitialLevel){
		if(typeof customInitialLevel == 'undefined'){
			return INITIAL_LEVEL;
		}
		return customInitialLevel;
	}

	var health = initialHealth(customInitialHealth);

	var level = initialLevel(customInitialLevel);

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
		health: health,

		level: level,

		attack: function(target, damage) {
			var mySelf = this;
			if(mySelf == target) {
				return;
			}
			if (mySelf.level - target.level >= 5){
				damage = damage * 2;
			}
			target.receiveAttack(damage)
		},

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

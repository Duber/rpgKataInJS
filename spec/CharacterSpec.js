describe("A Character", function() {
  var INITIAL_HEALTH = 1000;

  it("dies if his health reaches zero", function(){
    var customInitialHealth = 0;
    var character = new Character(customInitialHealth);

    expect(character.alive()).toEqual(false);
  });

  describe("is born", function(){
    it("with 1000 health points", function(){
      var character = new Character();

      expect(character.health).toEqual(INITIAL_HEALTH);
    });

    it("with level 1", function(){
      var character = new Character();

      expect(character.level).toEqual(1)
    });
  });

  describe("attacked", function(){
    it("receives damage", function(){
      var offender = new Character();
      var target = new Character();
      var damage = 666;

      offender.attack(target, damage);

      expect(target.health).toEqual(INITIAL_HEALTH - damage);
    });

    it("dies if receives more damage than its current health", function(){
      var offender = new Character();
      var target = new Character();
      var damage = 1001;

      offender.attack(target, damage);

      expect(target.alive()).toEqual(false);
      expect(target.health).toEqual(0);
    });

    it("by himself doesn't receive any damage", function(){
      var character = new Character();
      var characterInitialHealth = character.health;

      character.attack(character);

      expect(character.health).toEqual(characterInitialHealth)
    })

    it("by a player 5 levels above, receives double damage", function(){
      var offenderLevel = 6;
      var offender = new Character(INITIAL_HEALTH, offenderLevel);
      var target = new Character();
      var damage = INITIAL_HEALTH / 2;

      offender.attack(target, damage);

      expect(target.alive()).toEqual(false);
    });

    it("by a player 5 levels below, receives half damage", function(){
      var offender = new Character();
      var targetLevel = 6;
      var target = new Character(INITIAL_HEALTH, targetLevel);
      var damage = 500;
      var halfDamage = damage / 2;

      offender.attack(target, damage);

      expect(target.health).toEqual(INITIAL_HEALTH - halfDamage);
    });
  })

  describe("dead", function() {
    it("cannot be healed", function(){
      var customInitialHealth = 0;
      var character = new Character(customInitialHealth);
      var anyPoints = 66;

      character.heal(anyPoints);
      expect(character.alive()).toEqual(false);
    });
  });

  describe("healed", function(){
    it("recovers health", function(){
      var customInitialHealth = 800;
      var character = new Character(customInitialHealth);
      var healPoints = 100;

      character.heal(healPoints);

      expect(character.health).toEqual(customInitialHealth + healPoints);
    });

    it("cannot recover over 1000 points", function(){
      var customInitialHealth = 1000;
      var character = new Character(customInitialHealth);
      var healPoints = 100;

      character.heal(healPoints);

      expect(character.health).toEqual(customInitialHealth);
    });
  });

});

describe("A Character", function() {

  it("is born with 1000 health points", function(){
    var character = new Character();

    expect(character.health).toEqual(1000);
  });

  it("dies if his health reaches zero", function(){
      var customInitialHealth = 0;
      var character = new Character(customInitialHealth);

      expect(character.alive()).toEqual(false);
  });

  it("can heal himself", function(){
      
  });

  describe("when attacked", function(){
    it("receives damage", function(){
        var offender = new Character();
        var target = new Character();
        var damage = 666;

        offender.attack(target, damage);

        expect(target.health).toEqual(1000 - damage);
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
  })


  describe("when dead", function() {
     it("cannot be healed", function(){
      var customInitialHealth = 0;
      var character = new Character(customInitialHealth);
      var anyPoints = 66;

      character.heal(anyPoints);
      expect(character.alive()).toEqual(false);
    });
  });

  describe("when healed", function(){
    it("recovers health", function(){
        var customInitialHealth = 800;
        var character = new Character(customInitialHealth);
        var healPoints = 100;

        character.heal(healPoints);

        expect(character.health).toEqual(customInitialHealth + healPoints);
    });

    it("Cannot recover over 1000 points", function(){
        var customInitialHealth = 1000;
        var character = new Character(customInitialHealth);
        var healPoints = 100;

        character.heal(healPoints);

        expect(character.health).toEqual(1000);
    });
  });

 

});

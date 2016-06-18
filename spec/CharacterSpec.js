describe("Character", function() {

  it("Is born with 1000 health points", function(){
    var character = new Character();

    expect(character.health).toEqual(1000);
  });

  it("Dies if health is zero", function(){
      var customInitialHealth = 0;
      var character = new Character(customInitialHealth);

      expect(character.alive()).toEqual(false);
  });

  describe("attacked", function(){
    it("receives damage", function(){
        var offender = new Character();
        var target = new Character();
        var damage = 666;

        offender.attack(target, damage);

        expect(target.health).toEqual(1000 - damage);
    });

    it("dies if receives more damage than its health", function(){
        var offender = new Character();
        var target = new Character();
        var damage = 1001;

        offender.attack(target, damage);

        expect(target.alive()).toEqual(false);
        expect(target.health).toEqual(0);
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

    it("Cannot recover over 1000 points", function(){
        var customInitialHealth = 1000;
        var character = new Character(customInitialHealth);
        var healPoints = 100;

        character.heal(healPoints);

        expect(character.health).toEqual(1000);
    });
  });

 

});

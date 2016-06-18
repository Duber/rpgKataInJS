describe("Character", function() {

  it("Can deal damage", function(){
      var offender = new Character();
      var target = new Character();
      var damage = 666;

      offender.attack(target, damage);

      expect(target.health).toEqual(1000 - 666);
  })


});

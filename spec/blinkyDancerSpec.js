describe('blinkyDancer', function() {

  var blinkyDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    blinkyDancer = new makeBlinkyDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(blinkyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(blinkyDancer.$node, 'toggle');
    blinkyDancer.step();
    expect(blinkyDancer.$node.toggle.called).to.be.true;
  });
  
  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(blinkyDancer, 'step');
      expect(blinkyDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(blinkyDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(blinkyDancer.step.callCount).to.be.equal(2);
    });
  });


  beforeEach(function() {
    newDancer = new makeDancer(11, 21, timeBetweenSteps);
  });

  describe('newDancer', function() {
    it('should call the slideDown and slideUp functions from jQuery', function() {
      sinon.spy(newDancer, 'step');

      it('should have a step function that makes its node slideUp and slideDown', function() {
        sinon.spy(newDancer.$node, 'slideUp().slideDown()');
        newDancer.step();
        expect(newDancer.$node.slideUp().slideDown().called).to.be.true;
      });
    });
  });


  beforeEach(function() {
    newDancer3 = new makeDancer(11, 21, timeBetweenSteps);
  });

  describe('newDancer3', function() {
    it('should call step at least once per second and the slideDown function', function() {
      sinon.spy(newDancer3, 'step');

      it('should have a step function that makes its node slideUp and slideDown', function() {
        sinon.spy(newDancer3.$node, 'slideDown()');
        newDancer3.step();
        expect(newDancer3.$node.slideDown().called).to.be.true;
      });
    });
  });

});

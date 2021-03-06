var newDancer2 = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.removeClass( 'ryu' ).addClass('guile');
};

newDancer2.prototype = Object.create(makeDancer.prototype);
newDancer2.prototype.constructor = newDancer2;

newDancer2.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  makeDancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.slideDown();
}; 

import Component from '@ember/component';
import {
  get,
  set
} from '@ember/object';

var RESULTS = [];

export default Component.extend({
  didInsertElement: function() {
    this.setReel('reel1', 0, 100);
    this.setReel('reel2', 0, 200);
    this.setReel('reel3', 0, 300);
  },
  setReel(name, active, delay) {
    let reel = this.$(`.${name}`).slotMachine({
      active,
      delay
    });
    set(this, name, reel);
  },
  onComplete(active) {
    RESULTS.push(active);
    if (RESULTS.length == 3) {
      if (RESULTS[0] == RESULTS[1]) {
        console.log(`win`);
      } else {
        console.log(`loss`);
      }
      console.log(`${RESULTS[0]} ${RESULTS[1]} ${RESULTS[2]}`);
    }
  },
  actions: {
    shuffle() {
      // clear rell for start
      RESULTS = [];
      // shuffle slot reel
      get(this, 'reel1').shuffle(5, this.onComplete);
      get(this, 'reel2').shuffle(5, this.onComplete);
      get(this, 'reel3').shuffle(5, this.onComplete);
    }
  }
});
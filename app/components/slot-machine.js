import Component from '@ember/component';
import {get,
  set
} from '@ember/object';

var RESULTS = [];

export default Component.extend({
  /*
   * Sets up Component VARs:
   * - reel1, reel2
   */
  didInsertElement: function() {
    let reel1 = this.$('.reel1').slotMachine({
      active: 0,
      delay: 100
    });
    set(this, 'reel1', reel1);

    let reel2 = this.$('.reel2').slotMachine({
      active: 1,
      delay: 200
    });
    set(this, 'reel2', reel2);

    let reel3 = this.$('.reel3').slotMachine({
      active: 1,
      delay: 300
    });
    set(this, 'reel3', reel3);
  },
  onComplete(active) {
    RESULTS.push(active);
    if (RESULTS.length == 2) {
      if (RESULTS[0] == RESULTS[1]) {
        console.log(`win: ${RESULTS[0]} ${RESULTS[1]}`);
      } else {
        console.log(`loss: ${RESULTS[0]} ${RESULTS[1]}`);
      }
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
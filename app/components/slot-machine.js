import Component from '@ember/component';
import {get,
  set
} from '@ember/object';

var REEL = [];

export default Component.extend({
  /*
   * Sets up Component VARs:
   * - machine1, machine2
   */
  didInsertElement: function() {
    let machine1 = this.$('.machine1').slotMachine({
      active: 0,
      delay: 100
    });
    set(this, 'machine1', machine1);

    let machine2 = this.$('.machine2').slotMachine({
      active: 1,
      delay: 200
    });
    set(this, 'machine2', machine2);

    let machine3 = this.$('.machine3').slotMachine({
      active: 1,
      delay: 300
    });
    set(this, 'machine3', machine3);
  },
  onComplete(active) {
    REEL.push(active);
    if (REEL.length == 2) {
      if (REEL[0] == REEL[1]) {
        console.log(`win: ${REEL[0]} ${REEL[1]}`);
      } else {
        console.log(`loss: ${REEL[0]} ${REEL[1]}`);
      }
    }
  },
  actions: {
    shuffle() {
      // clear rell for start
      REEL = [];
      // shuffle slot machine
      get(this, 'machine1').shuffle(5, this.onComplete);
      get(this, 'machine2').shuffle(5, this.onComplete);
      get(this, 'machine3').shuffle(5, this.onComplete);
    }
  }
});
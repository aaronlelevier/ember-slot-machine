import Component from '@ember/component';
import {
  get,
  set
} from '@ember/object';

let RESULTS = [];
const NUMBER_OF_REELS = 5;

export default Component.extend({
  // At this point jQuery onWindow load has completed
  // Calling this makes sure that only 3 slot reel icons are showing
  didInsertElement: function() {
    for (let i=1; i<NUMBER_OF_REELS+1; i++) {
      this.setReel(`reel${i}`, i*50);
    }
  },
  setReel(name, delay) {
    let reel = this.$(`.${name}`).slotMachine({
      active: 0,
      delay
    });
    set(this, name, reel);
  },
  onComplete(active) {
    RESULTS.push(active);
    if (RESULTS.length == NUMBER_OF_REELS) {
      console.log(`Results: ${RESULTS}`);
    }
  },
  actions: {
    // call to spin the slot reels
    shuffle() {
      // reset reel for start
      RESULTS = [];

      for (let i=1; i<NUMBER_OF_REELS+1; i++) {
        get(this, `reel${i}`).shuffle(5, this.onComplete);
      }
    }
  }
});
import Component from '@ember/component';

export default Component.extend({
  didInsertElement: function() {
    let slotMachine = this.$('.machine1').slotMachine({
      active: 0,
      delay: 500
    });
    this.set('slotmachine', slotMachine);
  }
});
import 'ion-rangeslider';

class RangeInput {
  constructor(el) {
    this.el = el;
    this.$minVal = $(el).data('range-min');
    this.$maxVal = $(el).data('range-max');
    this.$defaultVal = $(el).data('range-default');

    this.init();
  }

  init() {
    $(this.el).ionRangeSlider({
      min: this.$minVal,
      max: this.$maxVal,
      from: this.$defaultVal
    });
  }
}

$('.js-input-range').each((i, el) => {
  new RangeInput(el);
});

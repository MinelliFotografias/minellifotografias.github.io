import Slider from './Slider';

export default class Carousel extends Slider {
  constructor(config) {
    config.parentSelector = '.carousel';
    super(config);
  }

  compose() {
    const comp = super.compose();
    const kids = Array.prototype.slice.call(this.children);
    const position = this.index + 1;
    const total = kids.length;
    kids.forEach((kid, i) => {
      let itemOrder = i - position + 1;
      if (itemOrder < 0) itemOrder = total - position + i + 1;
      kid.setAttribute('data-order', itemOrder);
      if (itemOrder === total - 1) kid.setAttribute('data-order', 'last');
    });
    return comp;
  }

}
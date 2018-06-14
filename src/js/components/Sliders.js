import 'slick-carousel';

class Sliders {
  constructor () {
    this.$slider = $('.slider');
    this.$clientsSld = $('.clients__slider');
    this.$mobSlider = $('.mob-slider');

    const arrLeft = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="25" height="43" viewBox="0 0 25 43">
    <defs>
        <path id="i6tca"
              d="M196.72 2737l17.95-18.07c.44-.44.44-1.15 0-1.6a1.12 1.12 0 0 0-1.6 0l-18.74 18.87a1.13 1.13 0 0 0 0 1.6l18.75 18.86a1.1 1.1 0 0 0 1.58 0c.44-.44.44-1.15 0-1.6z"/>
    </defs>
    <g>
        <g transform="translate(-192 -2715)">
            <use xlink:href="#i6tca"/>
        </g>
    </g>
</svg>`;
    const arrRight = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="25" height="43" viewBox="0 0 25 43">
        <defs>
            <path id="vmhva"
                  d="M1403.28 2737l-17.92-18.07a1.13 1.13 0 0 1 0-1.6 1.11 1.11 0 0 1 1.59 0l18.72 18.87c.44.45.44 1.16 0 1.6l-18.72 18.86a1.1 1.1 0 0 1-1.58 0 1.13 1.13 0 0 1 0-1.6z"/>
        </defs>
        <g>
            <g transform="translate(-1383 -2715)">
                <use xlink:href="#vmhva"/>
            </g>
        </g>
    </svg>`;

    this.defaultSlickOpts = {
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      infinite: true,
      arrows: true,
      prevArrow: `<button type="button" class="slider__btn slider__btn_prev">${arrLeft}</button>`,
      nextArrow: `<button type="button" class="slider__btn slider__btn_next">${arrRight}</button>`,
      speed: 800,
      useTransform: true,
      adaptiveHeight: false,
      accessibility: false,
      swipe: true,
      rows: 0
    };

    this.init();
  }

  init() {
    if (this.$slider.length) this.createSlider();
    if (this.$clientsSld.length) this.clientsSlider();
  }

  createSlider() {
    const _this = this;

    this.$slider.each(function (i, slider) {

      $(slider).slick($.extend({}, _this.defaultSlickOpts, {
        infinite: true,
        responsive: [
          {
            breakpoint: 767,
            settings: {
              adaptiveHeight: true
            },
          }]
      }));
    });
  }

  clientsSlider() {
    const _this = this;

    this.$clientsSld.each(function (i, slider) {

      $(slider).slick($.extend({}, _this.defaultSlickOpts, {
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 6,
        responsive: [
          {
            breakpoint: 1250,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3
            },
          }, {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            },
          }]
      }));
    });
  }

}

export default new Sliders();

import {
  $scrolledElements,
  $body,
  css,
  Resp,
} from '../modules/dev/_helpers';

class Header {
  constructor () {
    this.$nav = $('.header__nav');
    this.$navBtn = $('.header__nav-btn');

    this.init();
  }

  init () {

    this.scrollToSection();

    if (!Resp.isDesk) {
      this.toggleNav();
    }
  }

  toggleNav () {
    const _this = this;
    this.$navBtn.on('click tap', function () {
      $(this).toggleClass(css.active);
      _this.$nav.slideToggle();
    });
  }

  scrollToSection() {
    const _this = this;
    const navItem = this.$nav.find('ul li a');

    navItem.on('click', function (e) {
      e.preventDefault();
      const el = $(this).attr('href');

      if (!Resp.isDesk) {
        _this.$nav.slideUp();
        _this.$navBtn.removeClass(css.active);
      }

      $scrolledElements.animate({ scrollTop: $(el).offset().top }, 1000);
      return false;
    });
  }

}

export const HeaderAPI = new Header();

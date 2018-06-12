import {
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

    if (!Resp.isDesk) {
      this.toggleNav();
    }
  }

  toggleNav () {
    const _this = this;
    this.$navBtn.on('click tap', function () {
      $(this).toggleClass(css.active);
      $body.toggleClass(css.locked);
      _this.$nav.slideToggle();
    });
  }

}

export const HeaderAPI = new Header();

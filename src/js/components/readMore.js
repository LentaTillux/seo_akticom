//initReadMore('.js-cases__info-descr');

function initReadMore($parentSelector) {
  const $parent = $($parentSelector);
  const $readMore = $('.js-read-more');
  const $readMoreParent = $('.js-read-more').closest($parentSelector);

  $readMore.each(function () {
    const $this = $(this);
    $this.on('click', function () {
      $readMoreParent.toggleClass('is-show');
    });
  });
}
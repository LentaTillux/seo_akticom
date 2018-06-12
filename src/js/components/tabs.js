initTabs();

function initTabs() {
  const $tabs = $('.tabs');

  $tabs.each(function () {
    const $this = $(this);
    const $tabsBtn = $this.find('.tabs__nav').find('button');
    const $tabsContent = $this.find('.tabs__content');

    $tabsContent.each(function () {
      const $item = $(this).find('.tabs__content-item');

      $item.not(':first').hide();
    });

    $tabsBtn.on('click', function () {
      const $index = $(this).index();

      $tabsBtn.removeClass('is-active').eq($index).addClass('is-active');

      $tabsContent.each(function () {
        const $tabItem = $(this).find('.tabs__content-item');

        $tabItem.slideUp().eq($index).slideDown();
      });

    }).eq(0).addClass('is-active');
  });
}

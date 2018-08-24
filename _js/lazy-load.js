export default function() {
  let $image = $('.lazy-image');

  let injectImageSrc = () => {
    $image.each( (i, el) => {
      let $t = $(el);
      let $src = $t.attr('data-lazy');
      $t.attr('src', $src);
      $t.on('load', () => $t.parents('figure').addClass('is-loaded'));
    })
  }

  $(window).on('load', injectImageSrc)
}
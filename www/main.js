$(document).ready(function () {
  $('.ask-text').textillate({
    loop: true,
    sync: true,
    in: {
      effect: 'bounceIn',
      delayScale: 1.5,
      delay: 50,
    },
    out: {
      effect: 'bounceOut',
      delayScale: 1.5,
      delay: 50,
    }
  });
});

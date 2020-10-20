(function($) {
  $(function() {
    const sPageURL = window.location.search;
    const urlParams = new URLSearchParams(sPageURL);
    if (urlParams.has('swish')) {
      const surl = urlParams.get('swish');
      const surlParams = new URLSearchParams(surl);
      if (surlParams.has('callbackurl')) {
        const iurl = decodeURIComponent(surlParams.get('callbackurl'));
        const iParams = new URLSearchParams(iurl);
        if (iParams.has('order')) {
          alert(iParams.get('order'))
        }
      }
    }
  });
})(jQuery);

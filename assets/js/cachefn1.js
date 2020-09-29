(function($) {
  function jsonToURI(json){ return encodeURIComponent(JSON.stringify(json)); }
  function uriToJSON(urijson){ return JSON.parse(decodeURIComponent(urijson)); }
  function goToUri(uri) {
    var start, end, elapsed;
    start = new Date().getTime();
    document.location = uri;
    end = new Date().getTime();
    elapsed = (end - start);
    if (elapsed < 2) {
      $('#swish-qr').show();
    }
  }
  var swishFunc = function(event){
    var $button = $(this);
    var datamsg = {"amount":{"value":1000,"editable":false},"message":{"value":"TEST","editable":false},"payee":{"value":"123 342 54 44","editable":false},"version":1};
    var dataenc = jsonToURI(datamsg);
    var req = "swish://payment?data="+dataenc;
    goToUri(req);
  }
  $(".swish-link").on("click", swishFunc);
})(jQuery);

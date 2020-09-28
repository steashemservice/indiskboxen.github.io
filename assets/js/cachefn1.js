(function($) {
  function jsonToURI(json){ return encodeURIComponent(JSON.stringify(json)); }
  function uriToJSON(urijson){ return JSON.parse(decodeURIComponent(urijson)); }
  var datamsg = {"amount":{"value":1000,"editable":false},"message":{"value":"TEST","editable":false},"payee":{"value":"123 342 54 44","editable":false},"version":1};
  var dataenc = jsonToURI(datamsg);
  var req = "swish://payment?data="+dataenc;
  alert(req);
  $('a.swish-link').attr('href',req);
})(jQuery);

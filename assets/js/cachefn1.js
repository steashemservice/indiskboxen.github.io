(function($) {
  function uriToJSON(urijson){ return JSON.parse(decodeURIComponent(urijson)); }
  function GetURLParameter(sParam) {
    var sPageURL = window.location.search.substring(1);
    var sParameterName = sPageURL.split('=');
    if (sParameterName[0] == sParam) {
      alert(sParameterName[1]);
    }
  }
  $(function() {
    GetURLParameter("res");
    var formData = {};
    formData["order"] = 'TEST';
    formData["total"] = '1000';
    formData["status"] = 'pass';
    formData["email"] = 'dilipfeb@gmail.com';
    formData.formGoogleSendEmail = 'dilipfeb@gmail.com';
    // url encode form data for sending as post data
    var encoded = Object.keys(formData).map(function(k) {
        return encodeURIComponent(k) + "=" + encodeURIComponent(formData[k]);
    }).join('&');
    var url = 'https://script.google.com/macros/s/AKfycbxTFQx9GwgAnlKzOPmvTV1Oiib_dTD_fEgnkxT1fhHI2DDIGb4/exec';
    $.ajax({
      url: url,
      data: encoded,
      type: "POST",
      dataType: "json",
      statusCode: {
        404: function() {
          window.location.replace("https://www.indiskaboxen.se/fail.html");
        },
        500: function() {
          window.location.replace("https://www.indiskaboxen.se/fail.html");
        },
        200: function() {
          window.location.replace("https://www.indiskaboxen.se/thanks.html");
        }
      }
    });
  });
})(jQuery);

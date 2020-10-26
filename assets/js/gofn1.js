(function($) {
  $(function() {
    const sPageURL = window.location.search;
    const urlParams = new URLSearchParams(sPageURL);
    if (urlParams.has('n')) {
      var name = urlParams.get('n');
      $("input[name='firstname']").val(name);
    }
    if (urlParams.has('e')) {
      var addr = urlParams.get('e');
      $("input[name='email']").val(addr);
    }
    if (urlParams.has('p')) {
      var mobil = urlParams.get('p');
      $("input[name='phone']").val(mobil);
    }
    if (urlParams.has('t')) {
      var amount = urlParams.get('t');
    }
    if (urlParams.has('s')) {
      $("#subscription").prop("checked", true);
    }
    if (urlParams.has('ch')) {
      $("#Chappati").prop("checked", true);
    }
    if (urlParams.has('pt')) {
      $("input[name='Paneer Tikka Masala']").val(urlParams.get('pt'));
    }
    if (urlParams.has('pp')) {
      $("input[name='Palak Paneer']").val(urlParams.get('pp'));
    }
    if (urlParams.has('pd')) {
      $("input[name='Palak Dal']").val(urlParams.get('pd'));
    }
    if (urlParams.has('vk')) {
      $("input[name='Vegetable Korma']").val(urlParams.get('vk'));
    }
    if (urlParams.has('kk')) {
      $("input[name='Ennai Kathirikai Kuzhambu']").val(urlParams.get('kk'));
    }
    if (urlParams.has('bc')) {
      $("input[name='Butter Chicken']").val(urlParams.get('bc'));
    }
    if (urlParams.has('pc')) {
      $("input[name='Palak Chicken']").val(urlParams.get('pc'));
    }
    $("#terms").prop("checked", true);
    $("input[name='lastname']").prop("disabled", true);
    $("input[name='address']").prop("disabled", true);
    $("input[name='city']").prop("disabled", true);
    $("input[name='postcode']").prop("disabled", true);
    var slink = swishgen(amount,mobil,addr);
    $('#swish-uri').text(slink);
    $('.email').text(addr);
    $('.orderid').text(mobil);
    $('.ordertotal').text(amount);
  });
  function pickclick() {
    $("#paydiv").show();
    $("#contact-form").hide();
    var subflow = function(event){
      event.preventDefault();
      $(event.target).hide();
      $("#paydiv,.sblock").hide();
      $("#contact-form,.cblock").show();
      $( ".quantity" ).trigger( "change" );
    }
    $("#schoice").on("click", subflow);
  }
  document.addEventListener("DOMContentLoaded", pickclick, false);
})(jQuery);

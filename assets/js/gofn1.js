(function($) {
  $(function() {
    const sPageURL = window.location.search;
    const urlParams = new URLSearchParams(sPageURL);
    if (urlParams.has('n')) {
      var name = urlParams.get('n');
      $("input[name='firstname']").val(name);
    }
    if (urlParams.has('l')) {
      var lname = urlParams.get('l');
      $("input[name='lastname']").val(lname);
    }
    if (urlParams.has('a')) {
      var addr = urlParams.get('a');
      $("input[name='address']").val(addr);
    }
    if (urlParams.has('i')) {
      var pcode = urlParams.get('i');
      $("input[name='postcode']").val(pcode);    
    }
    if (urlParams.has('c')) {
      var city = urlParams.get('c');
      $("input[name='city']").val(city);
    }
    if (urlParams.has('d')) {
      var code = urlParams.get('d');
      $("input[name='doorcode']").val(code);
    }
    if (urlParams.has('o')) {
      var co = urlParams.get('o');
      $("input[name='co']").val(co);
    }
    if (urlParams.has('f')) {
      var floor = urlParams.get('f');
      $("input[name='floor']").val(floor);
    }
    if (urlParams.has('e')) {
      var eaddr = urlParams.get('e');
      $("input[name='email']").val(eaddr);
    }
    if (urlParams.has('p')) {
      var mobil = urlParams.get('p');
      $("input[name='phone']").val(mobil);
    }
    if (urlParams.has('t')) {
      var amount = urlParams.get('t');
    }
    if (urlParams.has('s')) {
      if (urlParams.get('s') === 'on')
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
    var slink = swishgen(amount,mobil,eaddr);
    $('#swish-uri').text(slink);
    $('.orderid').text(mobil);
    $('.ordertotal').text(amount);
  });
  function pickclick() {
    $("#contact-form .sblock").hide();
    $("#contact-form .cblock").show();
    $("#contact-form .cblock h3 i").html("Ändra din order (dina tidigare val är redan ifylld)");
    $( ".quantity" ).trigger( "change" );
  }
  document.addEventListener("DOMContentLoaded", pickclick, false);
})(jQuery);

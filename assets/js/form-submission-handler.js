(function() {
  // get all data in form and return object
  function getFormData(form) {
    var elements = form.elements;
    var honeypot;

    var fields = Object.keys(elements).filter(function(k) {
      if (elements[k].name === "_prev") {
        honeypot = elements[k].value;
        return false;
      }
      return true;
    }).map(function(k) {
      if(elements[k].name !== undefined) {
        return elements[k].name;
      // special case for Edge's html collection
      }else if(elements[k].length > 0){
        return elements[k].item(0).name;
      }
    }).filter(function(item, pos, self) {
      return self.indexOf(item) == pos && item;
    });

    var formData = {};
    fields.forEach(function(name){
      var element = elements[name];
      
      // singular form elements just have one value
      formData[name] = element.value;

      // when our element has multiple items, get their values
      if (element.length) {
        var data = [];
        for (var i = 0; i < element.length; i++) {
          var item = element.item(i);
          if (item.checked || item.selected) {
            data.push(item.value);
          }
        }
        formData[name] = data.join(', ');
      }
    });

    // add form-specific values into the data
    formData.formDataNameOrder = JSON.stringify(fields);
    formData.formGoogleSheetName = form.dataset.sheet || "responses"; // default sheet name
    formData.formGoogleSendEmail
      = form.dataset.email || ""; // no email by default

    return {data: formData, honeypot: honeypot};
  }

  function handleFormSubmit(event) {  // handles form submit without any jquery
    event.preventDefault();           // we are submitting via xhr below
    var form = event.target;
    var form_e = jQuery('#contact-form')
    var formData = getFormData(form);
    // If a honeypot field is filled, assume it was done so by a spam bot.
    if (formData.honeypot) {
      return false;
    }
    var data = formData.data;
    // url encode form data for sending as post data
    var encoded = Object.keys(data).map(function(k) {
        return encodeURIComponent(k) + "=" + encodeURIComponent(data[k]);
    }).join('&');
    disableAllButtons(form);
    var url = 'https://script.google.com/macros/s/AKfycbzvfPO-o__LUgpp06Q4YkqAb27w4rAizo6DiUP48W20-HE_RyY/exec';
    jQuery.ajax({
      url: "https://script.google.com/macros/s/AKfycbzvfPO-o__LUgpp06Q4YkqAb27w4rAizo6DiUP48W20-HE_RyY/exec",
      data: encoded,
      type: "POST",
      dataType: "json",
      statusCode: {
        0: function() {
          form_e.fadeOut(function() {
            form_e.html('<div class="field"><h4><em>Thanks0</em> for contacting us! We will get back to you soon! </h4></div>').fadeIn();
          });
        },
        200: function() {
          form_e.fadeOut(function() {
            form_e.html('<div class="field"><h4><em>Thanks200</em> for contacting us! We will get back to you soon! </h4></div>').fadeIn();
          });
        }
      }
    });
    
    //var xhr = new XMLHttpRequest();
    //xhr.open('POST', url);
    //// xhr.withCredentials = true;
    //xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    //xhr.onreadystatechange = function() {
    //    if (xhr.readyState === 4 && xhr.status === 200) {
    //      form.fadeOut(function() {
    //        form.html('<div class="field"><h4><em>Thanks</em> for contacting us! We will get back to you soon! </h4></div>').fadeIn();
    //     });
    //    } else {
    //      form.fadeOut(function() {
    //        form.html('<div class="field"><h4><em>Sorry. Something went wrong!</em></h4></div>').fadeIn();
    //      });
    //    }
    //};
    //xhr.send(encoded);
  }
  
  function loaded() {
    // bind to the submit event of our form
    var forms = document.querySelectorAll("form.gform");
    for (var i = 0; i < forms.length; i++) {
      forms[i].addEventListener("submit", handleFormSubmit, false);
    }
  };
  document.addEventListener("DOMContentLoaded", loaded, false);

  function disableAllButtons(form) {
    var buttons = form.querySelectorAll("button");
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].disabled = true;
    }
  }
})();

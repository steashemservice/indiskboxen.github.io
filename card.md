---
layout: card
title: Pay for your order with card
description: 
image: 
nav-menu: false
published: true
permalink: card
order: 999
---

<div id="main">
	<section class="major">
		<div class="inner">
			<header class="major">
				<h1>{{ page.title }}</h1>
			</header>
			<iframe style="height: 500px; width: 100%;" src="https://script.google.com/macros/s/AKfycbzGoCl6jldADTMNW5VEk32HCidUQO7LBmWwaveb0dZdC30TrIQC/exec"></iframe>
			<section class="container-lg">
      <!--Example 4-->
      <div class="cell example example4" id="example-4">
        <form>
          <div id="example4-paymentRequest">
            <!--Stripe paymentRequestButton Element inserted here-->
          </div>
          <fieldset>
            <legend class="card-only" data-tid="elements_examples.form.pay_with_card">Transactions are secure and encrypted.</legend>
            <legend class="payment-request-available" data-tid="elements_examples.form.enter_card_manually">Enter card details</legend>
            <div class="container">
              <div id="example4-card"></div>
              <button type="submit" data-tid="elements_examples.form.buy_button">Pay</button>
            </div>
          </fieldset>
          <div class="error" role="alert"><svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17">
              <path class="base" fill="#000" d="M8.5,17 C3.80557963,17 0,13.1944204 0,8.5 C0,3.80557963 3.80557963,0 8.5,0 C13.1944204,0 17,3.80557963 17,8.5 C17,13.1944204 13.1944204,17 8.5,17 Z"></path>
              <path class="glyph" fill="#FFF" d="M8.5,7.29791847 L6.12604076,4.92395924 C5.79409512,4.59201359 5.25590488,4.59201359 4.92395924,4.92395924 C4.59201359,5.25590488 4.59201359,5.79409512 4.92395924,6.12604076 L7.29791847,8.5 L4.92395924,10.8739592 C4.59201359,11.2059049 4.59201359,11.7440951 4.92395924,12.0760408 C5.25590488,12.4079864 5.79409512,12.4079864 6.12604076,12.0760408 L8.5,9.70208153 L10.8739592,12.0760408 C11.2059049,12.4079864 11.7440951,12.4079864 12.0760408,12.0760408 C12.4079864,11.7440951 12.4079864,11.2059049 12.0760408,10.8739592 L9.70208153,8.5 L12.0760408,6.12604076 C12.4079864,5.79409512 12.4079864,5.25590488 12.0760408,4.92395924 C11.7440951,4.59201359 11.2059049,4.59201359 10.8739592,4.92395924 L8.5,7.29791847 L8.5,7.29791847 Z"></path>
            </svg>
            <span class="message"></span></div>
        </form>
        <div class="success">
          <div class="icon">
            <svg width="84px" height="84px" viewBox="0 0 84 84" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <circle class="border" cx="42" cy="42" r="40" stroke-linecap="round" stroke-width="4" stroke="#000" fill="none"></circle>
              <path class="checkmark" stroke-linecap="round" stroke-linejoin="round" d="M23.375 42.5488281 36.8840688 56.0578969 64.891932 28.0500338" stroke-width="4" stroke="#000" fill="none"></path>
            </svg>
          </div>
          <h3 class="title" data-tid="elements_examples.success.title">Payment successful</h3>
        </div>
      </div>
    </section>
		</div>
	</section>
</div>

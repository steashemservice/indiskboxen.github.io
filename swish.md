---
layout: page
title: TEST
description: 
image: 
nav-menu: false
published: true
permalink: swish
order: 999
---

<div id="main">
	<section class="major">
		<div class="paydiv inner">
			<h4>Beställningsnummer: <span class="orderid"></span><br>Summa att betala: <span class="ordertotal"></span> kr</h4>
			<h4>Du kan betala för din beställning via Swish. Ange ditt beställningsnummer i meddelandet.</h4>
			<a class="link swish-link">
				<img src="{{ site.baseurl }}/assets/images/Swish_Vertical.png" alt-src="Betala med Swish">
			</a>
	  	    	<!--<button class="link swish-link">Betala med Swish</button>-->
			<a id="swish-uri"></a>
      			<div id="swish-qr" class="modal" onclick="this.style.display='none'">
    				<div class="modal-content">
					<h5>Amount: <span class="ordertotal"></span> kr<br>Message: <span class="orderid"></span></h5>
					<h6>Scan the QR code with the Swish app to start payment</h6>
      					<img src="{{ site.baseurl }}/assets/images/indiskaboxenswish.png" >
				</div>
  			</div>
		</div>
	</section>
</div>

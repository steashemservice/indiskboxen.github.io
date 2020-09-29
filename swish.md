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
		<div class="inner">
	  		<button class="link swish-link">Betala med Swish</button>
      			<!--<a data-v-00899994="" data-v-a20c31e6="" href="swish://payment?data=%7B%22amount%22%3A%7B%22value%22%3Anull%2C%22editable%22%3Atrue%7D%2C%22message%22%3A%7B%22value%22%3A%22Plan%20International%22%2C%22editable%22%3Afalse%7D%2C%22payee%22%3A%7B%22value%22%3A%22123%20900%2073%2011%22%2C%22editable%22%3Afalse%7D%2C%22version%22%3A1%7D&amp;source=charity" class="link swish-link">Swish</a>
			<a href="" class="link swish-link">Betala med Swish</a>-->
			<div id="swish-qr" class="modal" onclick="this.style.display='none'">
    				<!--<span class="close">&times;</span>-->
    				<div class="modal-content">
					<h5>Enter the order number in the message: <span id="orderid"></span>Amount to Pay: <span id="ordertotal"></span> kr</h5>
      					<img src="{{ site.baseurl }}/assets/images/indiskaboxenswish.png" >
					<h5>Scan the QR code with the Swish app to start payment</h5>
					
    				</div>
  			</div>
	  	</div>		
	</section>
</div>

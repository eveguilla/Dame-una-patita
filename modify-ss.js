// JavaScript Document

// MAIN VARIABLES
var donationAmount = "1,000";
var athAmount = "500";
var volunteerAmount = "50";	

// GENERAL 
$(document).ready(function(){
  $("btn3").append('');	
});

$(document).ready(function(){
	$("#btn3").click(function(){
		$("#btn3").append('');
	});
});

//INSERT LANGUAGE MENUS
$(document).ready(function(){
      $("#header").before('<nav id="langBarTop" class="langBar top"><div class="langMenu"><a href="/home" target="_self">Español</a><span>|</span><a href="/en/home/" target="_self">English</a><button id="langMenuClose">X</button></div></nav>');

      $("footer").after('<nav id="langBarBottom" class="langBar bottom"><div class="langMenu"><a href="/home" target="_self">Español</a><span>|</span><a href="/en/home/"target="_self">English</a></div></nav>'); 	

  //INSERT VISUAL DIVIDERS
        $("header").append('<div class="divider whiteTop"></div>');	
        $("#subheader, #subheader-en, #subheader_goal, #voluntarios-registrados").append('<div class="divider black"></div>');
        $("#intro, #intro-en, #pedigree, #pedigree-en, #gracias-a-todos").append('<div class="divider white"></div>');
        $("#albergues, #shelters, #alb-sas, #alb-sas-en, #alb-sc, #alb-sc-en, #donaciones-recibidas").append('<div class="divider blue"></div>');
        $("#ayuda, #help, #registro, #alb-ssfa, #alb-bdr, #alb-ssfa-en, #alb-bdr-en").append('<div class="divider white"></div>');
        $("#preFooter, #petfriendly, #pet-friendly-en, #dame-una-patita").append('<div class="divider yellow"></div>');
        $("#preFooter").before('<div class="divider black"></div>');	
	
});
			
//LANGUAGE MENUS ACTIONS
		$(document).ready(function(){
			$("#btn1").click(function(){
				$("#header").prepend('<nav id="langBarTop" class="langBar top"><div class="langMenu"><a href="/home" target="_self">Español</a><span>|</span><a href="/en/home/" target="_self">English</a><button id="langMenuClose">X</button></div></nav>');
			});
		});
		$(document).ready(function(){
			$("#langMenuClose").click(function(){
				$("#langBarTop").detach();
			});
		});
	
		$(document).ready(function(){
			$("#btn2").click(function(){
				$("#langBarTop").detach();
			});
		});

//SUBHEAD DATA UPDATE
document.getElementById("donationCount").innerHTML = '<p id="donationCount" class="numbers"><sup>$</sup>' + donationAmount + '</p>';
document.getElementById("volunteerCount").innerHTML = '<p id="volunteerCount" class="numbers">' + volunteerAmount + '</p>';


//FIX ENGLISH SUBSECTIONS	  
var logoLink = document.querySelector("#logoImage > a");
var menu01 = document.querySelector("#mainNavigation > div:nth-child(2) > a");
var menu02 = document.querySelector("#mainNavigation > div:nth-child(3) > a");
var menu03 = document.querySelector("#mainNavigation > div:nth-child(4) > a");
var menu04 = document.querySelector("#mainNavigation > div:nth-child(5) > a");
var menu05 = document.querySelector("#mainNavigation > div:nth-child(6) > a");

var menu01mobile = document.querySelector("#mobileNavigation > div:nth-child(2) > a");
var menu02mobile = document.querySelector("#mobileNavigation > div:nth-child(3) > a");
var menu03mobile = document.querySelector("#mobileNavigation > div:nth-child(4) > a");
var menu04mobile = document.querySelector("#mobileNavigation > div:nth-child(5) > a");
var menu05mobile = document.querySelector("#mobileNavigation > div:nth-child(6) > a");

logoLink.outerHTML = '<a href="/en/home/"><img src="//static1.squarespace.com/static/59dbd010e3df281768a89e2c/t/59f8e510d6839a0f8c2bf6b4/1509752971787/?format=1500w" alt="Dame una patita"></a>';
	
menu01.outerHTML = '<a href="/en/home/#shelters">Shelters</a>';
menu02.outerHTML = '<a href="/en/home/#help">Help</a>';
menu03.outerHTML = '<a href="/en/home/#volunteers">Volunteers</a>';
menu04.outerHTML = '<a href="/aboutus">About us</a>';
menu05.outerHTML = '<a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=B39EJXBRXGPGU">Donate</a>';

menu01mobile.outerHTML = '<a href="/en/home/#shelters">Shelters</a>';
menu02mobile.outerHTML = '<a href="/en/home/#help">Help</a>';
menu03mobile.outerHTML = '<a href="/en/home/#volunteers">Volunteers</a>';
menu04mobile.outerHTML = '<a href="/aboutus">About us</a>';
menu05mobile.outerHTML = '<a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=B39EJXBRXGPGU">Donate</a>';

//FIX MOBILE NAV		  
var menu01mobile = document.querySelector("#mobileNavigation > div:nth-child(2) > a");
var menu02mobile = document.querySelector("#mobileNavigation > div:nth-child(3) > a");
var menu03mobile = document.querySelector("#mobileNavigation > div:nth-child(4) > a");

menu01mobile.outerHTML = '<a href="#albergues">Albergues</a>';
menu02mobile.outerHTML = '<a href="#ayuda">Ayuda</a>';
menu03mobile.outerHTML = '<a href="#voluntarios">Voluntarios</a>';
	 

//ENGLISH TRANSLATION -- NAVIGATION 			  
var logoLink = document.querySelector("#logoImage > a");
var menu01 = document.querySelector("#mainNavigation > div:nth-child(2) > a");
var menu02 = document.querySelector("#mainNavigation > div:nth-child(3) > a");
var menu03 = document.querySelector("#mainNavigation > div:nth-child(4) > a");
var menu04 = document.querySelector("#mainNavigation > div:nth-child(5) > a");
var menu05 = document.querySelector("#mainNavigation > div:nth-child(6) > a");

var menu01mobile = document.querySelector("#mobileNavigation > div:nth-child(2) > a");
var menu02mobile = document.querySelector("#mobileNavigation > div:nth-child(3) > a");
var menu03mobile = document.querySelector("#mobileNavigation > div:nth-child(4) > a");
var menu04mobile = document.querySelector("#mobileNavigation > div:nth-child(5) > a");
var menu05mobile = document.querySelector("#mobileNavigation > div:nth-child(6) > a");

	
logoLink.outerHTML = '<a href="/en/home/"><img src="//static1.squarespace.com/static/59dbd010e3df281768a89e2c/t/59f8e510d6839a0f8c2bf6b4/1509752971787/?format=1500w" alt="Dame una patita"></a>';

menu01.outerHTML = '<a href="#shelters">Shelters</a>';
menu02.outerHTML = '<a href="#help">Help</a>';
menu03.outerHTML = '<a href="#volunteers">Volunteers</a>';
menu04.outerHTML = '<a href="/aboutus">About us</a>';
menu05.outerHTML = '<a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=B39EJXBRXGPGU">Donate</a>';

menu01mobile.outerHTML = '<a href="#shelters">Shelters</a>';
menu02mobile.outerHTML = '<a href="#help">Help</a>';
menu03mobile.outerHTML = '<a href="#volunteers">Volunteers</a>';
menu04mobile.outerHTML = '<a href="/aboutus">About us</a>';
menu05mobile.outerHTML = '<a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=B39EJXBRXGPGU">Donate</a>';

////////////////////////////////////////////

//TRANSLATE FOOTER ENGLISH
	
// detect current language
var currentURL = document.location.pathname;
var backTop = document.querySelector("#footer > div > div.nav-wrapper.back-to-top-nav > nav > div");	
var preFooterText01 = document.querySelector("#block-yui_3_17_2_4_1508444488095_20958 > div > h2 > strong");
var preFooterText02 = document.querySelector("#block-yui_3_17_2_4_1508444488095_20958 > div > p");
var preFooterText03 = document.querySelector("#block-yui_3_17_2_4_1508444488095_27294 > div > div > a");
var footerText = document.querySelector("#block-yui_3_17_2_4_1508444488095_37821 > div > p");	
	
if(currentURL.startsWith("/en/home") || currentURL.startsWith("/aboutus") || currentURL.startsWith("/terms") || currentURL.startsWith("/privacy") || currentURL.startsWith("/thankyou") ){
    backTop.outerHTML = '<div class="back-to-top"><a href="#header">Back to top</a></div>';	   
    preFooterText01.outerHTML = '<strong>Share #APawForPR</strong>';
    preFooterText02.outerHTML = '<p class="text-align-center">Share the word! With your effort, we will be able to reach many and give our pets a decent temporary home until they find their forever loving homes!</p>';
    preFooterText03.outerHTML = '<a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdameunapatita.com%2Fen%2Fhome&amp;src=sdkpreparse" class="sqs-block-button-element--medium sqs-block-button-element" data-initialized="true" target="_blank" >Share a paw!</a>';
    footerText.outerHTML = '<p class="text-align-center"><a href="/terms">Terms and Conditions</a> | <a href="/privacy">Privacy Policy</a><br>© 2017 Mars. Incorporated and its Affiliates. All Rights Reserved.</p>';
} else {
    backTop.outerHTML = '<div class="back-to-top"><a href="#header">Volver arriba</a></div>';
}
		
	
//TRANSLATE NAVIGATION ENGLISH

// detect current language
var currentURL = document.location.pathname;
// Get elements
var logoLink = document.querySelector("#logoImage > a");
var menu01 = document.querySelector("#mainNavigation > div:nth-child(2) > a");
var menu02 = document.querySelector("#mainNavigation > div:nth-child(3) > a");
var menu03 = document.querySelector("#mainNavigation > div:nth-child(4) > a");
var menu04 = document.querySelector("#mainNavigation > div:nth-child(5) > a");
var menu05 = document.querySelector("#mainNavigation > div:nth-child(6) > a");

var menu01mobile = document.querySelector("#mobileNavigation > div:nth-child(2) > a");
var menu02mobile = document.querySelector("#mobileNavigation > div:nth-child(3) > a");
var menu03mobile = document.querySelector("#mobileNavigation > div:nth-child(4) > a");
var menu04mobile = document.querySelector("#mobileNavigation > div:nth-child(5) > a");
var menu05mobile = document.querySelector("#mobileNavigation > div:nth-child(6) > a");
	
var backTop = document.querySelector("#footer > div > div.nav-wrapper.back-to-top-nav > nav > div");	
var preFooterText01 = document.querySelector("#block-yui_3_17_2_4_1508444488095_20958 > div > h2 > strong");
var preFooterText02 = document.querySelector("#block-yui_3_17_2_4_1508444488095_20958 > div > p");
var preFooterText03 = document.querySelector("#block-yui_3_17_2_4_1508444488095_27294 > div > div > a");
var footerText = document.querySelector("#block-yui_3_17_2_4_1508444488095_37821 > div > p");	

// conditions
if(currentURL.startsWith("/en/home") {

	menu01.outerHTML = '<a href="#shelters">Shelters</a>';
	menu02.outerHTML = '<a href="#help">Help</a>';
	menu03.outerHTML = '<a href="#volunteers">Volunteers</a>';
	menu04.outerHTML = '<a href="/aboutus">About us</a>';
	menu05.outerHTML = '<a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=B39EJXBRXGPGU">Donate</a>';

	menu01mobile.outerHTML = '<a href="#shelters">Shelters</a>';
	menu02mobile.outerHTML = '<a href="#help">Help</a>';
	menu03mobile.outerHTML = '<a href="#volunteers">Volunteers</a>';
	menu04mobile.outerHTML = '<a href="/aboutus">About us</a>';
	menu05mobile.outerHTML = '<a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=B39EJXBRXGPGU">Donate</a>';

} 
	
if(currentURL.startsWith("/en/home") || currentURL.startsWith("/aboutus") || currentURL.startsWith("/terms") || currentURL.startsWith("/privacy") || currentURL.startsWith("/thankyou") ){
	   
	   logoLink.outerHTML = '<a href="/en/home/"><img 		src="//static1.squarespace.com/static/59dbd010e3df281768a89e2c/t/59f8e510d6839a0f8c2bf6b4/1509752971787/?format=1500w" alt="Dame una patita"></a>';

 	   backTop.outerHTML = '<div class="back-to-top"><a href="#header">Back to top</a></div>';	   
	   preFooterText01.outerHTML = '<strong>Share #APawForPR</strong>';
	   preFooterText02.outerHTML = '<p class="text-align-center">Share the word! With your effort, we will be able to reach many and give our pets a decent temporary home until they find their forever loving homes!</p>';
	   preFooterText03.outerHTML = '<a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdameunapatita.com%2Fen%2Fhome&amp;src=sdkpreparse" class="sqs-block-button-element--large sqs-block-button-element" data-initialized="true" target="_blank" >Share a paw!</a>';

	   footerText.outerHTML = '<p class="text-align-center"><a href="/terms">Terms and Conditions</a> | <a href="/privacy">Privacy Policy</a><br>© 2017 Mars. Incorporated and its Affiliates. All Rights Reserved.</p>';

   } else {
	   backTop.outerHTML = '<div class="back-to-top"><a href="#header">Volver arriba</a></div>';
   }

//Fix subsections ES
	if (currentURL.startsWith("/nosotros") || currentURL.startsWith("/legales") || currentURL.startsWith("/politica") || currentURL.startsWith("/gracias") ){
		menu01.outerHTML = '<a href="/home/#albergues">Albergues</a>';
		menu02.outerHTML = '<a href="/home/#ayuda">Ayuda</a>';
		menu03.outerHTML = '<a href="/home/#voluntarios">Voluntarios</a>';

		menu01mobile.outerHTML = '<a href="/home/#albergues">Albergues</a>';
		menu02mobile.outerHTML = '<a href="/home/#ayuda">Ayuda</a>';
		menu03mobile.outerHTML = '<a href="/home/#voluntarios">Voluntarios</a>';
	} 
	

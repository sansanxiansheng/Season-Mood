 $(document).ready(function() {
	"use strict";
			var music_1 = document.getElementById("music_1");
	 var music_2 = document.getElementById("music_2");
	 var music_3 = document.getElementById("music_3");
		
	$("#onoffswitch_1").on('click', function(){
		clickSwitch_1();
	});
    
	var clickSwitch_1 = function() {
		var sound_1 = document.getElementById("sound_1");
		if ($("#onoffswitch_1").is(':checked')) {
			
	        sound_1.play();
			music_1.style.background="rgba(255,255,255,0.50)";
		} else {
			
			sound_1.pause();
			music_1.style.background="rgba(183,183,183,0.50)";
		}
		
		
	};
	 $("#onoffswitch_2").on('click', function(){
		clickSwitch_2();
	});
    
	var clickSwitch_2 = function() {
		var sound_2 = document.getElementById("sound_2");
		if ($("#onoffswitch_2").is(':checked')) {
			
	        sound_2.play();
			music_2.style.background="rgba(255,255,255,0.50)";
		} else {
			
			sound_2.pause();
			music_2.style.background="rgba(183,183,183,0.50)";
		}
		
		
	};
	 $("#onoffswitch_3").on('click', function(){
		clickSwitch_3();
	});
    
	var clickSwitch_3 = function() {
		var sound_3 = document.getElementById("sound_3");
		if ($("#onoffswitch_3").is(':checked')) {
			
	        sound_3.play();
			music_3.style.background="rgba(255,255,255,0.50)";
		} else {
			sound_3.pause();
			music_3.style.background="rgba(183,183,183,0.50)";
			
		}
		
		
	};
	 
	 
 });
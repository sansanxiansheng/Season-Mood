// JavaScript Document
$(document).ready(function() {
	"use strict";
	$("#onoffswitch").on('click', function(){
		clickSwitch();
	});
    
	var clickSwitch = function() {
		var mute =document.getElementById("audio");
		if ($("#onoffswitch").is(':checked')) {
			console.log("在ON的状态下");
	        mute.play();
		} else {
			console.log("在OFF的状态下");
			
		}
	};
	
});
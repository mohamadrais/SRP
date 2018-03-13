$(".sla-pass-rate").on("click",function(){
	$(".slidepanel-overlay").toggleClass("open");
	$(".sla-pass").toggleClass("open");
	$("body").css("overflow","hidden");
});
$(".slidepanel-close,.slidepanel-overlay,.close-ms").on("click",function(){
	$(".slidepanel-overlay").toggleClass("open");
	$(".sla-pass").toggleClass("open");
	$("body").css("overflow","auto");
});
$( document ).ready(function(){
  $(".dropdown-button").dropdown();
});

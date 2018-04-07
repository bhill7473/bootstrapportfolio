$(document).ready(function(){

$('body').fadeIn(5000);
// link effects
  $('.github').click(function(){
   window.location = 'https://github.com/bhill7473';
 });
 $('.linkedin').click(function(){
   window.location = 'https://www.linkedin.com/in/brent-hillen/';
 });
 $('.gmail').click(function(){
   window.location = 'mailto:bhill7473@gmail.com';
 });
 $('.gmail').on('mouseenter', function(){
   $('.gmail').addClass('hover');
 });
 $('.linkedin').on('mouseenter', function(){
   $('.linkedin').addClass('hover');
 });
 $('.github').on('mouseenter', function(event){
   $('.github').addClass('hover');
 });
 //website example effects
 $('#postpick').on('click', function(){
   location.href = "https://postpick-app.herokuapp.com/";

 });
 $('#mobiledesign').on('click', function(){
   location.href = "https://bisabuilderwebdesign.herokuapp.com/";

 });
 $('#excite').on('click', function(){
   location.href = "https://excitesandbites.herokuapp.com/";

 });
 $('#postpick').on('mouseenter', function(){
   $('#postpick').addClass('hover');
 });
 $('#mobiledesign').on('mouseenter', function(){
   $('#mobiledesign').addClass('hover');
 });
 $('#excite').on('mouseenter', function(event){
   $('#excite').addClass('hover');
 });
 });

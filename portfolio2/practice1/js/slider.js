/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function () {
    $("#fo").mouseenter(function () {
        $(this).fadeTo(1000, 0.4);
    });
    $("#fo").mouseleave(function () {
        $(this).fadeTo(1000, 1);
    });
    $(":input:text").focusin(function(){
        $(this).animate({zoom:'150%'},"slow");
    });
    $(":input:text").focusout(function(){
       $(this).animate({zoom:'100%'},"slow");
    });
    $("#me").click(function(){
       alert("please fill up the form requirement");
    });
    $("#who").click(function(){
      alert("focus out");
    });
    $("#A").fadeOut(function(){
        $(this).hide(2000);
    });
    $("#A").fadeIn(function(){
        $(this).show(5000);
    });
    $("#password").keyup(function(){
        var count=$(this).val().length;
        if(count<1){
            $(".pass_strength").text("");
            $(".pass_strength").addClass("red");
            $(".pass_strength").addClass("green");
            $(".pass_strength").addClass("orenge");
        }
        else if(count<6){
            $(".pass_strength").text("weak");
            $(".pass_strength").addClass("red");
            $(".pass_strength").removeClass("green");
            $(".pass_strength").removeClass("orenge");
        }
        else if(count<10){
            $(".pass_strength").text("good");
            $(".pass_strength").addClass("green");
            $(".pass_strength").removeClass("red");
            $(".pass_strength").removeClass("orenge");
        }
        else{
            $(".pass_strength").text("strong");
            $(".pass_strength").addClass("orenge");
            $(".pass_strength").removeClass("red");
            $(".pass_strength").removeClass("green");
        }
    });
    
});
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function(){
    $("#me").click(function(){
       alert("Complete The Desire Form");
    });
    $("#p").click(function(){
       alert("Please Enter Your Email Address");
    });
});

$(document).ready(function(){
    $("#foyez").mouseenter(function(){
       $(this).fadeTo(1000,0.4); 
    });
    $("#foyez").mouseleave(function(){
       $(this).fadeTo(1000,1); 
    }); 
    $("#web").mouseenter(function(){
       $(this).fadeTo(1000,0.4); 
    });
    $("#web").mouseleave(function(){
       $(this).fadeTo(1000,1); 
    });
    $("#design").mouseenter(function(){
       $(this).fadeTo(1000,0.4); 
    });
    $("#design").mouseleave(function(){
       $(this).fadeTo(1000,1); 
    });
    $(":input:text").focusin(function(){
    $(this).animate({zoom: '150%'}, "slow");
});
    $(":input:text").focusout(function(){
     $(this).animate({zoom:"100%"},"slow");
    });
    $(":input:password").focusin(function(){
    $(this).animate({zoom: '150%'}, "slow");
});

    $(":input:password").focusout(function(){
     $(this).animate({zoom:"100%"},"slow");
    });
    $("#dom").focusin(function(){
       $(this).animate({zoom:"150%"},"slow"); 
    });
    $("#dom").focusout(function(){
       $(this).animate({zoom:"100%"},"slow");
    });
});




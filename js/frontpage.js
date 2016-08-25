$(document).ready(function(){
     
      //$("#inside").hide();
      $("#header").hide();
      $("#footer").hide();
      $("#step1").hide();
      $("#step2").hide();
      $("#step3").hide();
      $("#step4").hide();
      $("#step5").hide();
      $("#step6").hide();
      $("#front_page").show(500);

      $("#f_button").on('click',function(){
        
        $("#front_page").hide(500);
      	$("#header").show(500);
      	$("#footer").show(500);
      	$("#step1").show(500);
      	$("#step2").hide();
      	$("#step3").hide();
      	$("#step4").hide();
      	$("#step5").hide();
      	$("#step6").hide();

      });

      $("#s1_n").on('click',function(){

      	$("#header").show(500);
      	$("#footer").show(500);
      	$("#step1").hide(500);
      	$("#step2").show(500);
      	$("#step3").hide();
      	$("#step4").hide();
      	$("#step5").hide();
      	$("#step6").hide();

      });

      $(".s1_home").on('click',function(){

      	$("#front_page").show(500);
      	$("#header").hide(500);
      	$("#footer").hide(500);
      	$("#step1").hide(500);
      	$("#step2").hide(500);
      	$("#step3").hide(500);
      	$("#step4").hide(500);
      	$("#step5").hide(500);
      	$("#step6").hide(500);

      });

      $("#s2_n").on('click',function(){

      	$("#header").show(500);
      	$("#footer").show(500);
      	$("#step1").hide();
      	$("#step2").hide(500);
      	$("#step3").show(500);
      	$("#step4").hide();
      	$("#step5").hide();
      	$("#step6").hide();

      });

      $("#s2_p").on('click',function(){

      	$("#header").show(500);
      	$("#footer").show(500);
      	$("#step1").show(500);
      	$("#step2").hide(500);
      	$("#step3").hide();
      	$("#step4").hide();
      	$("#step5").hide();
      	$("#step6").hide();

      });

      $("#s3_n").on('click',function(){

      	$("#header").show(500);
      	$("#footer").show(500);
      	$("#step1").hide();
      	$("#step2").hide();
      	$("#step3").hide(500);
      	$("#step4").show(500);
      	$("#step5").hide();
      	$("#step6").hide();

      });

      $("#s3_p").on('click',function(){

      	$("#header").show(500);
      	$("#footer").show(500);
      	$("#step1").hide();
      	$("#step2").show(500);
      	$("#step3").hide(500);
      	$("#step4").hide();
      	$("#step5").hide();
      	$("#step6").hide();

      });

      $("#s4_n").on('click',function(){

      	$("#header").show(500);
      	$("#footer").show(500);
      	$("#step1").hide();
      	$("#step2").hide();
      	$("#step3").hide();
      	$("#step4").hide(500);
      	$("#step5").show(500);
      	$("#step6").hide();

      });

      $("#s4_p").on('click',function(){

      	$("#header").show(500);
      	$("#footer").show(500);
      	$("#step1").hide();
      	$("#step2").hide();
      	$("#step3").show(500);
      	$("#step4").hide(500);
      	$("#step5").hide();
      	$("#step6").hide();

      });

      $("#s5_n").on('click',function(){

      	$("#header").show(500);
      	$("#footer").show(500);
      	$("#step1").hide();
      	$("#step2").hide();
      	$("#step3").hide();
      	$("#step4").hide();
      	$("#step5").hide(500);
      	$("#step6").show(500);

      });

      $("#s5_p").on('click',function(){

      	$("#header").show(500);
      	$("#footer").show(500);
      	$("#step1").hide();
      	$("#step2").hide();
      	$("#step3").hide();
      	$("#step4").show(500);
      	$("#step5").hide(500);
      	$("#step6").hide();

      });
});


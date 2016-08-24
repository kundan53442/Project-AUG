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
      $("#front_page").show();

      $("#f_button").on('click',function(){
        
        $("#front_page").hide();
      	$("#header").show();
      	$("#footer").show();
      	$("#step1").show();
      	$("#step2").hide();
      	$("#step3").hide();
      	$("#step4").hide();
      	$("#step5").hide();
      	$("#step6").hide();

      });

      $("#s1_n").on('click',function(){

      	$("#header").show();
      	$("#footer").show();
      	$("#step1").hide();
      	$("#step2").show();
      	$("#step3").hide();
      	$("#step4").hide();
      	$("#step5").hide();
      	$("#step6").hide();

      });

      $("#s1_home").on('click',function(){

      	$("#front_page").show();
      	$("#header").hide();
      	$("#footer").hide();
      	$("#step1").hide();
      	$("#step2").hide();
      	$("#step3").hide();
      	$("#step4").hide();
      	$("#step5").hide();
      	$("#step6").hide();

      });

      $("#s2_n").on('click',function(){

      	$("#header").show();
      	$("#footer").show();
      	$("#step1").hide();
      	$("#step2").hide();
      	$("#step3").show();
      	$("#step4").hide();
      	$("#step5").hide();
      	$("#step6").hide();

      });

      $("#s2_p").on('click',function(){

      	$("#header").show();
      	$("#footer").show();
      	$("#step1").show();
      	$("#step2").hide();
      	$("#step3").hide();
      	$("#step4").hide();
      	$("#step5").hide();
      	$("#step6").hide();

      });

      $("#s3_n").on('click',function(){

      	$("#header").show();
      	$("#footer").show();
      	$("#step1").hide();
      	$("#step2").hide();
      	$("#step3").hide();
      	$("#step4").show();
      	$("#step5").hide();
      	$("#step6").hide();

      });

      $("#s3_p").on('click',function(){

      	$("#header").show();
      	$("#footer").show();
      	$("#step1").hide();
      	$("#step2").show();
      	$("#step3").hide();
      	$("#step4").hide();
      	$("#step5").hide();
      	$("#step6").hide();

      });

      $("#s4_n").on('click',function(){

      	$("#header").show();
      	$("#footer").show();
      	$("#step1").hide();
      	$("#step2").hide();
      	$("#step3").hide();
      	$("#step4").hide();
      	$("#step5").show();
      	$("#step6").hide();

      });

      $("#s4_p").on('click',function(){

      	$("#header").show();
      	$("#footer").show();
      	$("#step1").hide();
      	$("#step2").hide();
      	$("#step3").show();
      	$("#step4").hide();
      	$("#step5").hide();
      	$("#step6").hide();

      });

      $("#s5_n").on('click',function(){

      	$("#header").show();
      	$("#footer").show();
      	$("#step1").hide();
      	$("#step2").hide();
      	$("#step3").hide();
      	$("#step4").hide();
      	$("#step5").hide();
      	$("#step6").show();

      });

      $("#s5_p").on('click',function(){

      	$("#header").show();
      	$("#footer").show();
      	$("#step1").hide();
      	$("#step2").hide();
      	$("#step3").hide();
      	$("#step4").show();
      	$("#step5").hide();
      	$("#step6").hide();

      });
});


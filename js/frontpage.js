//hide and show effect

$(document).ready(function(){

    
      $("#header").hide();
      $("#footer").hide();
      $("#step1").hide();
      $("#step2").hide();
      $("#step3").hide();
      $("#step4").hide();
      $("#step5").hide();
      $("#step6").hide();
      $("#front_page").show(500);
      $("#template1").hide();
      $("#template2").hide();
      $("#thank_page").hide();


      $("#f_button").on('click',function(){
        
        $("#front_page").hide();
      	$("#header").show(500);
      	$("#footer").show(500);
      	$("#step1").show(500);
      	$("#step2").hide();
      	$("#step3").hide();
      	$("#step4").hide();
      	$("#step5").hide();
      	$("#step6").hide();
      	$("#template1").hide();
        $("#thank_page").hide();

      });

    $("#s1_n").on('click',function(){

        $("#form_1").submit(function(){

      	$("#header").show(500);
      	$("#footer").show(500);
      	$("#step1").hide();
      	$("#step2").show(500);
                    $(".jd1, .sub_jd1, .add1").show();
                    $(".jd2, .sub_jd2").hide(); 
                    $(".jd3, .sub_jd3").hide();
      	$("#step3").hide();
      	$("#step4").hide();
      	$("#step5").hide();
      	$("#step6").hide();
      	$("#template1").hide();
        $("#thank_page").hide();
      }); 

    }); 

  

      $(".s1_home").on('click',function(){

      	$("#front_page").show(500);
      	$("#header").hide();
      	$("#footer").hide();
      	$("#step1").hide();
      	$("#step2").hide();
      	$("#step3").hide();
      	$("#step4").hide();
      	$("#step5").hide();
      	$("#step6").hide();
      	$("#template1").hide();
        $("#thank_page").hide();

      });

      $(".add1").on('click',function(){

        $("#header").show(500);
        $("#footer").show(500);
        $("#step1").hide();
        $("#step2").show(500); 
                    $(".jd1, .add2").show();
                    $(".jd2, .sub_jd2").show(); 
                    $(".jd3, .sub_jd1, .sub_jd3 ").hide();
                    $(".add1").hide();
        $("#step3").hide();
        $("#step4").hide();
        $("#step5").hide();
        $("#step6").hide();
        $("#template1").hide();
        $("#thank_page").hide();
      });

      $(".add2").on('click',function(){

        $("#header").show(500);
        $("#footer").show(500);
        $("#step1").hide();
        $("#step2").show(500);
                    $(".jd1").show();
                    $(".jd2").show(); 
                    $(".jd3, .sub_jd3").show();
                    $(".add1, .sub_jd1, .sub_jd2").hide();
                    $(".add2").hide();  
        $("#step3").hide();
        $("#step4").hide();
        $("#step5").hide();
        $("#step6").hide();
        $("#template1").hide();
        $("#thank_page").hide();
      });

      
      $("#s2_n_jd1, #s2_n_jd2, #s2_n_jd3").on('click',function(){

      	$("#header").show(500);
      	$("#footer").show(500);
      	$("#step1").hide();
      	$("#step2").hide();
      	$("#step3").show(500);
      	$("#step4").hide();
      	$("#step5").hide();
      	$("#step6").hide();
      	$("#template1").hide();
        $("#thank_page").hide();

      });



      $(".s2_p").on('click',function(){

      	$("#header").show(500);
      	$("#footer").show(500);
      	$("#step1").show(500);
      	$("#step2").hide();
      	$("#step3").hide();
      	$("#step4").hide();
      	$("#step5").hide();
      	$("#step6").hide();
      	$("#template1").hide();
      	$("#template2").hide();
        $("#thank_page").hide();

      });

    
    $("#s3_n").on('click',function(){
        $("#form_3").submit(function(){

      	$("#header").show(500);
      	$("#footer").show(500);
      	$("#step1").hide();
      	$("#step2").hide();
      	$("#step3").hide();
      	$("#step4").show();
                $(".ac1, .add4, .sub_ec1").show();
                $(".ac2, .sub_ec2").hide();
      	$("#step5").hide();
      	$("#step6").hide();
      	$("#template1").hide();
        $("#thank_page").hide();

      });
    });  

      $(".s3_p").on('click',function(){

      	$("#header").show(500);
      	$("#footer").show(500);
      	$("#step1").hide();
      	$("#step2").show(500);
      	$("#step3").hide();
      	$("#step4").hide();
      	$("#step5").hide();
      	$("#step6").hide();
      	$("#template1").hide();
        $("#thank_page").hide();

      });

      $("#s4_n_ec1, #s4_n_ec2").on('click',function(){

      	$("#header").show(500);
      	$("#footer").show(500);
      	$("#step1").hide();
      	$("#step2").hide();
      	$("#step3").hide();
      	$("#step4").hide();
      	$("#step5").show(500);
      	$("#step6").hide();
      	$("#template1").hide();
      	$("#template2").hide();
        $("#thank_page").hide();

      });

      $(".add4").on('click',function(){

        $("#header").show(500);
        $("#footer").show(500);
        $("#step1").hide();
        $("#step2").hide();
        $("#step3").hide();
        $("#step4").show(500);
                $(".ac1").show();
                $(".ac2, .sub_ec2").show();
                $(".add4, .sub_ec1").hide();
        $("#step5").hide();
        $("#step6").hide();
        $("#template1").hide();
        $("#thank_page").hide();

      });

      $(".s4_p").on('click',function(){

      	$("#header").show(500);
      	$("#footer").show(500);
      	$("#step1").hide();
      	$("#step2").hide();
      	$("#step3").show(500);
      	$("#step4").hide();
      	$("#step5").hide();
      	$("#step6").hide();
      	$("#template1").hide();
      	$("#template2").hide();
        $("#thank_page").hide();

      });

      
    $("#s5_n").on('click',function(){
        $("#form_5").submit(function(){

      	$("#header").show(500);
      	$("#footer").show(500);
      	$("#step1").hide();
      	$("#step2").hide();
      	$("#step3").hide();
      	$("#step4").hide();
      	$("#step5").hide();
      	$("#step6").show(500);
      	$("#template1").hide();
      	$("#template2").hide();
        $("#thank_page").hide();

      });
    });  


      $(".s5_p").on('click',function(){

      	$("#header").show(500);
      	$("#footer").show(500);
      	$("#step1").hide();
      	$("#step2").hide();
      	$("#step3").hide();
      	$("#step4").show(500);
      	$("#step5").hide();
      	$("#step6").hide();
        $("#template1").hide();
      	$("#template2").hide();
        $("#thank_page").hide();

      });

      $("#s6_p").on('click',function(){

      	$("#header").show(500);
      	$("#footer").show(500);
      	$("#step1").hide();
      	$("#step2").hide();
      	$("#step3").hide();
      	$("#step4").hide();
      	$("#step5").show(500);
      	$("#step6").hide();
      	$("#template1").hide();
      	$("#template2").hide();
        $("#thank_page").hide();

      });

      $("#image1").on('click',function(){

      	$("#header").hide();
      	$("#footer").hide();
      	$("#step1").hide();
      	$("#step2").hide();
      	$("#step3").hide();
      	$("#step4").hide();
      	$("#step5").hide();
      	$("#step6").hide();
      	$("#template1").show();
      	$("#template2").hide();
        $("#thank_page").hide();


      });

      $("#image2").on('click',function(){

      	$("#header").hide();
      	$("#footer").hide();
      	$("#step1").hide();
      	$("#step2").hide();
      	$("#step3").hide();
      	$("#step4").hide();
      	$("#step5").hide();
      	$("#step6").hide();
      	$("#template1").hide();
      	$("#template2").show();
        $("#thank_page").hide();


      });

      $("#t1_f, #t2_f").on('click',function(){

        $("#header").hide();
        $("#footer").hide();
        $("#step1").hide();
        $("#step2").hide();
        $("#step3").hide();
        $("#step4").hide();
        $("#step5").hide();
        $("#step6").hide();
        $("#template1").hide();
        $("#template2").hide();
        $("#thank_page").show(500);


      });
      
      $("#s6_b").on('click',function(){
         
       alert("Please Select one of the template from above");
      }); 

      $("#t1_p, #t2_P").on('click',function(){
       
        $("#header").show(500);
        $("#footer").show(500);
        $("#step1, #step2, #step3, #step4, #step5, #template1, #template2, #thank_page").hide();
        $("#step6").show(500);
      });
      
});
 
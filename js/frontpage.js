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
      $("#template1").hide();
      $("#template2").show();



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
      	$("#template1").hide();
        $("#template2").hide();

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
      	$("#template1").hide();
      	$("#template2").hide();

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
      	$("#template1").hide();
      	$("#template2").hide();

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
      	$("#template1").hide();
      	$("#template2").hide();

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
      	$("#template1").hide();
      	$("#template2").hide();

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
      	$("#template1").hide();
      	$("#template2").hide();

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
      	$("#template1").hide();
      	$("#template2").hide();

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
      	$("#template1").hide();
      	$("#template2").hide();

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
      	$("#template1").hide();
      	$("#template2").hide();

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
      	$("#template1").hide();
      	$("#template2").hide();

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
        $("#template1").hide();
      	$("#template2").hide();

      });

      $("#s6_p").on('click',function(){

      	$("#header").show(500);
      	$("#footer").show(500);
      	$("#step1").hide();
      	$("#step2").hide();
      	$("#step3").hide();
      	$("#step4").hide(500);
      	$("#step5").show(500);
      	$("#step6").hide();
      	$("#template1").hide();
      	$("#template2").hide();

      });

      $("#image1").on('click',function(){

      	$("#header").hide(500);
      	$("#footer").hide(500);
      	$("#step1").hide();
      	$("#step2").hide();
      	$("#step3").hide();
      	$("#step4").hide(500);
      	$("#step5").hide(500);
      	$("#step6").hide();
      	$("#template1").show();
      	$("#template2").hide();


      });

      $("#image2").on('click',function(){

      	$("#header").hide(500);
      	$("#footer").hide(500);
      	$("#step1").hide();
      	$("#step2").hide();
      	$("#step3").hide();
      	$("#step4").hide(500);
      	$("#step5").hide(500);
      	$("#step6").hide();
      	$("#template1").show();
      	$(".template2").hide();


      });
});


var user={

	fullname                  :$("#usr_name").val(),
	email                     :$("#usr_name").val(),
	phone                     :$("usr_phone").val(),
	specialization            :$("usr_specialization").val(),
    experience                :$("usr_exp").val(),
    job_description           :$("job_description").val(),
    qual1                     :$("qualification1").val(),
    college_name1             :$("college_name1").val(),
    marks1                    :$("college_%1").val(),
    sub1                      :$("college_sb1").val(),
    qual1                     :$("qualification2").val(),
    college_name1             :$("college_name2").val(),
    marks1                    :$("college_%2").val(),
    sub1                      :$("college_sb2").val(),
    qual1                     :$("qualification3").val(),
    college_name1             :$("college_name3").val(),
    marks1                    :$("college_%3").val(),
    sub1                      :$("college_sb3").val(),
    extra_curricular          :$("extra_curricular").val(),
    gender                    :$("gender").val(),
    hobbie                    :$("hobbie").val(),
    language                  :$("language" ).val(),
    nationality               :$("nationality").val()
};




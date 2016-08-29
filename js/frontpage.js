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

      $("#s5_n, #t1_p, #t2_p").on('click',function(){

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
      	$("#template1").hide();
      	$("#template2").show();


      });
      
});

$(document).ready(function(){   

      $("form").on("submit",function(e){ e.preventDefault();
        
        var user={

	            fullname                  :$("#usr_name").val(),
	            email                     :$("#usr_email").val(),
	            phone                     :$("#usr_phone").val(),
	            specialization            :$("#usr_specialization").val(),
              experience                :$("#usr_exp").val(),
              job_description           :$("#job_description").val(),
              qual1                     :$("#qualification1").val(),
              college_name1             :$("#college_name1").val(),
              marks1                    :$("#college_p1").val(),
              sub1                      :$("#college_sb1").val(),
              qual2                     :$("#qualification2").val(),
              college_name2             :$("#college_name2").val(),
              marks2                    :$("#college_p2").val(),
              sub2                      :$("#college_sb2").val(),
              qual3                     :$("#qualification3").val(),
              college_name3             :$("#college_name3").val(),
              marks3                    :$("#college_p3").val(),
              sub3                      :$("#college_sb3").val(),
              extra_curricular          :$("#extra_curricular").val(),
              gender                    :$("#gender").val(),
              hobbie                    :$("#hobbie").val(),
              language                  :$("#language" ).val(),
              nationality               :$("#nationality").val()
        }; 

        
            // template 1
           document.getElementById("r_name").innerHTML = user.fullname;
           document.getElementById("r_spl").innerHTML = user.specialization;
           document.getElementById("r_email").innerHTML = user.email;
           document.getElementById("r_phone").innerHTML = user.phone;
           document.getElementById("r_n.exp").innerHTML = user.experience;
           document.getElementById("r_j.des").innerHTML = user.job_description;
           document.getElementById("stn1").innerHTML = user.qual1
           document.getElementById("college1").innerHTML = user.college_name1;
           document.getElementById("cgpa1").innerHTML = user.marks1;
           document.getElementById("sub1").innerHTML = user.sub1;
           document.getElementById("stn2").innerHTML = user.qual2
           document.getElementById("college2").innerHTML = user.college_name2;
           document.getElementById("cgpa2").innerHTML = user.marks2;
           document.getElementById("sub2").innerHTML = user.sub2;
           document.getElementById("stn3").innerHTML = user.qual3
           document.getElementById("college3").innerHTML = user.college_name3;
           document.getElementById("cgpa3").innerHTML = user.marks3;
           document.getElementById("sub3").innerHTML = user.sub3;
           document.getElementById("r_EC").innerHTML = user.extra_curricular;
           document.getElementById("r_gender").innerHTML = user.gender;
           document.getElementById("r_hobbies").innerHTML = user.hobbie;
           document.getElementById("r_lan").innerHTML = user.language;
           document.getElementById("r_nationality").innerHTML = user.nationality;



           //template2
           document.getElementById("2r_name").innerHTML = user.fullname;
           document.getElementById("2r_spl").innerHTML = user.specialization;
           document.getElementById("2r_email").innerHTML = user.email;
           document.getElementById("2r_phone").innerHTML = user.phone;
           document.getElementById("2r_n.exp").innerHTML = user.experience;
           document.getElementById("2r_j.des").innerHTML = user.job_description;
           document.getElementById("2stn1").innerHTML = user.qual1
           document.getElementById("2college1").innerHTML = user.college_name1;
           document.getElementById("2cgpa1").innerHTML = user.marks1;
           document.getElementById("2sub1").innerHTML = user.sub1;
           document.getElementById("2stn2").innerHTML = user.qual2
           document.getElementById("2college2").innerHTML = user.college_name2;
           document.getElementById("2cgpa2").innerHTML = user.marks2;
           document.getElementById("2sub2").innerHTML = user.sub2;
           document.getElementById("2stn3").innerHTML = user.qual3
           document.getElementById("2college3").innerHTML = user.college_name3;
           document.getElementById("2cgpa3").innerHTML = user.marks3;
           document.getElementById("2sub3").innerHTML = user.sub3;
           document.getElementById("2r_EC").innerHTML = user.extra_curricular;
           document.getElementById("2r_gender").innerHTML = user.gender;
           document.getElementById("2r_hobbies").innerHTML = user.hobbie;
           document.getElementById("2r_lan").innerHTML = user.language;
           document.getElementById("2r_nationality").innerHTML = user.nationality;

        });

});




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
        $("#thank_page").hide();

      });
      
      $("#s1_n").on('click',function(){

      	$("#header").show(500);
      	$("#footer").show(500);
      	$("#step1").hide(500);
      	$("#step2").show(500); 
                    $(".jd2").hide(); 
                    $(".jd3").hide();
      	$("#step3").hide();
      	$("#step4").hide();
      	$("#step5").hide();
      	$("#step6").hide();
      	$("#template1").hide();
        $("#thank_page").hide();
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
        $("#thank_page").hide(500);

      });

      $(".add1").on('click',function(){

        $("#header").show(500);
        $("#footer").show(500);
        $("#step1").hide(500);
        $("#step2").show(500); 
                    $(".jd1").show();
                    $(".jd2").show(); 
                    $(".jd3").hide();
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
        $("#step1").hide(500);
        $("#step2").show(500);
                    $(".jd1").show();
                    $(".jd2").show(); 
                    $(".jd3").show();
                    $(".add1").hide();
                    $(".add2").hide();  
        $("#step3").hide();
        $("#step4").hide();
        $("#step5").hide();
        $("#step6").hide();
        $("#template1").hide();
        $("#thank_page").hide();
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
        $("#thank_page").hide();

      });



      $(".s2_p").on('click',function(){

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
        $("#thank_page").hide();

      });

      $("#s3_n").on('click',function(){

      	$("#header").show(500);
      	$("#footer").show(500);
      	$("#step1").hide();
      	$("#step2").hide();
      	$("#step3").hide(500);
      	$("#step4").show(500);
                $(".ac1").show();
                $(".ac2").hide();
      	$("#step5").hide();
      	$("#step6").hide();
      	$("#template1").hide();
        $("#thank_page").hide();

      });

      $(".add4").on('click',function(){

        $("#header").show(500);
        $("#footer").show(500);
        $("#step1").hide();
        $("#step2").hide();
        $("#step3").hide(500);
        $("#step4").show(500);
                $(".ac1").show();
                $(".ac2").show();
                $(".add4").hide();
        $("#step5").hide();
        $("#step6").hide();
        $("#template1").hide();
        $("#thank_page").hide();

      });

      $(".s3_p").on('click',function(){

      	$("#header").show(500);
      	$("#footer").show(500);
      	$("#step1").hide();
      	$("#step2").show(500);
      	$("#step3").hide(500);
      	$("#step4").hide();
      	$("#step5").hide();
      	$("#step6").hide();
      	$("#template1").hide();
        $("#thank_page").hide();

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
        $("#thank_page").hide();

      });

      $(".s4_p").on('click',function(){

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
        $("#thank_page").hide();

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
        $("#thank_page").hide();

      });


      $(".s5_p").on('click',function(){

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
        $("#thank_page").hide();

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
        $("#thank_page").hide();

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
        $("#thank_page").hide();


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
        $("#thank_page").hide();


      });

      $("#t1_f, #t2_f").on('click',function(){

        $("#header").hide(500);
        $("#footer").hide(500);
        $("#step1").hide();
        $("#step2").hide();
        $("#step3").hide();
        $("#step4").hide(500);
        $("#step5").hide(500);
        $("#step6").hide();
        $("#template1").hide();
        $("#template2").hide();
        $("#thank_page").show(500);


      });
      
});

//******************************************* Data storing and retrieving 

$(document).ready(function(){   

      $("form").on("submit",function(e){ e.preventDefault();
        
        var user={
              // personal information storing
	            fullname                  :$("#usr_name").val(),
	            email                     :$("#usr_email").val(),
	            phone                     :$("#usr_phone").val(),
	            specialization            :$("#usr_specialization").val(),
              // Work experience details storing
              employer1                 :$("#ce1").val(),
              employee_from1            :$("#ce_f1").val(),
              employee_to1              :$("#ce_t1").val(),
              job_description1          :$("#job_description1").val(),
              employer2                 :$("#pe2").val(),
              employee_from2            :$("#pe_f2").val(),
              employee_to2              :$("#pe_t2").val(),
              job_description2          :$("#job_description2").val(),
              employer3                 :$("#pe3").val(),
              employee_from3            :$("#pe_f3").val(),
              employee_to3              :$("#pe_t3").val(),
              job_description3          :$("#job_description3").val(),
              // Qualification details storing
              qual1                     :$("#qualification1").val(),
              college_name1             :$("#college_name1").val(),
              marks1                    :$("#college_p1").val(),
              year1                     :$("#ay1").val(),
              sub1                      :$("#college_sb1").val(),
              qual2                     :$("#qualification2").val(),
              college_name2             :$("#college_name2").val(),
              marks2                    :$("#college_p2").val(),
              year2                     :$("#ay2").val(),
              sub2                      :$("#college_sb2").val(),
              qual3                     :$("#qualification3").val(),
              college_name3             :$("#college_name3").val(),
              marks3                    :$("#college_p3").val(),
              year3                     :$("#ay3").val(),
              sub3                      :$("#college_sb3").val(),
              // Extra curricular information storing
              extra_curricular1         :$("#extra_curricular1").val(),
              extra_curricular2         :$("#extra_curricular2").val(),
              //other information storing
              gender                    :$("#gender").val(),
              hobbie                    :$("#hobbie").val(),
              language                  :$("#language" ).val(),
              nationality               :$("#nationality").val()
        }; 

        
// *************************Data storing and retrieving  for template 1

               // personal information retrieving
           document.getElementById("r_name").innerHTML = user.fullname;
           document.getElementById("rd_name").innerHTML = user.fullname;
           document.getElementById("r_spl").innerHTML = user.specialization;
           document.getElementById("r_email").innerHTML = user.email;
           document.getElementById("r_phone").innerHTML = user.phone;
               // Work experience details retrieving
           document.getElementById("emp1").innerHTML = user.employer1;
           document.getElementById("empfr1").innerHTML = user.employee_from1;
           document.getElementById("empto1").innerHTML = user.employee_from2;
           document.getElementById("r_j.des1").innerHTML = user.job_description1;
           document.getElementById("emp2").innerHTML = user.employer2;
           document.getElementById("empfr2").innerHTML = user.employee_from2;
           document.getElementById("empto2").innerHTML = user.employee_to2;
           document.getElementById("r_j.des2").innerHTML = user.job_description2;
           document.getElementById("emp3").innerHTML = user.employer3;
           document.getElementById("empfr3").innerHTML = user.employee_from3;
           document.getElementById("empto3").innerHTML = user.employee_to3;
           document.getElementById("r_j.des3").innerHTML = user.job_description3;
               // Qualification details retrieving
           document.getElementById("stn1").innerHTML = user.qual1
           document.getElementById("college1").innerHTML = user.college_name1;
           document.getElementById("cgpa1").innerHTML = user.marks1;
           document.getElementById("cgpa1").innerHTML = user.marks1;
           document.getElementById("ayr1").innerHTML = user.year1;
           document.getElementById("sub1").innerHTML = user.sub1;
           document.getElementById("stn2").innerHTML = user.qual2
           document.getElementById("college2").innerHTML = user.college_name2;
           document.getElementById("cgpa2").innerHTML = user.marks2;
           document.getElementById("ayr2").innerHTML = user.year2;
           document.getElementById("sub2").innerHTML = user.sub2;
           document.getElementById("stn3").innerHTML = user.qual3
           document.getElementById("college3").innerHTML = user.college_name3;
           document.getElementById("cgpa3").innerHTML = user.marks3;
           document.getElementById("ayr3").innerHTML = user.year3;
           document.getElementById("sub3").innerHTML = user.sub3;
               // Extra curricular information retrieving
           document.getElementById("r_EC1").innerHTML = user.extra_curricular1;
           document.getElementById("r_EC2").innerHTML = user.extra_curricular2;
               // other information retrieving
           document.getElementById("r_gender").innerHTML = user.gender;
           document.getElementById("r_hobbies").innerHTML = user.hobbie;
           document.getElementById("r_lan").innerHTML = user.language;
           document.getElementById("r_nationality").innerHTML = user.nationality;



//*********************************Data storing and retrieving for template2

                // personal information retrieving
           document.getElementById("2r_name").innerHTML = user.fullname;
           document.getElementById("2rd_name").innerHTML = user.fullname;
           document.getElementById("2r_spl").innerHTML = user.specialization;
           document.getElementById("2r_email").innerHTML = user.email;
           document.getElementById("2r_phone").innerHTML = user.phone;
               // Work experience details retrieving
           document.getElementById("2emp1").innerHTML = user.employer1;
           document.getElementById("2empfr1").innerHTML = user.employee_from1;
           document.getElementById("2empto1").innerHTML = user.employee_from2;
           document.getElementById("2r_j.des1").innerHTML = user.job_description1;
           document.getElementById("2emp2").innerHTML = user.employer2;
           document.getElementById("2empfr2").innerHTML = user.employee_from2;
           document.getElementById("2empto2").innerHTML = user.employee_to2;
           document.getElementById("2r_j.des2").innerHTML = user.job_description2;
           document.getElementById("2emp3").innerHTML = user.employer3;
           document.getElementById("2empfr3").innerHTML = user.employee_from3;
           document.getElementById("2empto3").innerHTML = user.employee_to3;
           document.getElementById("2r_j.des3").innerHTML = user.job_description3;
               // Qualification details retrieving
           document.getElementById("2stn1").innerHTML = user.qual1
           document.getElementById("2college1").innerHTML = user.college_name1;
           document.getElementById("2cgpa1").innerHTML = user.marks1;
           document.getElementById("2ayr1").innerHTML = user.year1;
           document.getElementById("2sub1").innerHTML = user.sub1;    
           document.getElementById("2stn2").innerHTML = user.qual2
           document.getElementById("2college2").innerHTML = user.college_name2;
           document.getElementById("2cgpa2").innerHTML = user.marks2;
           document.getElementById("2ayr2").innerHTML = user.year2;
           document.getElementById("2sub2").innerHTML = user.sub2;
           document.getElementById("2stn3").innerHTML = user.qual3
           document.getElementById("2college3").innerHTML = user.college_name3;
           document.getElementById("2cgpa3").innerHTML = user.marks3;
           document.getElementById("2ayr3").innerHTML = user.year3;
           document.getElementById("2sub3").innerHTML = user.sub3;
               // Extra curricular information retrieving
           document.getElementById("2r_EC1").innerHTML = user.extra_curricular1;
           document.getElementById("2r_EC2").innerHTML = user.extra_curricular2;
               // other information retrieving
           document.getElementById("2r_gender").innerHTML = user.gender;
           document.getElementById("2r_hobbies").innerHTML = user.hobbie;
           document.getElementById("2r_lan").innerHTML = user.language;
           document.getElementById("2r_nationality").innerHTML = user.nationality;

        });        

});

      // function to print page    
           function printPage() {
             window.print();
           };




var user = {

	firstName: Kundan,
	trainingTitle: ABCD,
	numDays: today
}


var trainingReminderCTADesign = function(user){

	var html = '<table align="left" border="0" cellpadding="0" cellspacing="0" style="border:2px solid #E3E2E2; width:100%">'+
				'<tbody>'+
					'<tr style="background:rgb(36, 35, 35);color:#F8F0F0;text-align:center;font-size:25px;">'+
						'<td>edWisor</td>'+
					'</tr>'+
					'<tr>'+
						'<td style="padding:2%;">&nbsp;'+
						'<h3>Dear '+user.firstName+'</h3>'+

						'<h3>We just wanted to remind you about your live training coming up</h3>'+
						'<h3>Your live training - '+user.trainingTitle+' starts '+user.numDays+' </h3>'+
						'<h3><a href="https://edwisor.com/myskills.html">Click here to go to your My Skills page and checkout this training details</a></h3>'+
						'<h4>Please try to be online 5 minutes before the training schedule</h4>'+						
						'<h5>In case of doubts or queries, you can reach us at +91 8588837942 or just reply to this email and we will get back to you</h5><br />'+
						'Cheers,&nbsp;<br />'+
						'edWisor Team.</h3>'+
						'</td>'+
					'</tr>'+
					'<tr style="width:100%;background:#EFEFEF">'+
						'<td style="padding:2%;">'+
						'<p><em>Copyright &copy; 2015 Saraswati Digital Pvt. Ltd. All rights reserved.</em>&nbsp;</p>'+
						'<p><br />'+
						'</td>'+
					'</tr>'+
				'</tbody>'+
			'</table>'



		return html;




}// end training email



<!DOCTYPE html>
<html>
<body>

<p id="demo"></p>

<script>
//var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

//function abc(){
//return person.firstName;
//}

//document.getElementById("demo").innerHTML = abc();

var user = {

 firstName: "Kundan'",
 trainingTitle: "ABCD",
 numDays: "today"
};




 var html = '<table align="left" border="0" cellpadding="0" cellspacing="0" style="border:2px solid #E3E2E2; width:100%">'+
    '<tbody>'+
     '<tr style="background:rgb(36, 35, 35);color:#F8F0F0;text-align:center;font-size:25px;">'+
      '<td>edWisor</td>'+
     '</tr>'+
     '<tr>'+
      '<td style="padding:2%;">&nbsp;'+
      '<h3>Dear '+user.firstName+'</h3>'+

      '<h3>We just wanted to remind you about your live training coming up</h3>'+
      '<h3>Your live training - '+user.trainingTitle+' starts '+user.numDays+' </h3>'+
      '<h3><a href="https://edwisor.com/myskills.html">Click here to go to your My Skills page and checkout this training details</a></h3>'+
      '<h4>Please try to be online 5 minutes before the training schedule</h4>'+      
      '<h5>In case of doubts or queries, you can reach us at +91 8588837942 or just reply to this email and we will get back to you</h5><br />'+
      'Cheers,&nbsp;<br />'+
      'edWisor Team.</h3>'+
      '</td>'+
     '</tr>'+
     '<tr style="width:100%;background:#EFEFEF">'+
      '<td style="padding:2%;">'+
      '<p><em>Copyright &copy; 2015 Saraswati Digital Pvt. Ltd. All rights reserved.</em>&nbsp;</p>'+
      '<p><br />'+
      '</td>'+
     '</tr>'+
    '</tbody>'+
   '</table>'

function abc(){

  return html;

}// end training email

document.getElementById("demo").innerHTML = abc();

</script>

</body>
</html>

